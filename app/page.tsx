"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown, ArrowRight, BriefcaseBusiness, Building2, Check,
  ChevronDown, Clock3, Construction, ExternalLink, Gauge, Headphones,
  CreditCard, FileCheck2, LocateFixed, MapPin, Menu, Phone, ReceiptText, Send, ShieldCheck, Truck, Users,
  Wrench, X, Zap
} from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_GUINCHO = "https://wa.me/5555999642296";
const WHATSAPP_OFICINA = "https://wa.me/5555999777852";
const INSTAGRAM = "https://www.instagram.com/batista_guinchos";
const FACEBOOK = "https://www.facebook.com/share/1cXgV8vyD5/?mibextid=wwXIfr";
const MAP = "https://www.google.com/maps/dir/?api=1&destination=Av.%20Francisco%20Hermenegildo%20da%20Silva%2C%20379%20-%20Esplanada%2C%20S%C3%A3o%20Gabriel%20-%20RS%2C%2097311-000";

const services = [
  { icon: Truck, title: "Guincho 24 horas", text: "Atendimento com caminhões plataforma, pranchas cocho, carretas prancha e muncks.", benefit: "Agendamento e emergência a qualquer hora.", sector: "guincho" },
  { icon: Wrench, title: "Mecânica leve e pesada", text: "Serviços mecânicos em geral para veículos leves e pesados.", benefit: "Atendimento completo para voltar à estrada.", sector: "oficina" },
  { icon: Zap, title: "Socorro mecânico", text: "Atendimento de socorro mecânico em um raio de até 100 km.", benefit: "Ajuda técnica onde você precisar.", sector: "oficina" },
  { icon: Gauge, title: "Prancha e Munck", text: "Movimentação e transporte de veículos, máquinas e equipamentos.", benefit: "Operação preparada para diferentes demandas.", sector: "guincho" },
  { icon: Construction, title: "Transporte nacional", text: "Soluções de transporte para destinos em todo o Brasil.", benefit: "Alcance nacional para sua operação.", sector: "guincho" },
  { icon: BriefcaseBusiness, title: "Empresas e frotas", text: "Atendimento para transportadoras, seguradoras, locadoras, empresas, caminhões e máquinas.", benefit: "Agilidade e suporte para sua operação.", sector: "guincho" },
];

const gallery = [
  ["Oficina completa", "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=82"],
  ["Atendimento linha pesada", "https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=1000&q=82"],
  ["Guincho 24 horas", "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1000&q=82"],
  ["Equipe especializada", "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?auto=format&fit=crop&w=1000&q=82"],
  ["Estrutura profissional", "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=82"],
];

const faqs = [
  ["Vocês atendem caminhões?", "Sim. Trabalhamos com linha leve e linha pesada, incluindo caminhões, utilitários e veículos comerciais."],
  ["Vocês trabalham com empresas?", "Sim. Atendemos transportadoras, seguradoras, locadoras, empresas e frotas com suporte programado e emergencial."],
  ["O guincho funciona 24 horas?", "Sim. O atendimento de guincho está disponível 24 horas em São Gabriel e região."],
  ["Quais são as formas de pagamento?", "Aceitamos dinheiro, Pix, cartões de débito e crédito e boleto mediante consulta de CPF ou CNPJ."],
  ["Onde vocês estão localizados?", "Na Av. Francisco Hermenegildo da Silva, 379 — Esplanada, São Gabriel — RS."],
];

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] as const } };

function Logo() {
  return <a className="logo" href="#inicio" aria-label="Mecânica e Guinchos Batista — início">
    <img src="/batista-logo.svg" alt="Batista Mecânica e Guinchos" />
  </a>;
}

