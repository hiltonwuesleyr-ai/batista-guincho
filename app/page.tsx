"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown, ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, Check,
  ChevronDown, Clock3, Construction, ExternalLink, Gauge, Headphones,
  MapPin, Menu, Phone, Quote, ShieldCheck, Star, Truck, Users,
  Wrench, X, Zap
} from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/5555999642296";
const MAP = "https://www.google.com/maps/dir/?api=1&destination=-30.3237506,-54.342669";

const services = [
  { icon: Truck, title: "Guincho 24 horas", text: "Atendimento ágil para emergências em São Gabriel e região.", benefit: "Disponível todos os dias, a qualquer hora." },
  { icon: Wrench, title: "Mecânica completa", text: "Diagnóstico, manutenção e reparos para veículos de passeio.", benefit: "Seu carro seguro e pronto para rodar." },
  { icon: Construction, title: "Linha pesada", text: "Especialistas em caminhões, utilitários e veículos comerciais.", benefit: "Menos tempo parado, mais produtividade." },
  { icon: Gauge, title: "Prancha e Munck", text: "Transporte técnico de máquinas, equipamentos e veículos especiais.", benefit: "Operação segura do início ao fim." },
  { icon: BriefcaseBusiness, title: "Atendimento a frotas", text: "Planos de manutenção e suporte para empresas e transportadoras.", benefit: "Previsibilidade e agilidade para sua operação." },
  { icon: BadgeCheck, title: "Autopeças", text: "Peças selecionadas e orientação de quem entende de mecânica.", benefit: "A solução certa, sem perda de tempo." },
];

const gallery = [
  ["Oficina completa", "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=82"],
  ["Atendimento linha pesada", "https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=1000&q=82"],
  ["Guincho 24 horas", "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1000&q=82"],
  ["Equipe especializada", "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?auto=format&fit=crop&w=1000&q=82"],
  ["Estrutura profissional", "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=82"],
];

const testimonials = [
  { name: "Carlos M.", role: "Cliente Batista", text: "Atendimento excelente, equipe prestativa e serviço muito bem feito. Passaram segurança do começo ao fim." },
  { name: "Rodrigo A.", role: "Motorista profissional", text: "Quando precisei do guincho, foram rápidos e cuidadosos. É o tipo de empresa que a gente salva no contato." },
  { name: "Mariana F.", role: "Cliente local", text: "Transparência no orçamento e muita atenção no atendimento. Recomendo de olhos fechados." },
];

const faqs = [
  ["Vocês atendem caminhões?", "Sim. Trabalhamos com linha leve e linha pesada, incluindo caminhões, utilitários e veículos comerciais."],
  ["Vocês trabalham com empresas?", "Sim. Atendemos transportadoras, empresas e frotas com suporte programado e emergencial."],
  ["O guincho funciona 24 horas?", "Sim. O atendimento de guincho está disponível 24 horas em São Gabriel e região."],
  ["Quais são as formas de pagamento?", "As condições são apresentadas pela equipe conforme o serviço. Fale conosco para consultar as opções disponíveis."],
  ["Onde vocês estão localizados?", "Na Av. Francisco Chagas, 1866 — Centro, São Gabriel — RS."],
];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] as const } };

function Logo() {
  return <a className="logo" href="#inicio" aria-label="Mecânica e Guinchos Batista — início">
    <span className="logo-mark">B</span><span><strong>Batista</strong><small>Mecânica & Guinchos</small></span>
  </a>;
}

