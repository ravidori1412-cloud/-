/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Stethoscope, 
  Sparkles, 
  Waves, 
  Calendar, 
  CreditCard, 
  Users,
  CheckCircle2,
  Menu,
  X,
  Heart
} from 'lucide-react';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-sky-100 selection:text-sky-900" dir="rtl">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 py-2 text-sm hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-sky-400 fill-sky-400" />
              <span>דירוג <span className="text-sky-400 font-bold">4.6</span> בגוגל</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>פתוח מ-8:30 · <span className="text-sky-400">סגור בימי שני</span></span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>יהודה הנשיא 1, טבריה</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-beige-100/80 backdrop-blur-md border-b border-beige-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-serif text-xl font-bold shadow-lg shadow-sky-200">
                S
              </div>
              <div>
                <h1 className="font-serif text-lg font-bold leading-tight text-slate-900">ד"ר סטיבן אייגן</h1>
                <p className="text-xs text-slate-500 font-medium">רפואת שיניים מתקדמת בטבריה</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {['אודות', 'שירותים', 'ביקורות', 'צור קשר'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item === 'צור קשר' ? 'contact' : item === 'אודות' ? 'about' : item === 'שירותים' ? 'services' : 'reviews'}`}
                  className="hover:text-sky-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-xs text-slate-400">התקשרו אלינו:</span>
                <a href="tel:046721994" className="text-sm font-bold text-sky-700 hover:text-sky-800 transition-colors">04-672-1994</a>
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                קביעת תור
              </button>
              <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige-100 border-b border-beige-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {['אודות', 'שירותים', 'ביקורות', 'צור קשר'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item === 'צור קשר' ? 'contact' : item === 'אודות' ? 'about' : item === 'שירותים' ? 'services' : 'reviews'}`}
                  className="text-lg font-medium py-2 border-b border-beige-200 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige-200 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-bold mb-6">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  מרפאת שיניים פרטית · טבריה
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.15] mb-6">
                  מרפאת שיניים <br />
                  <span className="text-sky-600">ד"ר סטיבן אייגן</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                  שילוב ייחודי של ניסיון, דיוק רפואי ויחס אישי חם, במרחק דקות מהכנרת. אנחנו כאן כדי להעניק לכם חיוך בריא ומלא ביטחון.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-sky-200 hover:bg-sky-700 hover:-translate-y-1 transition-all"
                  >
                    קביעת תור עכשיו
                  </button>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
                  >
                    צפייה בשירותים
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-beige-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="מטופל" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span>מצטרפים ל-20,000+ מטופלים מרוצים</span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="bg-sky-600 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-12">
                        <div>
                          <h3 className="font-serif text-2xl font-bold mb-1">ד"ר סטיבן אייגן</h3>
                          <p className="text-sky-100">רופא שיניים בכיר · טבריה</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30 text-xs font-bold">
                          25+ שנות ניסיון
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                          <p className="text-xs text-sky-100 mb-1">שעות פעילות</p>
                          <p className="text-sm font-bold">א'-ה' מ-8:30</p>
                          <p className="text-[10px] text-sky-200">סגור בימי שני</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                          <p className="text-xs text-sky-100 mb-1">קבלת חירום</p>
                          <p className="text-sm font-bold">זמינות גבוהה</p>
                          <p className="text-[10px] text-sky-200">מומלץ להתקשר</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <Phone className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-sky-100">טלפון ישיר</p>
                            <a href="tel:046721994" className="font-bold text-lg hover:text-sky-200 transition-colors">04-672-1994</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-sky-100">כתובת המרפאה</p>
                            <p className="font-bold">יהודה הנשיא 1, טבריה</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-beige-200 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">מרחק הליכה מהטיילת</p>
                      <p className="text-sm font-bold text-slate-800">גישה נוחה וחניה</p>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-beige-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center mb-16">
                  <span className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4 block">אודות המרפאה</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">הפילוסופיה הטיפולית שלנו</h2>
                  <p className="text-slate-600 leading-relaxed">
                    במרפאת ד"ר סטיבן אייגן, כל ביקור מתחיל בהקשבה אמיתית. אנו מאמינים שרפואת שיניים איכותית משלבת מקצועיות בלתי מתפשרת, טכנולוגיה עדכנית ויחס אישי שמכבד את הזמן והצרכים של כל מטופל.
                  </p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Reveal delay={0.1}>
                  <div className="space-y-6">
                    <p className="text-slate-700 leading-relaxed">
                      ד"ר סטיבן אייגן וצוות המרפאה מלווים אלפי מטופלים מהעמק, מהצפון ומהמרכז כבר למעלה משני עשורים. המרפאה משלבת בין ניסיון קליני רחב לבין מגע אישי רגוע וסבלני.
                    </p>
                    <div className="bg-sky-50 border-r-4 border-sky-500 p-6 rounded-xl italic text-slate-800 font-serif">
                      "ד"ר סטיב אייגן רואה במקצוע שלו שליחות ממדרגה ראשונה. כל תכנית טיפול נתפרת באופן אישי, מתוך שאיפה לשימור השיניים הטבעיות."
                    </div>
                    <ul className="space-y-3">
                      {['הסברים ברורים לפני כל טיפול', 'ללא הפתעות במחיר', 'שימוש בחומרים האיכותיים ביותר'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'מטופלים מרוצים', value: '20,000+' },
                      { label: 'שנות ניסיון', value: '25+' },
                      { label: 'דירוג גוגל', value: '4.6/5' },
                      { label: 'גישה רגישה', value: 'מותאם לחוששים' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-beige-200 text-center shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-2xl font-bold text-sky-600 mb-1">{stat.value}</p>
                        <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4 block">שירותי המרפאה</span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">טיפולי שיניים בהתאמה אישית</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  במרפאת שיניים ד"ר סטיבן אייגן תמצאו מענה מלא – החל מבדיקות שגרתיות ועד לאסתטיקה דנטלית מתקדמת.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Stethoscope />, title: 'רפואת שיניים כללית', desc: 'בדיקות תקופתיות, סתימות לבנות, ניקוי אבנית וטיפולי שורש עם דגש על שימור השן.', tag: 'מומלץ כל חצי שנה' },
                { icon: <Sparkles />, title: 'רפואת שיניים קוסמטית', desc: 'הלבנת שיניים, ציפויי חרסינה ועיצוב חיוך למראה טבעי ומחמיא.', tag: 'תכנון חיוך אישי' },
                { icon: <Waves />, title: 'ניתוחי פה ולסת', desc: 'עקירות מורכבות וניתוחי חניכיים בשיתוף פעולה עם מומחים בכירים.', tag: 'ייעוץ כירורגי' },
                { icon: <Clock />, title: 'טיפול חירום', desc: 'כאבים חדים או שן שבורה? נעשה מאמץ לקבלכם בהקדם האפשרי.', tag: 'זמינות גבוהה' },
                { icon: <CreditCard />, title: 'עסקאות חבילה', desc: 'תכניות טיפול מקיפות במחירים נוחים עם אפשרויות מימון גמישות.', tag: 'מחיר מיוחד לחבילה' },
                { icon: <Users />, title: 'טיפול לכל המשפחה', desc: 'טיפולים מותאמים לילדים ולמבוגרים באווירה רגועה ומכבדת.', tag: 'סבלנות מיוחדת' }
              ].map((service, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group p-8 rounded-3xl border border-beige-200 bg-beige-50 hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      {React.cloneElement(service.icon as React.ReactElement, { className: "w-7 h-7" })}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-white border border-beige-200 text-[10px] font-bold text-slate-400">
                      {service.tag}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-sky-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <Reveal>
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div>
                  <span className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4 block">ביקורות מטופלים</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">מה אומרים עלינו</h2>
                  <p className="text-slate-500">המטופלים שלנו הם השגרירים הטובים ביותר שלנו.</p>
                </div>
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-sky-100 flex items-center gap-4">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-slate-900">4.6 / 5</span>
                    <span className="text-slate-400 mr-2">מתוך 50 ביקורות גוגל</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { author: 'עומר אזולאי', text: 'קיבלו אותי מהיום להיום. שתי בחורות סופר שירותיות בקבלה. הטיפול היה מקצועי ואינפורמטיבי, תודה רבה!' },
                { author: 'איציק גור', text: 'הכי מקצועיים שיש! מחירים סבירים, במיוחד אם סוגרים על עסקת חבילה. ממליץ בחום על ד"ר אייגן.' },
                { author: 'דוד אשרם', text: 'הייתי עם אמא שלי בטיול בטבריה והשן שלה התחילה להתנדנד. התקשרתי, הם חיכו לנו והרופא קיבל אותה מיד.' }
              ].map((review, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-sm relative">
                    <div className="flex text-yellow-400 mb-4">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 font-bold">
                        {review.author[0]}
                      </div>
                      <span className="font-bold text-slate-900 text-sm">{review.author}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4 block">צור קשר</span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">נשמח לראות אתכם במרפאה</h2>
                <p className="text-slate-500">השאירו פרטים ונחזור אליכם לתיאום מועד נוח.</p>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <Reveal delay={0.1}>
                <div className="bg-beige-50 p-8 md:p-12 rounded-[2.5rem] border border-beige-200 h-full">
                  <div className="grid sm:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-400 font-bold uppercase">טלפון</p>
                      <a href="tel:046721994" className="text-xl font-bold text-sky-700 hover:text-sky-800">04-672-1994</a>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-slate-400 font-bold uppercase">כתובת</p>
                      <p className="text-lg font-bold text-slate-800">יהודה הנשיא 1, טבריה</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-slate-400 font-bold uppercase">שעות פעילות</p>
                      <p className="text-sm font-bold text-slate-800">א'-ה' מ-8:30</p>
                      <p className="text-xs text-orange-500 font-medium">סגור בימי שני</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg border border-green-100 self-start">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      מומלץ לתאם מראש
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('תודה! פנייתך נשלחה בהצלחה.'); }}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 mr-2">שם מלא</label>
                        <input type="text" required placeholder="ישראל ישראלי" className="w-full bg-white border border-beige-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 mr-2">טלפון</label>
                        <input type="tel" required placeholder="050-0000000" className="w-full bg-white border border-beige-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 mr-2">הודעה (אופציונלי)</label>
                      <textarea placeholder="ספרו לנו בקצרה מה הצורך שלכם..." className="w-full bg-white border border-beige-200 rounded-2xl px-4 py-3 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-sky-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all">
                      שלח פנייה
                    </button>
                    <p className="text-[10px] text-center text-slate-400">הפרטים נשמרים בדיסקרטיות מלאה.</p>
                  </form>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-[2.5rem] overflow-hidden border border-beige-200 h-full shadow-lg bg-slate-100">
                  <iframe 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.9776791381527!2d35.538!3d32.794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c3f1a0a0a0a0a%3A0x0!2z15HXnNeR15Qg15HXqNeZ15wgKDEp!5e0!3m2!1she!2sil!4v1700000000000"
                    className="w-full h-full min-h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-serif text-2xl font-bold">
                S
              </div>
              <div>
                <p className="text-white font-serif font-bold">ד"ר סטיבן אייגן</p>
                <p className="text-xs">בריאות השן שלך – המשימה שלנו</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>יהודה הנשיא 1, טבריה</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-500" />
                <a href="tel:046721994" className="hover:text-white transition-colors">04-672-1994</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all">
                <Heart className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} מרפאת שיניים ד"ר סטיבן אייגן · כל הזכויות שמורות
          </div>
        </div>
      </footer>
    </div>
  );
}

