# Benda LTD Landing Page

דף נחיתה פרימיום בעברית לקורס הדרופשיפינג של בנדה באיביי.

## טכנולוגיות

- **Next.js 14** עם App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Radix UI** primitives
- **framer-motion** לאנימציות
- **lucide-react** לאייקונים

## התקנה

1. התקן את התלויות:
```bash
npm install
```

2. צור קובץ `.env.local` והוסף את ה-Facebook Pixel ID שלך:
```
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id_here
```

3. הרץ את שרת הפיתוח:
```bash
npm run dev
```

4. פתח [http://localhost:3000](http://localhost:3000) בדפדפן.

## מבנה הפרויקט

```
├── app/
│   ├── layout.tsx          # Layout ראשי עם metadata
│   ├── page.tsx            # דף הבית הראשי עם כל הסעיפים
│   └── globals.css         # סגנונות גלובליים
├── components/
│   ├── ui/                 # רכיבי shadcn/ui
│   ├── FacebookPixel.tsx   # קומפוננטת Facebook Pixel
│   └── LeadForm.tsx        # טופס לידים
└── lib/
    └── utils.ts            # פונקציות עזר
```

## תכונות

- ✅ עיצוב פרימיום עם פלטת צבעים כהה וזהב
- ✅ רספונסיבי מלא (mobile-first)
- ✅ אנימציות עדינות עם framer-motion
- ✅ אינטגרציה עם Facebook Pixel
- ✅ טופס לידים עם ולידציה
- ✅ כל הטקסט בעברית עם כיוון RTL
- ✅ SEO מותאם עם metadata מלא
- ✅ סעיפים: Hero, Course Content, Support, Social Proof, FAQ, ועוד

## בנייה לפרודקשן

```bash
npm run build
npm start
```

## הערות

- כל הטקסט בעברית ומותאם לקהל הישראלי
- העיצוב מותאם לסגנון פרימיום ולוקסוס
- הקומפוננטות מותאמות לשימוש חוזר וניקיון קוד
