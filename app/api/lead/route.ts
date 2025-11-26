import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, whatsapp } = body;

    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU5MTEzMzIxNiwiYWFpIjoxMSwidWlkIjo5Njc4Nzk1NCwiaWFkIjoiMjAyNS0xMS0yNlQxODo0ODowNC43MzVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MzI2NzkwMTcsInJnbiI6ImV1YzEifQ.BSsx0rJNiR9pg2lVIX9R7euOiTG3iIZa65yreKeECqs";
    const boardId = "5088248373";
    const groupName = "Landing Page Leads"; // Updated group name

    // 1. Fetch Board Structure (Groups and Columns) to get dynamic IDs
    const structureQuery = `query {
      boards (ids: ${boardId}) {
        groups {
          id
          title
        }
        columns {
          id
          title
          type
        }
      }
    }`;

    const structureResponse = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
      body: JSON.stringify({ query: structureQuery }),
    });

    const structureData = await structureResponse.json();
    
    if (structureData.errors) {
      console.error('Monday.com Structure Error:', structureData.errors);
      throw new Error('Failed to fetch board structure');
    }

    const boardData = structureData.data.boards[0];
    
    // Find Group ID
    let groupId = "topics"; // Default fallback
    const targetGroup = boardData.groups.find((g: any) => g.title === groupName);
    if (targetGroup) {
      groupId = targetGroup.id;
    }

    // Find Column IDs
    // We look for columns named "Email" and "Phone" (case insensitive)
    const emailColumn = boardData.columns.find((c: any) => c.title.toLowerCase().includes('email'));
    const phoneColumn = boardData.columns.find((c: any) => c.title.toLowerCase().includes('phone'));
    
    // Construct Column Values
    const columnValues: any = {};

    if (emailColumn) {
      // Monday.com Email column expects specific object structure or just text depending on type
      // For type 'email', it expects { email: "...", text: "..." }
      columnValues[emailColumn.id] = { email: email, text: email };
    }

    if (phoneColumn) {
      // For type 'phone', it often expects { phone: "+972...", countryShortName: "IL" }
      // We'll assume IL for now given the hebrew context, or just send raw string if it allows
      columnValues[phoneColumn.id] = { phone: phone, countryShortName: "IL" };
    }

    // Also try to add whatsapp info if possible, maybe to a status or text column?
    // For now we'll skip unless there is a specific column for it.

    const query = `mutation {
      create_item (
        board_id: ${boardId}, 
        group_id: "${groupId}",
        item_name: "${name.replace(/"/g, '\\"')}", 
        column_values: ${JSON.stringify(JSON.stringify(columnValues))}
      ) {
        id
      }
    }`;

    console.log("Sending mutation:", query); // For debugging logs if needed

    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Monday.com Mutation Error:', data.errors);
      return NextResponse.json(
        { error: 'Failed to submit lead to Monday.com', details: data.errors },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data.data.create_item.id });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
