import React from "react";
import { motion } from "framer-motion";

// ──────────────────────────────────────────────────────────────────────────────
// DEVPUTKA — лендинг с абстрактным серебристым фоном и инженерной сеткой
// ──────────────────────────────────────────────────────────────────────────────

const LOGO_SRC = "https://i.ibb.co/wFBBFXKB/Group-1-1.png";

const LOGO_BADGE = () => (
  <img
    src={LOGO_SRC}
    alt="DEVPUTKA"
    width="722"
    height="365"
    className="h-auto w-[160px] md:w-[200px] object-contain select-none drop-shadow-[0_6px_20px_rgba(255,255,255,0.08)]"
  />
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`}>
    {children}
  </section>
);

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white antialiased selection:bg-white/80 selection:text-black overflow-hidden">
      {/* Абстрактный серебристый фон */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Изображение робота */}
        <div className="absolute bottom-0 right-[5%] w-[400px] md:w-[500px] opacity-35 mix-blend-screen">
          <img 
            src="https://i.ibb.co/JF8hbJ1C/7.png" 
            alt="" 
            className="w-full h-auto"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
        
        {/* Серебристый радиальный градиент */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(900px 500px at 85% 95%, rgba(255,255,255,0.08), transparent 70%), radial-gradient(700px 700px at 5% 50%, rgba(147,197,253,0.06), transparent 60%)"
        }} />

        {/* Инженерная сетка (SVG) */}
        <svg className="absolute inset-0 opacity-[0.08]" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Серебряные геометрические линии и фигуры */}
        <svg className="absolute inset-0 opacity-25" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="silverGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "rgba(255,255,255,0.4)", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "rgba(255,255,255,0)", stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="silverGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: "rgba(200,220,255,0.35)", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "rgba(255,255,255,0)", stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="silverGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: "rgba(255,200,255,0.3)", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "rgba(255,255,255,0)", stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* Диагональные линии */}
          <line x1="0" y1="20%" x2="45%" y2="0" stroke="url(#silverGrad1)" strokeWidth="2.5" />
          <line x1="55%" y1="0" x2="100%" y2="35%" stroke="url(#silverGrad1)" strokeWidth="2.5" />
          <line x1="0" y1="70%" x2="35%" y2="100%" stroke="url(#silverGrad2)" strokeWidth="2.5" />
          <line x1="75%" y1="100%" x2="100%" y2="55%" stroke="url(#silverGrad3)" strokeWidth="2" />
          <line x1="0" y1="0" x2="15%" y2="25%" stroke="url(#silverGrad2)" strokeWidth="1.5" />
          <line x1="100%" y1="100%" x2="80%" y2="85%" stroke="url(#silverGrad1)" strokeWidth="1.5" />
          
          {/* Геометрические фигуры */}
          <circle cx="88%" cy="12%" r="140" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <circle cx="88%" cy="12%" r="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <circle cx="12%" cy="85%" r="100" fill="none" stroke="rgba(200,220,255,0.15)" strokeWidth="2" />
          <circle cx="12%" cy="85%" r="70" fill="none" stroke="rgba(200,220,255,0.12)" strokeWidth="1.5" />
          
          {/* Ромбы и квадраты */}
          <rect x="3%" y="8%" width="180" height="180" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" transform="rotate(45 8% 13%)" />
          <rect x="90%" y="70%" width="120" height="120" fill="none" stroke="rgba(255,200,255,0.15)" strokeWidth="1.5" transform="rotate(30 92% 75%)" />
          
          {/* Треугольники */}
          <path d="M 68% 38% L 88% 52% L 73% 68% Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <path d="M 25% 15% L 40% 25% L 20% 30% Z" fill="none" stroke="rgba(200,220,255,0.15)" strokeWidth="1.5" />
        </svg>

        {/* Движущийся серебряный блик */}
        <div className="absolute inset-0 mix-blend-screen opacity-40" style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
          transform: "translateX(-100%)",
          animation: "gradientShift 30s ease-in-out infinite"
        }} />

        {/* Пульсирующие цветные акценты */}
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-25" style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 60%)",
          animation: "pulse 4s ease-in-out infinite"
        }} />
        <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-20" style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 60%)",
          animation: "pulse 5s ease-in-out infinite"
        }} />
        <div className="absolute top-[45%] right-[5%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-18" style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.3), transparent 60%)",
          animation: "pulse 6s ease-in-out infinite"
        }} />

      </div>

      <header className="sticky top-0 z-40 backdrop-blur-sm bg-black/40 border-b border-white/10">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 md:h-16 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <LOGO_BADGE />
          </a>
          <nav className="hidden gap-7 text-sm/none md:flex text-white/80">
            <a href="#services" className="hover:text-white">Услуги</a>
            <a href="#contact" className="hover:text-white">Контакты</a>
          </nav>
          <a href="https://t.me/devputka" target="_blank" rel="noreferrer" className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition">Заказать</a>
        </div>
      </header>

      <Section id="top" className="pt-24 pb-16 md:pt-28 md:pb-24 text-center relative">
        {/* Подложка для читаемости */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10 rounded-3xl"></div>
        <motion.div 
          initial={{opacity:0,y:10}} 
          animate={{opacity:1,y:0}} 
          transition={{duration:0.5}} 
          className="mb-6 inline-block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></div>
          <div className="relative px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm text-white/60 font-light" style={{
              textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)'
            }}>
              От создателей сервиса <span className="text-white/80 font-normal">Попутка</span>
            </span>
          </div>
        </motion.div>
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}} className="text-4xl md:text-5xl font-semibold drop-shadow-[0_4px_16px_rgba(255,255,255,0.1)]">
          Telegram‑боты и web‑сервисы для бизнеса
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}} className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
          Нам доверяют десятки тысяч пользователей. Мы создаём надёжные, масштабируемые и понятные цифровые решения, которые работают.
        </motion.p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a 
            href="https://t.me/devputka" 
            target="_blank" 
            rel="noreferrer" 
            className="group relative overflow-hidden rounded-2xl px-10 py-4 font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-gray-100"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            <span className="relative bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
              Запустить проект →
            </span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#services" 
              className="group relative overflow-hidden rounded-2xl px-7 py-3.5 font-semibold transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 group-hover:from-white/10 group-hover:to-white/15 transition-all"></div>
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl group-hover:ring-white/30 transition-all"></div>
              <span className="relative text-white/90 group-hover:text-white transition-colors">Услуги</span>
            </a>
            
            <a 
              href="https://t.me/+Hyedbnsl54k4NWZi" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative overflow-hidden rounded-2xl px-7 py-3.5 font-semibold transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 group-hover:from-white/10 group-hover:to-white/15 transition-all"></div>
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl group-hover:ring-white/30 transition-all"></div>
              <span className="relative text-white/90 group-hover:text-white transition-colors">Наши работы</span>
            </a>
          </div>
        </div>
      </Section>

      <Section id="services" className="py-20 relative">
        {/* Подложка для читаемости */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10 rounded-3xl"></div>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Услуги</h2>
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {[
            {
              name: "AI‑ассистенты",
              desc: "Умные боты нового поколения",
              price: "от 220 USD",
              badge: "За этим будущее!",
              icon: "🤖",
              popular: false,
              features: [
                "Поддержка клиентов 24/7",
                "Ответы на FAQ, генерация текстов",
                "GPT-интеграция под бренд компании",
                "Обработка данных и аналитика"
              ]
            },
            {
              name: "Telegram‑боты",
              desc: "Решения для любого бизнеса",
              price: "от 175 USD",
              badge: "от 12 часов",
              icon: "🔥",
              popular: true,
              features: [
                "Запись на услуги, напоминания",
                "E-commerce: каталог, корзина, оплата",
                "Маркетинг: квизы, опросы, рассылки",
                "Интеграции с CRM, Google Sheets, 1С"
              ]
            },
            {
              name: "Веб‑приложения",
              desc: "Панели управления для вашего бизнеса",
              price: "от 350 USD",
              badge: "Бизнес под контролем",
              icon: "📊",
              popular: false,
              features: [
                "CRM-системы и клиентские базы",
                "Дашборды с аналитикой в реальном времени",
                "Админ-панели для управления контентом",
                "Интеграции с внешними сервисами"
              ]
            }
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:0.6,delay:i*0.15}}
              className={`group relative rounded-3xl p-8 transition-all duration-300 backdrop-blur-[2px] flex flex-col ${
                s.popular 
                  ? 'bg-white/10 ring-2 ring-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:ring-white/40 md:scale-105' 
                  : 'bg-white/5 ring-1 ring-white/10 hover:bg-white/[0.08] hover:ring-white/20'
              }`}
            >
              {/* Плашка "Популярно" */}
              {s.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm shadow-lg">
                  <span className="text-sm font-semibold text-white">⭐ Популярно</span>
                </div>
              )}
              
              {/* Заголовок */}
              <h3 className={`text-2xl font-semibold mb-2 transition-colors ${s.popular ? 'text-white' : 'group-hover:text-white'}`}>
                {s.name}
              </h3>
              
              {/* Описание */}
              <p className="text-white/60 text-sm mb-5 leading-relaxed">{s.desc}</p>
              
              {/* Список возможностей */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {s.features.map((feature, idx) => (
                  <li key={idx} className="group/item flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                      s.popular 
                        ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-blue-200'
                        : 'bg-white/15 text-white/60'
                    }`}>
                      ✓
                    </span>
                    <span className="text-white/90 text-sm leading-relaxed group-hover/item:text-white transition-colors font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Цена */}
              <div className={`text-3xl font-bold mb-6 ${
                s.popular 
                  ? 'bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'
              }`}>
                {s.price}
              </div>
              
              {/* Плашка с иконкой */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6 ${
                s.popular
                  ? 'bg-white/15 ring-1 ring-white/30'
                  : 'bg-white/10 ring-1 ring-white/20'
              }`}>
                <span className="text-lg">{s.icon}</span>
                <span className="text-sm text-white/70 font-medium">{s.badge}</span>
              </div>
              
              {/* Кнопка */}
              <a
                href="https://t.me/devputka"
                target="_blank"
                rel="noreferrer"
                className={`block w-full text-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                  s.popular
                    ? 'bg-white text-black hover:bg-white/90 shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-white ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30'
                }`}
              >
                Заказать
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" className="py-20 relative">
        {/* Подложка для читаемости */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10 rounded-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Свечение фона */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl"></div>
          
          {/* Основной блок */}
          <div className="relative rounded-3xl bg-white/5 backdrop-blur-sm ring-1 ring-white/20 p-10 md:p-12 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Обсудим идею?
            </h2>
            <p className="text-center text-white/70 max-w-xl mx-auto mb-8 text-lg">
              Напишите нам в Telegram — расскажите, что хотите автоматизировать. Мы предложим решение и чёткий план запуска.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a href="https://t.me/devputka" target="_blank" rel="noreferrer" className="rounded-2xl bg-white text-black px-8 py-3.5 font-semibold hover:bg-white/90 transition shadow-lg hover:shadow-xl">
                Написать нам в Telegram
              </a>
              <a href="https://t.me/+Hyedbnsl54k4NWZi" target="_blank" rel="noreferrer" className="rounded-2xl px-8 py-3.5 font-semibold ring-1 ring-white/30 hover:bg-white/10 transition">
                Портфолио в Telegram
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-8 text-sm text-white/60 backdrop-blur-sm">
        <Section className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:flex-row md:gap-3">
            <LOGO_BADGE />
            <div className="text-center md:text-left">
              <span>© {new Date().getFullYear()} DEVPUTKA</span>
              <div className="text-white/40 text-xs mt-1">ООО «ПрофЭлектроПроект»</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#services">Услуги</a>
            <a className="hover:text-white" href="https://t.me/devputka" target="_blank" rel="noreferrer">Telegram</a>
            <a className="hover:text-white" href="#">Политика</a>
          </div>
        </Section>
      </footer>

      <style>{`
        @keyframes pulse { 
          0%, 100% { opacity: 0.7; transform: scale(1); } 
          50% { opacity: 1; transform: scale(1.05); } 
        }
        @keyframes gradientShift { 
          0% { transform: translateX(-100%); } 
          100% { transform: translateX(100%); } 
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
}

