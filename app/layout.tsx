import type { Metadata } from "next"
import { Heebo } from "next/font/google"
import "./globals.css"

const heebo = Heebo({ 
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo"
})

export const metadata: Metadata = {
  title: "רואי בנדה | דרופשיפינג באיביי",
  description:
    "בית ספר אמיתי למסחר אונליין. לומדים מהבסיס עד לרמה גבוהה איך לבנות חנות איביי שמכניסה כסף אמיתי. ליווי צמוד, תמיכה בעברית, מעל 1,000 תלמידים.",
  icons: {
    icon: '/ֿlogo for shirt.png',
  },
  openGraph: {
    title: "רואי בנדה | דרופשיפינג באיביי",
    description:
      "בית ספר אמיתי למסחר אונליין. לומדים מהבסיס עד לרמה גבוהה איך לבנות חנות איביי שמכניסה כסף אמיתי.",
    type: "website",
    images: [
      {
        url: '/ֿlogo for shirt.png',
        width: 800,
        height: 600,
        alt: 'Benda LTD Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
