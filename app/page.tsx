"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  GraduationCap,
  TrendingUp,
  Users,
  CheckCircle2,
  Play,
  ArrowDown,
  Shield,
  Zap,
  Target,
  Building2,
  MessageCircle,
  Video,
  Phone,
  Mail,
  Globe,
  X,
} from "lucide-react"
import Image from "next/image"
import FacebookPixel from "@/components/FacebookPixel"
import LeadForm from "@/components/LeadForm"
import VideoTestimonial from "@/components/VideoTestimonial"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Client success images
const clientSuccessImages = [
  "/298813134_783791176136222_4672139941980049783_n.jpg",
  "/301007724_494326659199740_8978315828646209951_n.jpg",
  "/294573243_723938208694290_5519150762512337179_n.jpg",
  "/293482998_433497171985526_5619805920720216615_n.jpg",
  "/300997209_104039962390378_5905272177784291541_n.jpg",
  "/294103593_600140608365227_5417791793332164565_n.jpg",
  "/299755947_477906487100619_5690057428436130046_n.jpg",
  "/298561098_639291857275665_1646313675013407635_n.jpg",
  "/293657674_119266957483455_1466421496491123420_n.jpg",
  "/299703360_610587213753742_1018275823231814707_n.jpg",
  "/293434991_2212789628896505_1167341289399830770_n.jpg",
  "/293635726_760723801790570_8490625358116589088_n.jpg",
  "/296710387_793823228293748_2422850676595649108_n.jpg",
  "/296683732_120271407411953_6456767602275050828_n.jpg",
  "/300644718_396982059033791_5584504997762571840_n.jpg",
  "/295582873_5429825733723468_8758509191931564510_n.jpg",
  "/293011067_2334014126736282_8066866862042085608_n.jpg",
  "/300249276_784971305977268_6216786919571899475_n.jpg",
  "/293541365_2185641721612184_7958646119861432801_n.jpg",
  "/293048833_783958446065036_4504058544458771782_n.jpg",
  "/292535301_573570171074885_731882440791297555_n.jpg",
  "/298853645_929093161220512_8274262666051552084_n.jpg",
  "/1.png",
  "/299152820_3370937799862204_5660498506023484626_n.jpg",
  "/296224659_730474084676473_1096331954017987642_n.jpg",
  "/293567782_848132612832324_2764295090189010666_n.jpg",
  "/293310511_722157102373234_664740383982589313_n.jpg",
  "/292865209_1483223452122675_405525772503480754_n.jpg",
  "/293650881_1188280578694170_8321264367215162843_n.jpg",
]

const scrollToForm = () => {
  const form = document.getElementById("lead-form")
  form?.scrollIntoView({ behavior: "smooth" })
}