function WhatsAppButton({ children = "Solicitar atendimento", className = "" }: { children?: React.ReactNode, className?: string }) {
  return <a className={`btn btn-primary ${className}`} href={`${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site e preciso de atendimento.")}`} target="_blank" rel="noopener noreferrer" aria-label="Solicitar atendimento pelo WhatsApp">
    <Phone size={18} /> {children} <ArrowRight size={17} />
  </a>;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={scrolled ? "nav-shell scrolled" : "nav-shell"}>
    <nav className="container nav" aria-label="Navegação principal">
      <Logo />
      <div className="nav-links">
        <a href="#servicos">Serviços</a><a href="#empresas">Empresas</a><a href="#estrutura">Estrutura</a><a href="#contato">Contato</a>
      </div>
      <WhatsAppButton className="nav-button">WhatsApp</WhatsAppButton>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu /></button>
    </nav>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
      <button onClick={() => setOpen(false)} aria-label="Fechar menu"><X /></button><Logo />
      {["Serviços", "Empresas", "Estrutura", "Contato"].map(x => <a key={x} onClick={() => setOpen(false)} href={`#${x.toLowerCase()}`}>{x}</a>)}
      <WhatsAppButton>Chamar no WhatsApp</WhatsAppButton>
    </motion.div>}</AnimatePresence>
  </header>;
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 130]);
  return <section className="hero" id="inicio">
    <motion.div className="hero-photo" style={{ y }} />
    <div className="hero-overlay" /><div className="hero-grid" />
    <div className="container hero-content">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>Desde 2007 • São Gabriel — RS</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28, duration: .8 }}>
        Há quase 20 anos<br /><em>mantendo São Gabriel</em><br />em movimento.
      </motion.h1>
      <motion.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
        Especialistas em mecânica automotiva, linha leve, linha pesada e guincho 24 horas.
      </motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>
        <WhatsAppButton>Solicitar atendimento</WhatsAppButton>
        <a className="btn btn-outline" href="#servicos">Conheça nossos serviços <ArrowDown size={17} /></a>
      </motion.div>
      <motion.div className="hero-badges" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }}>
        <span><Star /> Nota 5,0 no Google</span><span><Truck /> Linha leve e pesada</span><span><Clock3 /> Atendimento 24 horas</span><span><ShieldCheck /> Quase 20 anos</span>
      </motion.div>
    </div>
    <div className="scroll-cue"><span>Explore</span><i /></div>
  </section>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string, title: React.ReactNode, copy?: string }) {
  return <motion.div className="section-heading" {...reveal}><p className="eyebrow dark">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</motion.div>;
}

function Trust() {
  const items = [[Star,"Nota 5,0 no Google"],[ShieldCheck,"Quase 20 anos"],[Truck,"Linha leve e pesada"],[Users,"Equipe especializada"],[Zap,"Atendimento rápido"],[Clock3,"Guincho 24 horas"]] as const;
  return <section className="trust section"><div className="container"><SectionHeading eyebrow="Confiança comprovada" title={<>Por que centenas de clientes <em>confiam na Batista?</em></>} />
    <div className="trust-grid">{items.map(([Icon, label], i) => <motion.article key={label} {...reveal} transition={{ ...reveal.transition, delay: i*.05 }}><Icon /><strong>{label}</strong><span>Compromisso em cada atendimento.</span></motion.article>)}</div>
  </div></section>;
}

