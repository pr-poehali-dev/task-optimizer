import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export default function LaunchPadPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  const benefits: { icon: string; text: string }[] = [
    { icon: "Clock", text: "Выезд мастера в день обращения" },
    { icon: "ShieldCheck", text: "Гарантия на все виды ремонта" },
    { icon: "Wrench", text: "Ремонт любой бытовой техники" },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                <Icon name="CheckCircle" className="text-primary" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Заявка принята!</h2>
              <p className="text-muted-foreground">
                Спасибо, {name}! Команда РЕМБЫТ свяжется с вами на <span className="font-medium text-foreground">{email}</span> сразу после запуска.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                Добавить другой email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background" style={{
      backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.65) 100%), url('https://cdn.poehali.dev/projects/55597532-0db6-4162-b0a4-dd94eebff67e/files/a9e92e81-55c2-406e-af06-5127cb3740db.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/55597532-0db6-4162-b0a4-dd94eebff67e/bucket/85435d89-86f6-4bf4-b710-f9160d2ed1ce.jpeg"
              alt="РемБыт"
              className="h-12 w-auto rounded-md"
            />
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:opacity-75 transition-opacity">О нас</a>
            <a href="#" className="hover:opacity-75 transition-opacity">Услуги</a>
            <a href="#" className="hover:opacity-75 transition-opacity">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] p-4 py-12">
        <div className="w-full max-w-lg space-y-8">

          {/* Hero */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-2">
              <Icon name="Zap" size={14} />
              Скоро открытие
            </div>
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Ремонт бытовой техники{" "}
              <span className="text-primary">быстро и надёжно</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Стиральные машины, холодильники, посудомойки, плиты — чиним всё. Оставьте контакт и получите скидку&nbsp;15% на первый ремонт.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-3">
            {benefits.map((b) => (
              <div key={b.text} className="bg-card border rounded-xl p-3 text-center flex flex-col items-center gap-2">
                <div className="bg-primary/10 rounded-full p-2">
                  <Icon name={b.icon} size={18} className="text-primary" />
                </div>
                <p className="text-xs text-muted-foreground leading-tight">{b.text}</p>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <Card className="shadow-lg border-0 ring-1 ring-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-foreground text-xl">Записаться заранее</CardTitle>
              <CardDescription className="text-center">Оставьте контакт — мастер позвонит при запуске</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Icon name="User" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
                <div className="relative">
                  <Icon name="Mail" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full font-semibold text-base py-5"
                  disabled={isLoading}
                >
                  {isLoading ? "Отправка..." : "Получить скидку 15% →"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Уже <span className="font-semibold text-primary">847 человек</span> ждут открытия сервиса
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <div className="flex items-center justify-center">
            <img
              src="https://cdn.poehali.dev/projects/55597532-0db6-4162-b0a4-dd94eebff67e/bucket/85435d89-86f6-4bf4-b710-f9160d2ed1ce.jpeg"
              alt="РЕМБЫТ"
              className="h-12 w-auto"
            />
          </div>
          <p className="text-muted-foreground text-sm">© 2026 РЕМБЫТ. Профессиональный ремонт бытовой техники.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}