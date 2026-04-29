import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const LOGO = "https://cdn.poehali.dev/projects/55597532-0db6-4162-b0a4-dd94eebff67e/bucket/85435d89-86f6-4bf4-b710-f9160d2ed1ce.jpeg"
const BG = "https://cdn.poehali.dev/projects/55597532-0db6-4162-b0a4-dd94eebff67e/files/e3cedaf6-d161-4c20-a31a-21c48cf517c3.jpg"

const services = [
  { icon: "WashingMachine", label: "Стиральные машины" },
  { icon: "Refrigerator", label: "Холодильники" },
  { icon: "Utensils", label: "Посудомоечные машины" },
  { icon: "Zap", label: "Электроплиты" },
  { icon: "Wind", label: "Вытяжки" },
  { icon: "Microwave", label: "Микроволновки" },
  { icon: "Tv", label: "Телевизоры" },
  { icon: "AirVent", label: "Кондиционеры" },
]

const advantages = [
  { icon: "Clock", title: "Выезд в день обращения", desc: "Мастер приедет в удобное для вас время, в день звонка" },
  { icon: "ShieldCheck", title: "Гарантия до 12 месяцев", desc: "Даём письменную гарантию на все выполненные работы" },
  { icon: "Wrench", title: "Опытные мастера", desc: "Специалисты с опытом более 10 лет, сертифицированные" },
  { icon: "BadgePercent", title: "Честные цены", desc: "Диагностика бесплатно при выполнении ремонта" },
  { icon: "MapPin", title: "Выезд на дом", desc: "Ремонт прямо у вас дома — не нужно никуда везти технику" },
  { icon: "Star", title: "Более 500 ремонтов", desc: "Сотни довольных клиентов по всему городу" },
]

const steps = [
  { num: "01", title: "Оставьте заявку", desc: "Позвоните или заполните форму на сайте" },
  { num: "02", title: "Мастер приедет", desc: "Специалист прибудет в день обращения" },
  { num: "03", title: "Диагностика", desc: "Бесплатно определим причину неисправности" },
  { num: "04", title: "Ремонт", desc: "Устраним поломку быстро и качественно" },
]

export default function RemBytPage() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || !name) return
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src={LOGO} alt="РемБыт" className="h-12 w-auto rounded" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollTo("advantages")} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollTo("how")} className="hover:text-primary transition-colors">Как работаем</button>
            <button onClick={() => scrollTo("contacts")} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+79220774697" className="flex items-center gap-2 text-primary font-bold text-lg hover:opacity-80">
              <Icon name="Phone" size={18} />
              +7 (922) 077-46-97
            </a>
            <Button onClick={() => scrollTo("contacts")} size="sm">Заявка</Button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-sm font-medium">
            <button onClick={() => scrollTo("services")}>Услуги</button>
            <button onClick={() => scrollTo("advantages")}>Преимущества</button>
            <button onClick={() => scrollTo("how")}>Как работаем</button>
            <button onClick={() => scrollTo("contacts")}>Контакты</button>
            <a href="tel:+79220774697" className="text-primary font-bold">+7 (922) 077-46-97</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[580px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,30,60,0.82) 0%, rgba(15,30,60,0.5) 60%, rgba(15,30,60,0.2) 100%), url('${BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={14} />
              Выезд мастера в день обращения
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Ремонт бытовой техники в Тюмени
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Стиральные машины, холодильники, посудомойки, плиты и другая техника. Быстро, качественно, с гарантией до 12 месяцев.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8" onClick={() => scrollTo("contacts")}>
                Вызвать мастера
              </Button>
              <a href="tel:+79220774697">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 w-full sm:w-auto">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (922) 077-46-97
                </Button>
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <div className="text-white">
                <div className="text-3xl font-extrabold text-accent">500+</div>
                <div className="text-sm text-gray-300">ремонтов</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-extrabold text-accent">10 лет</div>
                <div className="text-sm text-gray-300">опыта</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-extrabold text-accent">12 мес.</div>
                <div className="text-sm text-gray-300">гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Какую технику ремонтируем</h2>
            <p className="text-muted-foreground">Ремонтируем все виды бытовой техники ведущих производителей</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((s) => (
              <Card key={s.label} className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="flex flex-col items-center gap-3 py-6">
                  <div className="bg-primary/10 rounded-full p-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={s.icon} size={28} className="text-primary" />
                  </div>
                  <p className="font-semibold text-center text-sm text-foreground">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Почему выбирают нас</h2>
            <p className="text-muted-foreground">Мы работаем так, чтобы вы остались довольны</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-4 p-5 rounded-xl border hover:shadow-md transition-shadow">
                <div className="bg-primary/10 rounded-full p-3 h-fit shrink-0">
                  <Icon name={a.icon} size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how" className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Как мы работаем</h2>
            <p className="text-blue-200">Просто и прозрачно — без лишних слов</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                <div className="bg-white/10 rounded-2xl p-6 text-white">
                  <div className="text-5xl font-extrabold text-white/20 mb-3">{s.num}</div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-blue-200 text-sm">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 text-white/40">
                    <Icon name="ChevronRight" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS / FORM */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Оставьте заявку</h2>
              <p className="text-muted-foreground mb-6">Мастер перезвонит в течение 15 минут и согласует удобное время выезда.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Icon name="Phone" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Телефон</div>
                    <a href="tel:+79220774697" className="font-bold text-foreground hover:text-primary">+7 (922) 077-46-97</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Icon name="Clock" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Режим работы</div>
                    <div className="font-semibold text-foreground">Ежедневно с 8:00 до 22:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Icon name="MapPin" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Город</div>
                    <div className="font-semibold text-foreground">Тюмень и область</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center space-y-4 py-6">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <Icon name="CheckCircle" size={36} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Заявка принята!</h3>
                    <p className="text-muted-foreground">Мастер свяжется с вами в течение 15 минут</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>Отправить ещё</Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-6 text-center">Вызвать мастера на дом</h3>
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
                        <Icon name="Phone" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                        <Input
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-9"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full font-bold py-5 text-base" disabled={isLoading}>
                        {isLoading ? "Отправка..." : "Вызвать мастера →"}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO} alt="РемБыт" className="h-10 w-auto rounded" />
          <p className="text-gray-400 text-sm">© 2026 РемБыт. Профессиональный ремонт бытовой техники в Тюмени.</p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  )
}