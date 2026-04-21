import { useState, useEffect } from "react";
import "./App.css";

const projectCategories = [
  {
    category: "Excel & VBA",
    tag: "02",
    projects: [
      {
        id: "PRJ-001",
        tool: "Excel · VBA",
        title: "Pricing Options & P&L Attribution",
        desc: "Valorisation d'options européennes via Black-Scholes. Calcul des grecs (Delta, Gamma, Vega, Thêta). Décomposition du P&L d'un book de 10 000 calls sur 5 jours.",
        tags: ["Black-Scholes", "Greeks", "P&L Attribution", "VBA"],
        metrics: [{ val: "10K", key: "Calls" }, { val: "5J", key: "Simulation" }, { val: "95%", key: "P&L Expliqué" }],
        file: "https://drive.google.com/uc?export=download&id=1caZZ-Z7EjKRhfzbh_vu8YfJ6Kg1Rk0Bv", external: true
      },
      {
        id: "PRJ-002",
        tool: "Excel",
        title: "Gestion Risque de Taux & Swap IRS",
        desc: "Construction de la courbe des taux (Flat, ZC, Forward). Pricing obligataire, TRA via Solver. Swap fixe/variable sur 5 ans.",
        tags: ["Yield Curve", "IRS", "TRA/YTM", "Taux Forward"],
        metrics: [{ val: "5Y", key: "Maturité" }, { val: "120M", key: "Courbe" }, { val: "4.67%", key: "Taux Fixe" }],
        file: "https://drive.google.com/uc?export=download&id=1Kfqpudos1BpdwIZqlWk_0hoaBV9kmXIj", external: true
      },
      {
        id: "PRJ-003",
        tool: "Excel",
        title: "Stress Testing — CAC 40 & Europe",
        desc: "Simulation de crises (2008, COVID-19) sur deux portefeuilles actions. Pertes par titre, VaR stressée 99%, recovery vs benchmark.",
        tags: ["Stress Testing", "VaR", "Drawdown", "Recovery"],
        metrics: [{ val: "25M€", key: "Portefeuilles" }, { val: "20", key: "Titres" }, { val: "2", key: "Crises" }],
        file: "https://drive.google.com/uc?export=download&id=1jUVGvRy03AdzPG72EvIWKoFy1nSMaqMQ", external: true
      },
      {
        id: "PRJ-004",
        tool: "Excel · Bloomberg",
        title: "Gestion de Portefeuille — Arbitrage CAC 40",
        desc: "Gestion active d'un portefeuille de 100M€. Trois sessions d'arbitrage sur 5 semaines. Suivi vs CAC 40, bêta pondéré.",
        tags: ["Arbitrage", "Bloomberg", "Bêta", "Benchmark"],
        metrics: [{ val: "100M€", key: "Portefeuille" }, { val: "3", key: "Arbitrages" }, { val: "+2.48%", key: "Perf." }],
        file: "https://drive.google.com/uc?export=download&id=1jUVGvRy03AdzPG72EvIWKoFy1nSMaqMQ", external: true
      },
      {
        id: "PRJ-005",
        tool: "Excel · VBA",
        title: "Pricing Obligataire & Duration — Pricer VBA",
        desc: "Modélisation de trois structures obligataires (amortissement constant, in fine, zéro-coupon). TRA, duration de Macaulay, sensibilité. Pricer VBA interactif calculant Dirty Price, Clean Price et Duration en base Exact/Exact.",
        tags: ["Duration", "Sensibilité", "TRA", "VBA", "Dirty Price"],
        metrics: [{ val: "3", key: "Structures" }, { val: "5Y", key: "Maturité" }, { val: "VBA", key: "Pricer" }],
        file: "https://drive.google.com/uc?export=download&id=1-tL3rHQ3BuMI6I0FeBNF3rLLyUNdP2h6", external: true
      },
      {
        id: "PRJ-006",
        tool: "Excel · VBA",
        title: "Valorisation Options — B&S & Monte Carlo",
        desc: "Pricing d'options européennes par Black-Scholes et Monte Carlo (200 périodes). Comparaison des deux approches.",
        tags: ["Monte Carlo", "Black-Scholes", "Simulation"],
        metrics: [{ val: "4.45€", key: "Prix B&S" }, { val: "200", key: "Périodes" }, { val: "2", key: "Méthodes" }],
        file: "https://drive.google.com/uc?export=download&id=1-PlhuWmc73yZQhIwcD41DGZxzHbnq2SJ", external: true
      },
    ]
  },
  {
    category: "Python",
    tag: "03",
    projects: [
      {
        id: "PRJ-008",
        tool: "Python · Jupyter",
        title: "Pricing Options EUR/USD — B&S & Monte Carlo",
        desc: "Pricing d'options sur devises EUR/USD via Black-Scholes Garman-Kohlhagen. Calcul des grecs (Delta, Gamma). Comparaison avec simulation Monte Carlo (100 000 simulations).",
        tags: ["Black-Scholes", "Monte Carlo", "Greeks", "Python"],
        metrics: [{ val: "B&S", key: "Méthode" }, { val: "100K", key: "Simulations" }, { val: "<1%", key: "Erreur MC" }],
        file: "https://drive.google.com/uc?export=download&id=13yu3K9qWrBHQUr4e0Tkc3a2YJXBgPNSI", external: true
      },
      {
        id: "PRJ-009",
        tool: "Python · Pandas",
        title: "Trading Algorithmique — Apple AAPL",
        desc: "Stratégie de trading par croisement de moyennes mobiles (40/100j) sur données réelles AAPL 2006-2011. Backtesting, calcul du Sharpe Ratio, Drawdown et CAGR.",
        tags: ["Trading", "Moyennes Mobiles", "Backtesting", "Pandas"],
        metrics: [{ val: "0.74", key: "Sharpe" }, { val: "-3.8%", key: "Drawdown" }, { val: "1323", key: "Jours" }],
        file: "https://drive.google.com/uc?export=download&id=19T_Oe3qlJdtzl7gKL8WnpS-ArTd-HYm9", external: true
      },
    ]
  },
  {
    category: "Marketing & International",
    tag: "04",
    projects: [
      {
        id: "PRJ-007",
        tool: "Canva · Marketing",
        title: "Projet International — Salvatore Ferragamo · Dubaï",
        desc: "Analyse marketing et stratégique des amenities hôtelières pour Salvatore Ferragamo. Benchmark concurrentiel, positionnement et recommandations stratégiques. Projet primé — présentation à Dubaï.",
        tags: ["Marketing", "Stratégie", "Benchmark", "International"],
        metrics: [{ val: "1er", key: "Classement" }, { val: "Dubaï", key: "Présentation" }, { val: "ESG", key: "Programme" }],
        file: "https://canva.link/qif2a22ruzryxbi", external: true
      },
    ]
  },
];

