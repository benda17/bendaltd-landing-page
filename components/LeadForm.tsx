"use client"

import { useState, FormEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface LeadFormProps {
  className?: string
}

export default function LeadForm({ className }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    whatsapp: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setFormData({ name: "", phone: "", email: "", whatsapp: false })
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setErrorMessage('אירעה שגיאה בשליחת הטופס. אנא נסה שנית או צור קשר בטלפון.')
    }
  }

  if (status === 'success') {
    return (
      <Card className={`border border-[#4f8bff]/30 bg-[#4f8bff]/10 card-modern transition-all duration-300 ${className || ""}`}>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
          <div className="w-20 h-20 rounded-full bg-[#4f8bff]/20 flex items-center justify-center mb-6 animate-in zoom-in duration-300">
            <CheckCircle2 className="h-10 w-10 text-[#4f8bff]" />
          </div>
          <h3 className="text-2xl font-bold text-[#F2F3F6] mb-2">תודה רבה!</h3>
          <p className="text-[#CFD4DC] text-lg mb-6">הפרטים התקבלו בהצלחה.<br/>נחזור אליך בהקדם לשיחת התאמה.</p>
          <Button 
            onClick={() => setStatus('idle')}
            variant="outline"
            className="border-[#4f8bff] text-[#4f8bff] hover:bg-[#4f8bff]/10"
          >
            שלח פנייה נוספת
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      id="lead-form"
      className={`border border-white/15 card-modern transition-all duration-300 ${className || ""}`}
    >
      <CardHeader className="relative z-10 pb-6">
        <CardTitle className="text-2xl md:text-3xl font-black text-[#F2F3F6] leading-tight">
          השאר פרטים ונחזור אליך לשיחת התאמה אישית
        </CardTitle>
        <p className="text-[#CFD4DC] mt-2 text-sm">נשמח להכיר אותך ולהתאים את הקורס בדיוק בשבילך</p>
      </CardHeader>
      <CardContent className="relative z-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-[#CFD4DC]">
              שם מלא
            </label>
            <Input
              id="name"
              type="text"
              required
              disabled={status === 'loading'}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#1a1a1f] border-white/15 text-[#F2F3F6] placeholder:text-[#CFD4DC] h-12 focus:border-[#4f8bff] focus:ring-[#4f8bff]/20"
              placeholder="הכנס את שמך המלא"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-[#CFD4DC]">
              טלפון
            </label>
            <Input
              id="phone"
              type="tel"
              required
              disabled={status === 'loading'}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-[#1a1a1f] border-white/15 text-[#F2F3F6] placeholder:text-[#CFD4DC] h-12 focus:border-[#4f8bff] focus:ring-[#4f8bff]/20"
              placeholder="050-1234567"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[#CFD4DC]">
              אימייל
            </label>
            <Input
              id="email"
              type="email"
              required
              disabled={status === 'loading'}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#1a1a1f] border-white/15 text-[#F2F3F6] placeholder:text-[#CFD4DC] h-12 focus:border-[#4f8bff] focus:ring-[#4f8bff]/20"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex items-center space-x-2 space-x-reverse pt-2">
            <input
              type="checkbox"
              id="whatsapp"
              disabled={status === 'loading'}
              checked={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.checked })
              }
              className="h-5 w-5 rounded border-white/15 bg-[#1a1a1f] text-[#4f8bff] focus:ring-[#4f8bff] focus:ring-2 cursor-pointer"
            />
            <label
              htmlFor="whatsapp"
              className="text-sm text-[#CFD4DC] cursor-pointer"
            >
              אפשר לעדכן אותי גם בוואטסאפ
            </label>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-md border border-red-400/20">
              <AlertCircle className="h-4 w-4" />
              <p>{errorMessage}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#4f8bff] hover:bg-[#3b82f6] text-white font-bold text-lg py-6 rounded-md transition-all duration-200 disabled:opacity-70"
          >
            {status === 'loading' ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>שולח...</span>
              </div>
            ) : (
              "תתקשרו אליי, אני רוצה לשמוע על הקורס"
            )}
          </Button>

          <p className="text-xs text-[#CFD4DC] text-center pt-2">
            הפרטים שלך שמורים אצלנו בביטחון ולא יועברו לצדדים שלישיים
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