// Client Success Carousel Component
function ClientSuccessCarousel({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = current.clientWidth
      const scrollPos = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount
      
      current.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      })
    }
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative px-4 md:px-12 lg:px-16 group" dir="ltr">
      {/* Carousel Container */}
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((imagePath, index) => (
          <div
            key={`${imagePath}-${index}`}
            className="flex-shrink-0 w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] snap-center"
          >
            <Card className="border-white/15 card-modern overflow-hidden hover:border-[#4f8bff]/30 transition-all duration-300 p-2 h-full">
              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded bg-[#1a1a1f]">
                <Image
                  src={imagePath}
                  alt={`הישגי לקוחות - ${index + 1}`}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#4f8bff] hover:bg-[#3b82f6] text-white flex items-center justify-center transition-all duration-200 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-0"
        aria-label="Previous image"
      >
        <ArrowDown className="h-5 w-5 md:h-6 md:w-6 rotate-90" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#4f8bff] hover:bg-[#3b82f6] text-white flex items-center justify-center transition-all duration-200 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-0"
        aria-label="Next image"
      >
        <ArrowDown className="h-5 w-5 md:h-6 md:w-6 -rotate-90" />
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <FacebookPixel />
      <div className="min-h-screen bg-transparent text-[#F2F3F6] overflow-x-hidden relative">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent section-transition">
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8 relative z-30"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 px-4 py-2 text-sm font-semibold">
                    בית הספר של בנדה למסחר אונליין
                  </Badge>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
                >
                  <span className="block mb-2 text-[#F2F3F6]">בנה חנות איביי</span>
                  <span className="text-[#3b82f6] block">שמכניסה כסף אמיתי</span>
                  <span className="block mt-2 text-[#CFD4DC]">עם ליווי צמוד, לא לבד מול המסך</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl text-[#CFD4DC] leading-relaxed max-w-2xl"
                >
                  זה לא עוד קורס מוקלט. זה <span className="text-[#3b82f6] font-semibold">בית ספר אמיתי למסחר אונליין</span> – מסלול מסודר מהבסיס עד לרמה של עסק אונליין אמיתי.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Button
                    onClick={scrollToForm}
                    className="bg-[#4f8bff] hover:bg-[#3b82f6] text-white font-semibold text-lg px-10 py-6 rounded-md transition-all duration-200"
                    size="lg"
                  >
                    אני רוצה לשמוע על הקורס
                  </Button>
                  <Button
                    onClick={() => {
                      const content = document.getElementById("course-content")
                      content?.scrollIntoView({ behavior: "smooth" })
                    }}
                    variant="outline"
                    className="border border-[#4f8bff] text-[#4f8bff] hover:bg-[#4f8bff]/12 hover:border-[#4f8bff] text-lg px-10 py-6 rounded-md transition-all duration-200"
                    size="lg"
                  >
                    לפרטים על מה לומדים בקורס
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex items-center gap-3 pt-4"
                >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-[#4f8bff] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#3b82f6] font-semibold text-lg">1,000+</span>
                    <span className="text-[#CFD4DC] text-sm">תלמידים שכבר עברו דרך בנדה</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Lead Form */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden md:block relative z-20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <LeadForm className="relative z-20" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-8 w-8 text-[#F2F3F6]/40" />
            </motion.div>
          </motion.div>
        </section>

        {/* Lead Form Section (Mobile) */}
        <section id="lead-form" className="py-20 bg-transparent md:hidden relative z-10 section-transition">
          <div className="container mx-auto px-4 relative z-10">
            <LeadForm />
          </div>
        </section>

        {/* Why This Course is Different */}
        <section className="py-24 bg-transparent relative overflow-hidden z-10 section-transition">
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 mb-6 px-4 py-2">
                למה בנדה?
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#F2F3F6]">
                למה הקורס של בנדה שונה מכל מה שראית?
              </h2>
              <div className="w-24 h-0.5 bg-[#4f8bff]/50 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "בית ספר אמיתי למסחר אונליין",
                  description:
                    "לא עוד קורס מוקלט בלי ליווי. כאן תקבל מסלול מסודר מהבסיס עד לרמה של עסק אמיתי, עם תמיכה צמודה בכל שלב.",
                },
                {
                  icon: Target,
                  title: "מסלול מסודר מהבסיס עד לרמה גבוהה",
                  description:
                    "גם אם אינך מבין במסחר אונליין – הקורס מתחיל מהבסיס ומלווה אותך עד שתנהל מספר חנויות במקביל.",
                },
                {
                  icon: TrendingUp,
                  title: "פוקוס על רווחיות אמיתית",
                  description:
                    "פחות 'לרדוף אחרי טרנדים', יותר לבנות עסק יציב שמכניס כסף לאורך זמן. תלמד איך למצוא מוצרים עם רווח גבוה לכל מכירה.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group"
                >
                  <Card className="h-full border-white/15 card-modern hover:border-[#4f8bff]/30 transition-all duration-300 relative overflow-hidden">
                    <CardHeader className="relative z-10">
                      <div className="w-16 h-16 rounded-lg bg-[#4f8bff]/12 flex items-center justify-center mb-4 group-hover:bg-[#4f8bff]/20 transition-colors duration-300">
                        <item.icon className="h-8 w-8 text-[#4f8bff]" />
                      </div>
                      <CardTitle className="text-2xl font-black text-[#F2F3F6] group-hover:text-[#4f8bff] transition-colors leading-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-[#CFD4DC] leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section id="course-content" className="py-24 bg-transparent relative overflow-hidden z-10 section-transition">
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 mb-6 px-4 py-2">
                המסלול המלא
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#F2F3F6]">
                מה אתה הולך ללמוד?
              </h2>
              <p className="text-xl text-[#CFD4DC] max-w-3xl mx-auto">
                מסלול מסודר מהבסיס עד לרמה של עסק אונליין אמיתי
              </p>
              <div className="w-24 h-0.5 bg-[#4f8bff]/50 mx-auto mt-6"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  step: "1",
                  title: "פתיחת חנות והגדרות נכונות",
                  description:
                    "תלמד איך לפתוח חנות איביי מקצועית מההתחלה, עם כל ההגדרות הנכונות שמבטיחות שהחנות תראה רצינית ותתחיל למכור כבר בחודש הראשון.",
                },
                {
                  step: "2",
                  title: "מחקר מוצרים ומציאת רווח גבוה",
                  description:
                    "שיטה מסודרת למצוא מוצרים עם רווח גבוה לכל מכירה. תלמד איך לנתח שווקים, לזהות הזדמנויות, ולבחור מוצרים שמכניסים כסף אמיתי.",
                },
                {
                  step: "3",
                  title: "בניית חנות יציבה ומותג מסודר",
                  description:
                    "איך לבנות חנות שמחזיקה לאורך זמן ולא תלויה בטרנדים חולפים. תלמד על מיתוג, תמונות מקצועיות, ותיאורי מוצרים שממירים.",
                },
                {
                  step: "4",
                  title: "מעבר לספקים פרטיים",
                  description:
                    "כאן מתחיל הכסף האמיתי. תלמד איך לעבור מאלי אקספרס לספקים פרטיים – מה שמאפשר לך לשלוט במחירים, באיכות, וברווחיות.",
                },
                {
                  step: "5",
                  title: "הרחבה לניהול מספר חנויות",
                  description:
                    "איך לנהל מספר חנויות במקביל ולבנות 'אימפריית איקומרס'. תלמד על מערכות ניהול, אוטומציה, וצמיחה מבוקרת.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-[#4f8bff] border-4 border-black flex items-center justify-center"
                    >
                      <span className="text-white font-semibold text-xl">{item.step}</span>
                    </motion.div>
                    {index < 4 && (
                      <div className="w-1 h-full min-h-[80px] bg-[#4f8bff]/30 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <Card className="border-white/15 card-modern hover:border-[#4f8bff]/30 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-2xl font-black text-[#F2F3F6] group-hover:text-[#3b82f6] transition-colors leading-tight">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#CFD4DC] leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support & Community */}
        <section className="py-24 bg-transparent relative overflow-hidden z-10 section-transition">
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 mb-6 px-4 py-2">
                התמיכה שלנו
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#F2F3F6]">
                למה אף אחד לא נשאר לבד בקורס של בנדה?
              </h2>
              <div className="w-24 h-0.5 bg-[#4f8bff]/50 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Users,
                  title: "גישה ישירה לרואי בן דוד",
                  description:
                    "גישה ישירה למנכ\"ל Benda LTD, רואי בן דוד. תמיכה אישית בטלפון וואטסאפ, שיחות זום לפי הצורך, וכתף צמודה בכל שלב.",
                  image: clientSuccessImages[2] || undefined,
                },
                {
                  icon: MessageCircle,
                  title: "קבוצות וואטסאפ פעילות",
                  description:
                    "קהילה תוססת ופעילה של תלמידים רציניים בדיוק כמוך. בקבוצות שלנו משתפים אסטרטגיות מנצחות בזמן אמת, מתייעצים על מוצרים, פותרים בעיות טכניות יחד וחוגגים הצלחות. זה המקום לקבל תשובות מהירות מחברים למסע ומהצוות, ולדעת שאתה חלק מנבחרת מנצחת – לא עוד לבד מול המסך.",
                },
                {
                  icon: Phone,
                  title: "תמיכה בעברית מלאה",
                  description:
                    "אנחנו כאן בשבילך בשפה שלך. כל חומרי הלימוד, ההסברים הטכניים ומערך התמיכה הם ב-100% עברית ברורה ופשוטה. נתקלת בקושי? אנחנו זמינים למענה אישי, כולל אפשרות לשיחות זום פרטניות לפי הצורך כדי לפתוח כל חסם. ההתחייבות שלנו היא שאף תלמיד לא נשאר מאחור או נתקע בגלל חוסר הבנה.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group"
                >
                  <Card className="h-full border-white/15 card-modern hover:border-[#4f8bff]/30 transition-all duration-300 relative overflow-hidden">
                    <CardHeader className="relative z-10">
                      {item.image && (
                        <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden border border-white/15">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="w-16 h-16 rounded-lg bg-[#4f8bff]/12 flex items-center justify-center mb-4 group-hover:bg-[#4f8bff]/20 transition-colors duration-300">
                        <item.icon className="h-8 w-8 text-[#4f8bff]" />
                      </div>
                      <CardTitle className="text-2xl font-black text-[#F2F3F6] group-hover:text-[#4f8bff] transition-colors leading-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-[#CFD4DC] leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border border-[#4f8bff]/30 bg-[#4f8bff]/12 card-modern max-w-4xl mx-auto">
                <CardContent className="p-10">
                  <p className="text-xl md:text-2xl text-[#F2F3F6] text-center leading-relaxed font-bold">
                    <span className="text-[#3b82f6] font-bold">המסר שלנו פשוט:</span> מי שעובד מקבל כתף צמודה ולא נופל באמצע. 
                    יש ליווי, תמיכה, וקהילה של אנשים רציניים שמתקדמים יחד.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-transparent relative overflow-hidden z-10 section-transition">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 mb-6 px-4 py-2">
                הסיפור שלנו
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#F2F3F6]">
                המספרים והתלמידים מדברים בעד עצמם
              </h2>
              <div className="inline-flex items-center gap-3 bg-[#4f8bff]/12 border border-[#4f8bff]/30 rounded-full px-8 py-4">
                <Users className="h-6 w-6 text-[#4f8bff]" />
                <span className="text-2xl font-bold text-[#3b82f6]">1,000+</span>
                <span className="text-[#CFD4DC] text-lg">תלמידים בקורס</span>
              </div>
              <div className="w-24 h-0.5 bg-[#4f8bff]/50 mx-auto mt-6"></div>
            </motion.div>

            {/* Video Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                "X40LzyLzw3I",
                "lvs20YOMQSs",
                "_IuPKr934Ec",
                "o1lEjV8w0Qc"
              ].map((videoId, index) => (
                <motion.div
                  key={videoId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <VideoTestimonial videoId={videoId} />
                </motion.div>
              ))}
            </div>

            {/* Written Testimonials */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  name: "דני",
                  background: "עובד במשרה מלאה, התחיל לפני 8 חודשים",
                  quote:
                    "הקורס שינה לי את החיים. היום יש לי 3 חנויות שמכניסות יותר מהמשכורת שלי. הליווי של רואי היה קריטי.",
                },
                {
                  name: "שרה",
                  background: "אמא לשלושה, התחילה לפני שנה",
                  quote:
                    "זה לא היה קל בהתחלה, אבל הקהילה והתמיכה עזרו לי לעבור את כל המכשולים. היום אני מנהלת עסק אמיתי.",
                },
                {
                  name: "יוסי",
                  background: "סטודנט, התחיל לפני 6 חודשים",
                  quote:
                    "הקורס הכי מקצועי שראיתי. לא עוד 'איך להתעשר מהר', אלא שיטה אמיתית לבנות עסק. מומלץ בחום.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-white/15 card-modern hover:border-[#4f8bff]/30 transition-all duration-300 relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-4 left-4 text-[#4f8bff]/20 text-6xl font-serif">"</div>
                    
                    <CardContent className="p-8 relative z-10">
                      <p className="text-[#CFD4DC] mb-6 leading-relaxed text-lg font-semibold">
                        {testimonial.quote}
                      </p>
                      <Separator className="my-6 bg-white/12" />
                      <div>
                        <p className="font-semibold text-xl text-[#F2F3F6] mb-1">{testimonial.name}</p>
                        <p className="text-sm text-[#CFD4DC]">{testimonial.background}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Client Success Gallery - Carousel */}
        <section className="py-24 bg-transparent relative overflow-hidden z-10 section-transition">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 mb-6 px-4 py-2">
                הישגי התלמידים
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#F2F3F6]">
                מאות תלמידים כבר בונים עסקים מצליחים
              </h2>
              <p className="text-xl text-[#CFD4DC] max-w-3xl mx-auto mb-8">
                אלה הם רק חלק מההישגים של התלמידים שלנו. כל תמונה מייצגת סיפור הצלחה אמיתי.
              </p>
              <div className="w-24 h-0.5 bg-[#4f8bff]/50 mx-auto"></div>
            </motion.div>

            <ClientSuccessCarousel images={clientSuccessImages} />
          </div>
        </section>

        {/* Lifestyle & Identity */}
        <section className="py-24 bg-transparent relative overflow-hidden z-10 section-transition">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 mb-6 px-4 py-2">
                החזון שלנו
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#F2F3F6]">
                זה לא עוד חלטורה – זה עסק שאפשר להיות גאים בו
              </h2>
              <div className="w-24 h-0.5 bg-[#4f8bff]/50 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#4f8bff] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-black text-xl text-[#F2F3F6] mb-2 leading-tight">
                        חופש לעבוד מכל מקום
                      </h3>
                      <p className="text-[#CFD4DC] leading-relaxed">
                        בנה עסק אונליין שמאפשר לך לעבוד מכל מקום בעולם, לשלוט בזמנים שלך, 
                        ולחיות את החיים שאתה רוצה.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#4f8bff] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-black text-xl text-[#F2F3F6] mb-2 leading-tight">
                        עסק אונליין רציני
                      </h3>
                      <p className="text-[#CFD4DC] leading-relaxed">
                        זה לא עוד 'חלטורה' או 'עוד דרך להרוויח מהר'. זה עסק אמיתי שאתה בונה, 
                        מפתח, ומנהל – משהו שאפשר להיות גאים בו.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#4f8bff] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-black text-xl text-[#F2F3F6] mb-2 leading-tight">
                        קהילה של אנשים שרוצים לעלות ליגה
                      </h3>
                      <p className="text-[#CFD4DC] leading-relaxed">
                        אתה לא לבד. הקהילה שלנו מורכבת מאנשים רציניים שרוצים לשנות את החיים שלהם, 
                        לבנות משהו אמיתי, ולעלות ליגה בחיים.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-white/15 card-modern overflow-hidden hover:border-[#4f8bff]/30 transition-all duration-300">
                    <div className="relative w-full h-80 overflow-hidden">
                      {clientSuccessImages[3] && (
                        <Image
                          src={clientSuccessImages[3]}
                          alt="רואי עובד על הלפטופ"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                    </div>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-white/15 card-modern overflow-hidden hover:border-[#4f8bff]/30 transition-all duration-300">
                    <div className="relative w-full h-80 overflow-hidden">
                      {clientSuccessImages[4] && (
                        <Image
                          src={clientSuccessImages[4]}
                          alt="סטייל חיים וחופש"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-transparent relative overflow-hidden z-10 section-transition">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 mb-6 px-4 py-2">
                שאלות נפוצות
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#F2F3F6]">
                שאלות שאנשים חכמים שואלים לפני שהם מצטרפים
              </h2>
              <div className="w-24 h-0.5 bg-[#4f8bff]/50 mx-auto"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "אני לא מבין במחשבים או שיווק, זה בשבילי?",
                    answer:
                      "בהחלט! הקורס בנוי במיוחד למתחילים. אנחנו מתחילים מהבסיס ומלווים אותך צעד אחר צעד. אינך צריך ידע מוקדם – רק רצון ללמוד ולהשקיע. כל התלמידים שלנו התחילו מאותו מקום.",
                  },
                  {
                    question: "כבר ראיתי קורסים ונפילות. למה זה שונה?",
                    answer:
                      "ההבדל הוא בליווי ובשיטה. כאן אינך מקבל רק קורס מוקלט ונשאר לבד. יש ליווי צמוד, תמיכה אישית, וקהילה פעילה. בנוסף, אנחנו מתמקדים בבניית עסק אמיתי ויציב, לא ב'להרוויח מהר'. זה שינוי תפיסה שמביא תוצאות לטווח הארוך.",
                  },
                  {
                    question: "כמה זמן לוקח לראות תוצאות?",
                    answer:
                      "תלמידים שמשקיעים ומתמידים מתחילים לראות מכירות כבר בחודש הראשון. אבל חשוב להבין – זה לא כפתור קסם. בניית עסק אמיתי לוקחת זמן, אבל עם הליווי שלנו אינך תקוע לבד. רוב התלמידים שמתמידים רואים הכנסה משמעותית תוך 3-6 חודשים.",
                  },
                  {
                    question: "אין לי הרבה כסף להתחלה, זה ריאלי בשבילי?",
                    answer:
                      "כן, זה ריאלי. תוכל להתחיל עם סכום קטן יחסית. הקורס מלמד אותך איך למצוא מוצרים רווחיים ולהתחיל בצורה חכמה. כמובן שככל שיש לך יותר הון התחלתי, תוכל לגדול מהר יותר, אבל אפשר להתחיל גם עם תקציב צנוע.",
                  },
                  {
                    question: "ואם לא אצליח גם אחרי שאשקיע?",
                    answer:
                      "יש לנו החזר כספי מלא לפי תקנון מסודר. אם אתה משקיע, עובד, מקבל ליווי צמוד, ועדיין לא רואה תוצאות – אנחנו נחזיר לך את הכסף. אבל חשוב להבין: זה לא 'כפתור קסם'. זה דורש עבודה, התמדה ויישום. מי שעובד מצליח.",
                  },
                ].map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/15 card-modern rounded-lg px-8 mb-4 hover:border-[#4f8bff]/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[#F2F3F6] hover:text-[#3b82f6] hover:no-underline text-right text-lg font-bold py-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#CFD4DC] leading-relaxed text-base pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Who It's For / Not For */}
        <section className="py-20 bg-transparent relative z-10 section-transition">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                למי זה מתאים ולמי זה לא
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-green-400 flex items-center gap-2 leading-tight">
                      <CheckCircle2 className="h-6 w-6" />
                      זה מתאים לך אם:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[#CFD4DC]">
                        אתה רוצה לבנות עסק אונליין אמיתי, לא עוד 'חלטורה'
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[#CFD4DC]">
                        אתה מוכן להשקיע זמן, אנרגיה וליישם את מה שאתה לומד
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[#CFD4DC]">
                        אתה מבין שזה לא כפתור קסם להתעשרות מיידית – זה תהליך שדורש עבודה
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-red-500/30 bg-red-500/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-red-400 flex items-center gap-2 leading-tight">
                      <X className="h-6 w-6" />
                      זה לא מתאים לך אם:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[#CFD4DC]">
                        אתה מחפש 'להתעשר בלי לעבוד' או פתרונות קסם
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[#CFD4DC]">
                        אתה לא מוכן ללמוד, להתמיד, ולהשקיע זמן
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[#CFD4DC]">
                        אתה מוותר ברגע שזה נהיה מאתגר או דורש מאמץ
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Guarantee & Scarcity */}
        <section className="py-20 bg-transparent relative z-10 section-transition">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-[#4f8bff]/30 bg-[#4f8bff]/12 card-modern max-w-4xl mx-auto relative overflow-hidden">
                {/* Shine effect */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#4f8bff]/20 blur-[100px] rounded-full pointer-events-none"></div>
                
                <CardHeader>
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#4f8bff]/20 flex items-center justify-center mb-6 border border-[#4f8bff]/30 shadow-[0_0_30px_rgba(79,139,255,0.3)]">
                      <Shield className="h-10 w-10 text-[#4f8bff]" />
                    </div>
                    <CardTitle className="text-3xl md:text-4xl font-black text-[#F2F3F6] leading-tight mb-2">
                      התחייבות להחזר כספי מלא
                    </CardTitle>
                    <p className="text-[#3b82f6] font-bold text-lg">
                      ללא אותיות קטנות וללא משחקים
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8 px-6 md:px-12 pb-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="h-6 w-6 text-[#4f8bff] flex-shrink-0 mt-1" />
                        <h3 className="text-[#F2F3F6] font-bold text-lg">הביטחון שלך</h3>
                      </div>
                      <p className="text-[#CFD4DC] leading-relaxed">
                        אנחנו כל כך בטוחים בשיטה שלנו ובערך שתקבל, שאנחנו מוכנים לקחת את כל הסיכון עלינו. אתה מצטרף, לומד, מיישם – ואם זה לא עובד, אתה לא משלם.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="h-6 w-6 text-[#4f8bff] flex-shrink-0 mt-1" />
                        <h3 className="text-[#F2F3F6] font-bold text-lg">התנאי היחיד</h3>
                      </div>
                      <p className="text-[#CFD4DC] leading-relaxed">
                        אנחנו מחפשים אנשים רציניים. אם צפית בתכנים, הגעת לשיחות הליווי, ביצעת את המשימות ועדיין לא ראית תוצאות – כספך יוחזר במלואו.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#4f8bff]/10 border border-[#4f8bff]/20 rounded-xl p-6 text-center">
                    <p className="text-lg md:text-xl text-[#F2F3F6] font-medium leading-relaxed">
                      "המטרה שלי היא שתצליח. אם אתה מוכן לתת עבודה, אני מתחייב לתת לך את כל הכלים, הידע והתמיכה שצריך כדי להגיע לשם. אם עשית את החלק שלך וזה לא עבד – <span className="text-[#3b82f6] font-bold">מגיע לך את הכסף בחזרה.</span>"
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="text-[#CFD4DC] text-sm font-bold tracking-wide">– רואי בן דוד</span>
                    </div>
                  </div>

                  <Separator className="bg-white/12" />
                  
                  <div className="text-center space-y-2">
                    <p className="text-[#CFD4DC]">
                      המחזור הקרוב מוגבל בכמות משתתפים כדי לשמור על איכות הליווי והתמיכה.
                    </p>
                    <div className="inline-block bg-red-500/20 border border-red-500/30 rounded-full px-4 py-1">
                      <p className="text-red-400 font-bold text-sm animate-pulse">
                        נותרו מקומות אחרונים למחזור הקרוב
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-transparent relative overflow-hidden z-10 section-transition">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-10"
            >
              <Badge className="bg-[#4f8bff]/12 text-[#3b82f6] border-[#4f8bff]/30 px-6 py-3 text-base mb-4">
                הצטרף עכשיו
              </Badge>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="block mb-2 text-[#F2F3F6]">מוכן לבנות</span>
                <span className="text-[#3b82f6] block">עסק אונליין אמיתי?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-[#CFD4DC] leading-relaxed max-w-3xl mx-auto">
                הצטרף למעל <span className="text-[#3b82f6] font-bold">1,000 תלמידים</span> שכבר עברו דרך בנדה ובנו עסקים אונליין אמיתיים. 
                קבל ליווי צמוד, תמיכה בעברית וקהילה של אנשים רציניים שרוצים לעלות ליגה בחיים.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToForm}
                  className="bg-[#4f8bff] hover:bg-[#3b82f6] text-white font-bold text-xl md:text-2xl px-16 py-10 rounded-md transition-all duration-200"
                  size="lg"
                >
                  אני רוצה לשמוע על הקורס
                </Button>
              </motion.div>
              
              <div className="flex items-center justify-center gap-2 pt-8">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-[#4f8bff] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#CFD4DC] text-sm mr-4">מצטרפים כל יום</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-transparent border-t border-white/15">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#CFD4DC] text-sm">
                © {new Date().getFullYear()} Benda LTD. כל הזכויות שמורות.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-[#CFD4DC] hover:text-[#3b82f6] transition-colors">
                  תקנון
                </a>
                <a href="#" className="text-[#CFD4DC] hover:text-[#3b82f6] transition-colors">
                  מדיניות פרטיות
                </a>
                <a href="#" className="text-[#CFD4DC] hover:text-[#3b82f6] transition-colors">
                  תנאי שימוש
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