function Services() {
  return <section className="section light" id="servicos"><div className="container"><SectionHeading eyebrow="Soluções completas" title={<>Tudo o que seu veículo precisa, <em>em um só lugar.</em></>} copy="Da manutenção preventiva ao atendimento emergencial, você conta com uma equipe preparada para colocar seu veículo de volta na estrada." />
    <div className="services-grid">{services.map((s, i) => <motion.article className="service-card" key={s.title} {...reveal} transition={{ ...reveal.transition, delay: (i%3)*.08 }}>
      <div className="service-icon"><s.icon /></div><span className="service-number">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><div className="benefit"><Check />{s.benefit}</div>
      <a href={`${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${s.title}.`)}`} target="_blank" rel="noopener noreferrer">Saiba mais <ArrowRight /></a>
    </motion.article>)}</div>
  </div></section>;
}

function Process() {
  const steps = [["01","Você entra em contato"],["02","Realizamos o diagnóstico"],["03","Aprovamos o orçamento"],["04","Seu veículo volta à estrada"]];
  return <section className="section process"><div className="container"><SectionHeading eyebrow="Simples e transparente" title={<>Como funciona <em>nosso atendimento</em></>} />
    <div className="timeline">{steps.map(([n,t],i)=><motion.div key={n} {...reveal} transition={{...reveal.transition,delay:i*.12}}><span>{n}</span><i>{i < 3 && <ArrowRight />}</i><h3>{t}</h3></motion.div>)}</div>
  </div></section>;
}

function Companies() {
  return <section className="section companies" id="empresas"><div className="container companies-grid">
    <motion.div {...reveal}><p className="eyebrow">Atendimento corporativo</p><h2>Sua frota não pode parar.<br /><em>Nós sabemos disso.</em></h2><p className="lead">Atendimento técnico para transportadoras, empresas, frotas, caminhões e máquinas com agilidade, confiabilidade e comunicação clara.</p>
      <div className="check-grid">{["Agilidade no atendimento","Manutenção programada","Equipe especializada","Suporte emergencial"].map(x=><span key={x}><Check />{x}</span>)}</div>
      <WhatsAppButton>Falar sobre minha frota</WhatsAppButton>
    </motion.div>
    <motion.div className="company-visual" {...reveal}><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85" alt="Caminhões representando o atendimento a frotas e linha pesada" loading="lazy" /><div><Building2 /><span><strong>Atendimento B2B</strong>Frotas, empresas e transportadoras</span></div></motion.div>
  </div></section>;
}

function Counters() {
  const counters = [["20+","Anos de mercado"],["5★","Avaliação média"],["24h","Atendimento"],["100%","Compromisso"]];
  return <section className="counter-strip"><div className="container counter-grid">{counters.map(([n,l],i)=><motion.div key={l} {...reveal} transition={{...reveal.transition,delay:i*.08}}><strong>{n}</strong><span>{l}</span></motion.div>)}</div></section>;
}

function Differentials() {
  const list=["Atendimento transparente","Técnicos experientes","Equipamentos modernos","Atendimento humanizado","Agilidade","Atendimento emergencial","Oficina completa","Qualidade garantida"];
  return <section className="section light differentials"><div className="container"><SectionHeading eyebrow="Escolha segura" title={<>Por que escolher <em>a Batista?</em></>} />
    <div className="differential-list">{list.map((x,i)=><motion.div key={x} {...reveal} transition={{...reveal.transition,delay:(i%4)*.05}}><Check /><span>{x}</span></motion.div>)}</div>
  </div></section>
}

function Gallery() {
  const [selected,setSelected]=useState<number|null>(null);
  return <section className="section gallery" id="estrutura"><div className="container"><SectionHeading eyebrow="Nossa estrutura" title={<>Preparada para atender <em>do leve ao pesado.</em></>} copy="Imagens ilustrativas nesta demonstração. A estrutura está pronta para receber as fotos reais da empresa." />
    <div className="gallery-grid">{gallery.map(([title,src],i)=><motion.button key={title} className={i===0?"gallery-item large":"gallery-item"} onClick={()=>setSelected(i)} {...reveal} aria-label={`Ampliar foto: ${title}`}><img src={src} alt={title} loading="lazy"/><span>{title}<ExternalLink /></span></motion.button>)}</div>
  </div>
  <AnimatePresence>{selected!==null&&<motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)} role="dialog" aria-modal="true"><button aria-label="Fechar imagem"><X /></button><motion.img initial={{scale:.94}} animate={{scale:1}} src={gallery[selected][1]} alt={gallery[selected][0]} /></motion.div>}</AnimatePresence>
  </section>;
}

function Testimonials() {
  const [active,setActive]=useState(0);
  useEffect(()=>{const id=setInterval(()=>setActive(x=>(x+1)%testimonials.length),5000);return()=>clearInterval(id)},[]);
  const t=testimonials[active];
  return <section className="section testimonials"><div className="container testimonial-grid"><SectionHeading eyebrow="Quem conhece, recomenda" title={<>Confiança construída <em>atendimento por atendimento.</em></>} />
    <div className="testimonial-card"><Quote /><div className="stars">{[1,2,3,4,5].map(x=><Star key={x}/>)}</div><AnimatePresence mode="wait"><motion.div key={active} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}><blockquote>“{t.text}”</blockquote><strong>{t.name}</strong><span>{t.role}</span></motion.div></AnimatePresence><div className="dots">{testimonials.map((_,i)=><button key={i} onClick={()=>setActive(i)} className={i===active?"active":""} aria-label={`Mostrar depoimento ${i+1}`}/>)}</div></div>
  </div></section>
}

function Emergency() {
  return <section className="emergency" id="emergencia"><div className="container"><motion.div {...reveal}><div className="pulse-icon"><Headphones /></div><p className="eyebrow">Atendimento emergencial 24h</p><h2>Precisando de um<br /><em>guincho agora?</em></h2><p>Nossa equipe está pronta para atender você.</p><WhatsAppButton className="emergency-btn">Chamar no WhatsApp</WhatsAppButton><span className="emergency-phone"><Phone /> (55) 9 9964-2296</span></motion.div></div></section>;
}

function FAQ() {
  const [open,setOpen]=useState(0);
  return <section className="section light faq"><div className="container faq-grid"><SectionHeading eyebrow="Perguntas frequentes" title={<>Respostas rápidas para <em>você decidir com segurança.</em></>} />
    <div className="accordion">{faqs.map(([q,a],i)=><div className={open===i?"faq-item open":"faq-item"} key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><ChevronDown /></button><AnimatePresence initial={false}>{open===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div>
  </div></section>
}

function Location() {
  return <section className="section location" id="contato"><div className="container"><SectionHeading eyebrow="Estamos em São Gabriel" title={<>Fácil de encontrar.<br/><em>Prontos para atender.</em></>} />
    <div className="location-grid"><motion.div className="contact-card" {...reveal}>
      <div><MapPin/><span><small>Endereço</small>Av. Francisco Chagas, 1866 — Centro<br/>São Gabriel — RS</span></div>
      <div><Phone/><span><small>Telefone e WhatsApp</small>(55) 9 9964-2296</span></div>
      <div><Clock3/><span><small>Oficina</small>Seg–Sex: 8h–18h30 • Sáb: 8h–12h30<br/>Guincho: 24 horas</span></div>
      <a className="btn btn-primary" href={MAP} target="_blank" rel="noopener noreferrer">Como chegar <ExternalLink /></a>
    </motion.div>
    <motion.a className="map-card" href={MAP} target="_blank" rel="noopener noreferrer" {...reveal} aria-label="Abrir localização no Google Maps"><div className="map-pattern"/><div className="map-pin"><MapPin/></div><span><strong>Mecânica e Guinchos Batista</strong>Av. Francisco Chagas, 1866<small>Abrir no Google Maps <ExternalLink/></small></span></motion.a></div>
  </div></section>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><Logo/><p>Mecânica completa, linha leve e pesada e guincho 24 horas em São Gabriel e região.</p><div className="socials"><a href="https://instagram.com/batista_guinchos" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a><a href="#" aria-label="Facebook">f</a></div></div>
    <div><strong>Links rápidos</strong><a href="#servicos">Serviços</a><a href="#empresas">Empresas</a><a href="#estrutura">Estrutura</a><a href="#contato">Contato</a></div>
    <div><strong>Contato</strong><a href={WHATSAPP}>(55) 9 9964-2296</a><span>Av. Francisco Chagas, 1866</span><a href="https://instagram.com/batista_guinchos">@batista_guinchos</a></div>
  </div><div className="container footer-bottom"><span>© 2026 Mecânica e Guinchos Batista.</span><span>Uma demonstração profissional por <strong>Posiciona Digital</strong></span></div></footer>
}

export default function Home() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{const id=setTimeout(()=>setLoading(false),650);return()=>clearTimeout(id)},[]);
  return <><AnimatePresence>{loading&&<motion.div className="loader" exit={{opacity:0}}><div className="loader-logo">B</div><span>BATISTA</span><i/></motion.div>}</AnimatePresence>
    <Navbar/><main><Hero/><Trust/><Services/><Process/><Companies/><Counters/><Differentials/><Gallery/><Testimonials/><Emergency/><FAQ/><Location/></main><Footer/>
    <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp"><Phone/><span>Atendimento 24h</span></a>
  </>;
}