function WhatsAppButton({ children = "Solicitar atendimento", className = "", sector = "guincho" }: { children?: React.ReactNode, className?: string, sector?: "guincho" | "oficina" }) {
  const base = sector === "oficina" ? WHATSAPP_OFICINA : WHATSAPP_GUINCHO;
  const message = sector === "oficina" ? "Olá! Vim pelo site e preciso de atendimento na oficina." : "Olá! Vim pelo site e preciso de atendimento de guincho ou munck.";
  return <a className={`btn btn-primary ${className}`} href={`${base}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label={`Solicitar atendimento pelo WhatsApp da ${sector}`}>
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
        <a className="btn btn-primary" href="#pre-chamado"><Send size={18} /> Abrir pré-chamado <ArrowRight size={17} /></a>
        <a className="btn btn-outline" href="#servicos">Conheça nossos serviços <ArrowDown size={17} /></a>
      </motion.div>
      <motion.div className="hero-badges" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }}>
        <span><Wrench /> Mecânica em geral</span><span><Truck /> Linha leve e pesada</span><span><Clock3 /> Guincho e munck 24h</span><span><ShieldCheck /> Quase 20 anos</span>
      </motion.div>
    </div>
    <div className="scroll-cue"><span>Explore</span><i /></div>
  </section>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string, title: React.ReactNode, copy?: string }) {
  return <motion.div className="section-heading" {...reveal}><p className="eyebrow dark">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</motion.div>;
}

function Trust() {
  const items = [[ShieldCheck,"Quase 20 anos"],[Truck,"Linha leve e pesada"],[Users,"Equipe especializada"],[Zap,"Socorro em até 100 km"],[Clock3,"Guincho e munck 24h"],[Construction,"Transporte nacional"]] as const;
  return <section className="trust section"><div className="container"><SectionHeading eyebrow="Experiência e estrutura" title={<>Por que escolher <em>a Batista?</em></>} />
    <div className="trust-grid">{items.map(([Icon, label], i) => <motion.article key={label} {...reveal} transition={{ ...reveal.transition, delay: i*.05 }}><Icon /><strong>{label}</strong><span>Compromisso em cada atendimento.</span></motion.article>)}</div>
  </div></section>;
}

function Services() {
  return <section className="section light" id="servicos"><div className="container"><SectionHeading eyebrow="Soluções completas" title={<>Tudo o que seu veículo precisa, <em>em um só lugar.</em></>} copy="Da manutenção preventiva ao atendimento emergencial, você conta com uma equipe preparada para colocar seu veículo de volta na estrada." />
    <div className="services-grid">{services.map((s, i) => <motion.article className="service-card" key={s.title} {...reveal} transition={{ ...reveal.transition, delay: (i%3)*.08 }}>
      <div className="service-icon"><s.icon /></div><span className="service-number">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><div className="benefit"><Check />{s.benefit}</div>
      <a href={`${s.sector === "oficina" ? WHATSAPP_OFICINA : WHATSAPP_GUINCHO}?text=${encodeURIComponent(`Olá! Vim pelo site e gostaria de saber mais sobre ${s.title}.`)}`} target="_blank" rel="noopener noreferrer">Saiba mais <ArrowRight /></a>
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
    <motion.div {...reveal}><p className="eyebrow">Atendimento corporativo</p><h2>Sua operação não pode parar.<br /><em>Nós sabemos disso.</em></h2><p className="lead">Atendimento técnico para transportadoras, seguradoras, locadoras, empresas, frotas, caminhões e máquinas com agilidade, confiabilidade e comunicação clara.</p>
      <div className="check-grid">{["Seguradoras e locadoras","Transportadoras e frotas","Equipe especializada","Suporte emergencial"].map(x=><span key={x}><Check />{x}</span>)}</div>
      <WhatsAppButton>Falar sobre minha frota</WhatsAppButton>
    </motion.div>
    <motion.div className="company-visual" {...reveal}><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85" alt="Caminhões representando o atendimento a empresas, frotas, seguradoras e locadoras" loading="lazy" /><div><Building2 /><span><strong>Atendimento B2B</strong>Empresas, frotas, seguradoras e locadoras</span></div></motion.div>
  </div></section>;
}

function Compliance() {
  const documents = [
    { icon: FileCheck2, title: "CT-e", name: "Conhecimento de Transporte Eletrônico", text: "Documento fiscal eletrônico da prestação de transporte, emitido quando aplicável à operação." },
    { icon: ShieldCheck, title: "CIOT", name: "Código Identificador da Operação de Transporte", text: "Registro que identifica e dá rastreabilidade à operação de transporte rodoviário remunerado de cargas, conforme a regulamentação aplicável." },
    { icon: Truck, title: "MDF-e", name: "Manifesto Eletrônico de Documentos Fiscais", text: "Documento eletrônico que vincula os documentos fiscais transportados à unidade de carga utilizada, quando aplicável." },
    { icon: ReceiptText, title: "Notas fiscais", name: "Serviços e peças", text: "Emissão de nota fiscal de serviço e nota fiscal de peças para documentar corretamente cada atendimento." },
  ];
  return <section className="section compliance"><div className="container">
    <SectionHeading eyebrow="Documentação e conformidade" title={<>Transporte documentado.<br/><em>Operação com segurança.</em></>} copy="A Batista trabalha com a documentação fiscal e operacional necessária para atender empresas, seguradoras, locadoras, transportadoras e clientes particulares com transparência." />
    <div className="compliance-grid">{documents.map((item,i)=><motion.article key={item.title} {...reveal} transition={{...reveal.transition,delay:i*.07}}><item.icon/><span>{item.title}</span><h3>{item.name}</h3><p>{item.text}</p></motion.article>)}</div>
    <motion.p className="compliance-note" {...reveal}><ShieldCheck/> A emissão de cada documento observa o tipo de serviço, o enquadramento e a legislação aplicável à operação.</motion.p>
  </div></section>;
}

function Counters() {
  const counters = [["2007","Ano de fundação"],["100 km","Socorro mecânico"],["24h","Guinchos e muncks"],["Brasil","Transporte nacional"]];
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

function ServiceContacts() {
  return <section className="section service-contacts"><div className="container"><SectionHeading eyebrow="Fale com o setor certo" title={<>Dois canais para um atendimento <em>mais rápido.</em></>} />
    <div className="contact-sector-grid">
      <motion.article {...reveal}><Wrench/><p className="eyebrow">Oficina</p><h3>Mecânica leve e pesada</h3><p>Segunda a sábado, das 8h às 12h e das 14h às 18h. Socorro mecânico em até 100 km.</p><strong>(55) 99977-7852</strong><WhatsAppButton sector="oficina">Chamar a oficina</WhatsAppButton></motion.article>
      <motion.article {...reveal}><Truck/><p className="eyebrow">Atendimento 24 horas</p><h3>Guinchos e muncks</h3><p>Estrutura com 4 caminhões plataforma, 2 pranchas cocho para transporte de colheitadeiras, 3 carretas prancha e 2 muncks. Transporte para todo o Brasil.</p><strong>(55) 99964-2296</strong><WhatsAppButton>Chamar guincho 24h</WhatsAppButton></motion.article>
    </div>
    <motion.div className="payment-note" {...reveal}><CreditCard/><span><strong>Formas de pagamento</strong>Dinheiro, Pix, cartões de débito e crédito e boleto mediante consulta de CPF ou CNPJ.</span></motion.div>
  </div></section>;
}

type CallType = "guincho" | "oficina";

function PreCall() {
  const [callType, setCallType] = useState<CallType>("guincho");
  const [location, setLocation] = useState("");
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Seu aparelho não oferece localização automática. Digite o endereço abaixo.");
      return;
    }
    setLocating(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation(`https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`);
        setLocating(false);
      },
      () => {
        setLocationError("Não foi possível obter sua localização. Autorize o acesso ou digite o endereço.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  const sendCall = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const labels: Record<CallType, string> = { guincho: "Guincho, munck ou transporte", oficina: "Oficina ou socorro mecânico" };
    const lines = [
      "Olá! Vim pelo site e gostaria de abrir um pré-chamado.",
      "",
      `*Atendimento:* ${labels[callType]}`,
      `*Nome:* ${form.get("name")}`,
      `*Telefone:* ${form.get("phone")}`,
      `*Veículo:* ${form.get("vehicle")}`,
      `*Serviço necessário:* ${form.get("service")}`,
      `*Problema aparente:* ${form.get("problem") || "Não informado"}`,
      `*Localização atual:* ${location || form.get("address") || "Não informada"}`,
      `*Destino desejado:* ${form.get("destination") || "Não informado"}`,
      `*Observações:* ${form.get("notes") || "Nenhuma"}`,
      "",
      "Aguardo a confirmação da equipe."
    ];
    const base = callType === "oficina" ? WHATSAPP_OFICINA : WHATSAPP_GUINCHO;
    window.open(`${base}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  };

  return <section className="section pre-call" id="pre-chamado"><div className="container pre-call-grid">
    <motion.div className="pre-call-intro" {...reveal}>
      <p className="eyebrow">Atendimento mais rápido</p>
      <h2>Envie as informações <em>antes de chamar.</em></h2>
      <p>Informe o veículo, a necessidade e sua localização. A mensagem será organizada e enviada ao setor correto pelo WhatsApp.</p>
      <div className="pre-call-assurance"><ShieldCheck /><span><strong>Sem espera dentro do site</strong>O pré-chamado abre diretamente no seu WhatsApp. O atendimento só é confirmado após o retorno da equipe.</span></div>
      <a className="direct-call" href={`${WHATSAPP_GUINCHO}?text=${encodeURIComponent("Olá! Preciso de guincho ou socorro agora.")}`} target="_blank" rel="noopener noreferrer"><Phone /> Emergência? Chamar agora sem preencher</a>
    </motion.div>
    <motion.form className="pre-call-form" onSubmit={sendCall} {...reveal}>
      <fieldset className="call-type"><legend>Qual atendimento você precisa?</legend>
        <label className={callType === "guincho" ? "selected" : ""}><input type="radio" name="callType" value="guincho" checked={callType === "guincho"} onChange={() => setCallType("guincho")} /><Truck /><span><strong>Guincho ou munck</strong>Atendimento 24 horas</span></label>
        <label className={callType === "oficina" ? "selected" : ""}><input type="radio" name="callType" value="oficina" checked={callType === "oficina"} onChange={() => setCallType("oficina")} /><Wrench /><span><strong>Oficina ou socorro</strong>Leve e pesado</span></label>
      </fieldset>
      <div className="form-grid">
        <label><span>Seu nome *</span><input name="name" required autoComplete="name" placeholder="Como podemos chamar você?" /></label>
        <label><span>Telefone *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="(55) 99999-9999" /></label>
        <label><span>Tipo de veículo *</span><select name="vehicle" required defaultValue=""><option value="" disabled>Selecione</option><option>Carro</option><option>Utilitário</option><option>Caminhão</option><option>Máquina ou equipamento</option><option>Outro</option></select></label>
        <label><span>Serviço necessário *</span><select name="service" required defaultValue=""><option value="" disabled>Selecione</option>{callType === "guincho" ? <><option>Guincho / caminhão plataforma</option><option>Prancha cocho para colheitadeira</option><option>Carreta prancha</option><option>Munck</option><option>Outro transporte</option></> : <><option>Atendimento na oficina</option><option>Socorro mecânico</option><option>Mecânica leve</option><option>Mecânica pesada</option><option>Não sei informar</option></>}</select></label>
        <label className="full"><span>Problema aparente <small>(opcional)</small></span><input name="problem" placeholder="Ex.: veículo não liga, pneu danificado..." /></label>
        <div className="full location-field"><span>Onde você está?</span><button type="button" onClick={useCurrentLocation} disabled={locating}><LocateFixed /> {locating ? "Obtendo localização..." : location ? "Localização adicionada ✓" : "Usar minha localização atual"}</button><em>ou</em><input name="address" disabled={Boolean(location)} placeholder="Digite rua, rodovia, km ou ponto de referência" />{locationError && <small role="alert">{locationError}</small>}</div>
        <label className="full"><span>Destino desejado <small>(opcional)</small></span><input name="destination" placeholder="Para onde o veículo deve ser levado?" /></label>
        <label className="full"><span>Observações <small>(opcional)</small></span><textarea name="notes" rows={3} placeholder="Carga, quantidade de passageiros ou outra informação importante" /></label>
      </div>
      <button className="btn btn-primary submit-call" type="submit"><Send /> Enviar pré-chamado pelo WhatsApp <ArrowRight /></button>
      <p className="form-notice">Ao enviar, você será direcionado ao WhatsApp. O envio não confirma o atendimento; aguarde o retorno da equipe Batista.</p>
    </motion.form>
  </div></section>;
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
      <div><MapPin/><span><small>Endereço</small>Av. Francisco Hermenegildo da Silva, 379 — Esplanada<br/>São Gabriel — RS • CEP 97311-000</span></div>
      <div><Phone/><span><small>Oficina</small>(55) 99977-7852</span></div>
      <div><Phone/><span><small>Guinchos e muncks 24h</small>(55) 99964-2296</span></div>
      <div><Clock3/><span><small>Horário da oficina</small>Seg–Sáb: 8h–12h e 14h–18h<br/>Guinchos e muncks: 24 horas</span></div>
      <a className="btn btn-primary" href={MAP} target="_blank" rel="noopener noreferrer">Como chegar <ExternalLink /></a>
    </motion.div>
    <motion.a className="map-card" href={MAP} target="_blank" rel="noopener noreferrer" {...reveal} aria-label="Abrir localização no Google Maps"><div className="map-pattern"/><div className="map-pin"><MapPin/></div><span><strong>Mecânica e Guinchos Batista</strong>Av. Francisco Hermenegildo da Silva, 379 — Esplanada<small>Abrir no Google Maps <ExternalLink/></small></span></motion.a></div>
  </div></section>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><Logo/><p>Mecânica completa, linha leve e pesada, guinchos e muncks 24 horas e transporte para todo o Brasil.</p><div className="socials"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a><a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a></div></div>
    <div><strong>Links rápidos</strong><a href="#servicos">Serviços</a><a href="#empresas">Empresas</a><a href="#estrutura">Estrutura</a><a href="#contato">Contato</a></div>
    <div><strong>Contato</strong><a href={WHATSAPP_OFICINA}>Oficina: (55) 99977-7852</a><a href={WHATSAPP_GUINCHO}>Guinchos: (55) 99964-2296</a><span>Av. Francisco Hermenegildo da Silva, 379 — Esplanada</span><a href={INSTAGRAM}>@batista_guinchos</a></div>
  </div><div className="container footer-bottom"><span>© 2026 Mecânica e Guinchos Batista.</span><span>Uma demonstração profissional por <strong>Posiciona Digital</strong></span></div></footer>
}

export default function Home() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{const id=setTimeout(()=>setLoading(false),650);return()=>clearTimeout(id)},[]);
  return <><AnimatePresence>{loading&&<motion.div className="loader" exit={{opacity:0}}><div className="loader-logo">B</div><span>BATISTA</span><i/></motion.div>}</AnimatePresence>
    <Navbar/><main><Hero/><Trust/><Services/><ServiceContacts/><PreCall/><Process/><Companies/><Compliance/><Counters/><Differentials/><Gallery/><Emergency/><FAQ/><Location/></main><Footer/>
    <a className="floating-whatsapp" href={WHATSAPP_GUINCHO} target="_blank" rel="noopener noreferrer" aria-label="Chamar guincho ou munck pelo WhatsApp"><Phone/><span>Guincho 24h</span></a>
  </>;
}