const skills = [
  { cat: "Finance", items: ["Options & Dérivés", "Risque de Taux", "Pricing B&S", "Produits Structurés", "Swap IRS", "Gestion de Portefeuille"] },
  { cat: "Data & Quantitatif", items: ["Python (Jupyter · Anaconda)", "VBA", "SQL (DBeaver)", "Power BI", "Excel Avancé", "Tableau"] },
  { cat: "Risk Management", items: ["Stress Testing", "VaR", "P&L Attribution", "Greeks", "Bâle III"] },
  { cat: "Outils Marché", items: ["Bloomberg", "Euronext", "Investing.com", "Jamovi"] },
];

const experiences = [
  { date: "2025 – 2026", title: "Back Office Asset Management — Produits Structurés", company: "ODDO BHF · Paris", type: "Back Office" },
  { date: "2024 – 2026", title: "Manager Service Restauration", company: "Parc des Princes · U Arena · Jardin d'Acclimatation · JO Paris 2024 🏅", type: "Management" },
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
        {["CAC40  8,142.30  +0.34%▲", "EUR/USD  1.0842  +0.12%▲", "LVMH  481.90  +0.09%▲", "BNP  67.42  -0.31%▼", "EURIBOR 12M  2.25%▲", "VIX  14.32  +0.8%▲", "BRENT  82.14  -0.22%▼"].map((t, i) => (
          <span key={i} className="ticker-item">{t}</span>
        ))}
      </div>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Finance de Marché · Risk & Data</div>
          <h1>Claverie <span>LEBA</span></h1>
          <p className="hero-sub">
            MBA Finance & Data — ESLSCA Paris<br />
            DU Préparation CFA — Université Paris Dauphine · PSL<br />
            Mastère Finance de Marché — ESG Finance Paris
          </p>
          <div className="hero-badges">
            {["Produits Dérivés", "Risk Management", "Python · VBA · Excel", "Power BI · Bloomberg", "Back Office · ODDO BHF", "Certif. AMF"].map((b, i) => (
              <span key={i} className={`badge${i >= 2 && i < 5 ? " blue" : i === 5 ? " green" : ""}`}>{b}</span>
            ))}
          </div>
          <div className="hero-stats">
            {[["9", "Projets"], ["3", "Langages"], ["3+", "Ans Exp."]].map(([n, l]) => (
              <div key={l} className="stat">
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/WhatsApp Image 2026-04-21 at 20.46.15.jpeg`}
              alt="Claverie Leba"
              className="hero-photo"
            />
          </div>
          <div className="hero-panel">
            <div className="panel-label">Profile Data</div>
            {[
              ["Statut", "En poste", true],
              ["Formation", "MBA + DU CFA + Mastère", false],
              ["Localisation", "Paris, FR", false],
              ["Spécialité", "Dérivés · Taux", false],
              ["Bloomberg", "Certifiée", true],
              ["AMF", "Certifiée", true],
              ["Disponibilité", "2026", true]
            ].map(([k, v, o]) => (
              <div key={k} className="panel-row">
                <span className="panel-key">{k}</span>
                <span className={`panel-val${o ? " orange" : ""}`}>{v}</span>
              </div>
            ))}
          </div>
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

      <div id="projects">
        {projectCategories.map(({ category, tag, projects }) => (
          <section key={category} className="section">
            <div className="section-header">
              <span className="section-tag">{tag}</span>
              <h2 className="section-title">Projets — {category}</h2>
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
                  {p.file.includes('canva')
                    ? <a href={p.file} target="_blank" rel="noreferrer" className="dl-btn">Voir la présentation ↗</a>
                    : <a href={p.file} target="_blank" rel="noreferrer" className="dl-btn">Télécharger ↓</a>
                  }
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="section" id="exp">
        <div className="section-header">
          <span className="section-tag">05</span>
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
          <span className="section-tag">06</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-grid">
          {[
            ["Email", "claverieleba.cl@gmail.com"],
            ["Téléphone", "+33 7 58 13 32 96"],
            ["LinkedIn", "claverie-leba"],
            ["Localisation", "Paris, France"]
          ].map(([l, v]) => (
            <div key={l} className="contact-cell">
              <div className="contact-label">{l}</div>
              <div className="contact-val">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span className="footer-text">CLAVERIE LEBA · PORTFOLIO FINANCE · 2026</span>
        <span className="footer-text">ESLSCA · DAUPHINE · ESG · ODDO BHF</span>
      </footer>
    </div>
  );
}
