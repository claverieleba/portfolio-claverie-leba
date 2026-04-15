import { useState, useEffect } from "react";
import "./App.css";

const projects = [
  {
    id: "PRJ-001",
    tool: "Excel · VBA",
    title: "Pricing Options & P&L Attribution",
    desc: "Valorisation d'options européennes via Black-Scholes. Calcul des grecs (Delta, Gamma, Vega, Thêta). Décomposition du P&L d'un book de 10 000 calls sur 5 jours.",
    tags: ["Black-Scholes", "Greeks", "P&L Attribution", "VBA"],
    metrics: [{ val: "10K", key: "Calls" }, { val: "5J", key: "Simulation" }, { val: "95%", key: "P&L Expliqué" }],
    file: "/Files/PnL.xlsm"
  },
  {
    id: "PRJ-002",
    tool: "Excel",
    title: "Gestion Risque de Taux & Swap IRS",
    desc: "Construction de la courbe des taux (Flat, ZC, Forward). Pricing obligataire, TRA via Solver. Swap fixe/variable sur 5 ans.",
    tags: ["Yield Curve", "IRS", "TRA/YTM", "Taux Forward"],
    metrics: [{ val: "5Y", key: "Maturité" }, { val: "120M", key: "Courbe" }, { val: "4.67%", key: "Taux Fixe" }],
    file: "/Files/Valorisation_Taux_IRS.xlsx"
  },
  {
    id: "PRJ-003",
    tool: "Excel",
    title: "Stress Testing — CAC 40 & Europe",
    desc: "Simulation de crises (2008, COVID-19) sur deux portefeuilles actions. Pertes par titre, VaR stressée 99%, recovery vs benchmark.",
    tags: ["Stress Testing", "VaR", "Drawdown", "Recovery"],
    metrics: [{ val: "25M€", key: "Portefeuilles" }, { val: "20", key: "Titres" }, { val: "2", key: "Crises" }],
    file: "/Files/Stress_Testing_CAC40.xlsx"
  },
  {
    id: "PRJ-004",
    tool: "Excel · Bloomberg",
    title: "Gestion de Portefeuille — Arbitrage CAC 40",
    desc: "Gestion active d'un portefeuille de 100M€. Trois sessions d'arbitrage sur 5 semaines. Suivi vs CAC 40, bêta pondéré.",
    tags: ["Arbitrage", "Bloomberg", "Bêta", "Benchmark"],
    metrics: [{ val: "100M€", key: "Portefeuille" }, { val: "3", key: "Arbitrages" }, { val: "+2.48%", key: "Perf." }],
    file: "/Files/Arbitrage final.xlsx"
  },
  {
    id: "PRJ-005",
    tool: "Excel",
    title: "Pricing Obligataire & Duration",
    desc: "Modélisation de trois structures obligataires (amortissement constant, in fine, zéro-coupon). TRA, duration de Macaulay, sensibilité.",
    tags: ["Duration", "Sensibilité", "TRA", "Zéro-Coupon"],
    metrics: [{ val: "3", key: "Structures" }, { val: "5Y", key: "Maturité" }, { val: "4.07", key: "Duration" }],
    file: "/Files/Calcul_obligations.xlsx"
  },
  {
    id: "PRJ-006",
    tool: "Excel · VBA",
    title: "Valorisation Options — B&S & Monte Carlo",
    desc: "Pricing d'options européennes par Black-Scholes et Monte Carlo (200 périodes). Comparaison des deux approches.",
    tags: ["Monte Carlo", "Black-Scholes", "Simulation"],
    metrics: [{ val: "4.45€", key: "Prix B&S" }, { val: "200", key: "Périodes" }, { val: "2", key: "Méthodes" }],
    file: "/Files/Valorisation Options.xlsm"
  },
];

const skills = [
  { cat: "Finance", items: ["Options & Dérivés", "Risque de Taux", "Pricing B&S", "Produits Structurés", "Swap IRS", "Gestion de Portefeuille"] },
  { cat: "Data & Quantitatif", items: ["Python", "VBA", "SQL", "Power BI", "Excel Avancé", "Tableau"] },
  { cat: "Risk Management", items: ["Stress Testing", "VaR", "P&L Attribution", "Greeks", "Bâle III"] },
  { cat: "Outils Marché", items: ["Bloomberg", "Euronext", "Investing.com", "Jamovi"] },
];

