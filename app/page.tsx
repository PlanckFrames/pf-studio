const projects = [
  {
    name: "Foliosyne",
    glyph: "F",
    tone: "gold",
    blurb:
      "A quieter studio for serious documents. Read, edit, protect, and share PDFs, Word files, and Google Docs in the browser.",
    tags: ["Documents", "PDF", "Studio"],
    href: "https://foliosyne.vercel.app",
    repo: "https://github.com/PlanckFrames/foliosyne",
  },
  {
    name: "Sablepane",
    glyph: "S",
    tone: "gold",
    blurb:
      "Visual analytics without the noise. Build charts, boards, and views from the fields in front of you.",
    tags: ["Analytics", "Charts", "Data"],
    href: "https://sablepane.vercel.app",
    repo: "https://github.com/PlanckFrames/sablepane",
  },
  {
    name: "Crypto Galaxy",
    glyph: "G",
    tone: "cyan",
    blurb:
      "Live market caps as a galaxy. Coins become bodies in space — rank, change, volume, and mass at a glance.",
    tags: ["Crypto", "Visualization", "Markets"],
    href: "https://crypto-galaxy-omega.vercel.app",
    repo: "https://github.com/PlanckFrames/CryptoGalaxy",
  },
  {
    name: "Crypto Chains",
    glyph: "C",
    tone: "cyan",
    blurb:
      "Public Layer 2 metrics from Blockscout. Transactions, block time, explorers, and chain posture over a chosen window.",
    tags: ["L2", "Metrics", "Infra"],
    href: "https://crypto-chains-chi.vercel.app",
    repo: "https://github.com/PlanckFrames/CryptoChains",
  },
  {
    name: "Crypto Pies",
    glyph: "P",
    tone: "cyan",
    blurb:
      "Market slices as pies. Allocation, share, and composition for the crypto universe you actually watch.",
    tags: ["Crypto", "Allocation", "Charts"],
    href: "https://crypto-pies.vercel.app",
    repo: "https://github.com/PlanckFrames/crypto-pies",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="sky" />
      <div className="wrap">
        <section className="hero">
          <h1>
            PlanckFrames <em>studio</em>
            <span>PFStudio</span>
          </h1>
          <p className="lede">
            Apps at the edge of documents, data, and markets. Built in the
            open, shipped on Vercel.
          </p>
          <nav className="hero-links">
            <a href="https://x.com/PlanckFrames" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://github.com/PlanckFrames" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </section>

        <section id="work">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>Five live apps</p>
          </div>
          <div className="grid">
            {projects.map((project, i) => (
              <article className="card" key={project.name}>
                <div className="card-top">
                  <div className={`glyph ${project.tone === "cyan" ? "cyan" : ""}`}>
                    {project.glyph}
                  </div>
                  <span className="index">0{i + 1}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.blurb}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="actions">
                  <a className="btn primary" href={project.href} target="_blank" rel="noreferrer">
                    Open app
                  </a>
                  <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <span>PlanckFrames (PFStudio)</span>
          <span>
            <a href="https://x.com/PlanckFrames" target="_blank" rel="noreferrer">
              @PlanckFrames
            </a>
            {" · "}
            <a href="https://github.com/PlanckFrames/pf-studio" target="_blank" rel="noreferrer">
              Site source
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