const experiences = [
  { date: "2025 – 2026", title: "Back Office Asset Management — Produits Structurés", company: "ODDO BHF · Paris", type: "Back Office" },
  { date: "2023", title: "Chargée Middle Office", company: "Société du Grand Paris · 26,2 Md€ d'émissions", type: "Middle Office" },
  { date: "2020 – 2021", title: "Assistante Credit Manager", company: "Visionsat (Canal+ Côte d'Ivoire)", type: "Credit" },
];

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s} CET`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bbg">
      <header className="bbg-header">
        <div className="bbg-logo">CL Portfolio</div>
        <nav className="bbg-nav">
          {["about", "projects", "exp", "contact"].map((s) => (
            <button key={s} onClick={() => scrollTo(s)}>
              {s === "about" ? "Profile" : s === "exp" ? "Experience" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </nav>
        <div className="bbg-time">{time}</div>
      </header>

      <div className="ticker-bar">
        {["CAC40  8,142.30  +0.34%▲", "EUR/USD  1.0842  +0.12%▲", "LVMH  481.90  +0.09%▲", "BNP  67.42  -0.31%▼", "EURIBOR 12M  2.25%▲", "VIX  14.32  +0.8%▲"].map((t, i) => (
          <span key={i} className="ticker-item">{t}</span>
        ))}
      </div>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Finance de Marché · Risk & Data</div>
          <h1>Claverie <span>LEBA</span></h1>
          <p className="hero-sub">MBA Finance & Data — ESLSCA Paris<br />DU CFA — Université Paris Dauphine · PSL</p>
          <div className="hero-badges">
            {["Produits Dérivés", "Risk Management", "Python · VBA · Excel", "Power BI · Bloomberg", "Back Office · ODDO BHF"].map((b, i) => (
              <span key={i} className={`badge${i >= 2 ? " blue" : i === 4 ? " green" : ""}`}>{b}</span>
            ))}
          </div>
          <div className="hero-stats">
            {[["6", "Projets"], ["3", "Langages"], ["3+", "Ans Exp."]].map(([n, l]) => (
              <div key={l} className="stat">
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-label">Profile Data</div>
          {[["Statut", "En poste", true], ["Formation", "MBA + CFA", false], ["Localisation", "Paris, FR", false], ["Spécialité", "Dérivés · Taux", false], ["Bloomberg", "Certifiée", true], ["Disponibilité", "2026", true]].map(([k, v, o]) => (
            <div key={k} className="panel-row">
              <span className="panel-key">{k}</span>
              <span className={`panel-val${o ? " orange" : ""}`}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-header">
          <span className="section-tag">01</span>
          <h2 className="section-title">Compétences</h2>
        </div>
        <div className="skills-grid">
          {skills.map(({ cat, items }) => (
            <div key={cat} className="skill-cell">
              <div className="skill-cat">{cat}</div>
              <div className="skill-items">
                {items.map((item) => <span key={item} className="skill-tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-header">
          <span className="section-tag">02</span>
          <h2 className="section-title">Projets Quantitatifs</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-header">
                <span className="project-id">{p.id}</span>
                <span className="project-tool">{p.tool}</span>
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <div className="project-metrics">
                {p.metrics.map(({ val, key }) => (
                  <div key={key} className="metric">
                    <div className="metric-val">{val}</div>
                    <div className="metric-key">{key}</div>
                  </div>
                ))}
              </div>
              <a href={p.file} download className="dl-btn">Télécharger le fichier ↓</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="exp">
        <div className="section-header">
          <span className="section-tag">03</span>
          <h2 className="section-title">Expériences Professionnelles</h2>
        </div>
        <div className="exp-list">
          {experiences.map((e) => (
            <div key={e.title} className="exp-item">
              <div className="exp-date">{e.date}</div>
              <div>
                <div className="exp-title">{e.title}</div>
                <div className="exp-company">{e.company}</div>
              </div>
              <div className="exp-type">{e.type}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-header">
          <span className="section-tag">04</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-grid">
          {[["Email", "claverieleba.cl@gmail.com"], ["Téléphone", "+33 7 58 13 32 96"], ["LinkedIn", "claverie-leba"], ["Localisation", "Paris, France"]].map(([l, v]) => (
            <div key={l} className="contact-cell">
              <div className="contact-label">{l}</div>
              <div className="contact-val">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span className="footer-text">CLAVERIE LEBA · PORTFOLIO FINANCE · 2026</span>
        <span className="footer-text">ESLSCA · DAUPHINE · ODDO BHF</span>
      </footer>
    </div>
  );
}
