const sections = [
  {
    id: "cheminformatics",
    title: "Cheminformatics",
    projects: [
      {
        id: "halden",
        name: "Halden",
        shot: "/shots/halden.jpg",
        blurb:
          "A molecular workbench in the browser. Draw a structure, freeze atoms, relax the rest with Python UFF, and export to Gaussian, Q-Chem, ADF, NWChem, ORCA, and VASP.",
        tags: ["Molecules", "UFF", "Export"],
        href: "https://halden-lilac.vercel.app",
        repo: "https://github.com/PlanckFrames/halden",
      },
    ],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    projects: [
      {
        id: "foliopatent",
        name: "FolioPatent",
        shot: "/shots/foliopatent.jpg",
        blurb:
          "Full patent analysis in the browser. Look up a publication or upload a PDF for inventors, owners, claims, chemistry, organisms, and translation.",
        tags: ["Patents", "Claims", "Chemistry"],
        href: "https://foliopatent.vercel.app",
        repo: "https://github.com/PlanckFrames/foliopatent",
      },
      {
        id: "graphisdatum",
        name: "GraphisDatum",
        shot: "/shots/graphisdatum.jpg",
        blurb:
          "Scientific graphing in the browser. Workbooks, 20+ plot types, curve fitting, peak tools, and export to PDF, PNG, and CSV.",
        tags: ["Science", "Graphing", "Analysis"],
        href: "https://graphis-datum.vercel.app",
        repo: "https://github.com/PlanckFrames/GraphisDatum",
      },
      {
        id: "sablepane",
        name: "Sablepane",
        shot: "/shots/sablepane.jpg",
        blurb:
          "Visual analytics without the noise. Build charts, boards, and views from the fields in front of you.",
        tags: ["Analytics", "Charts", "Data"],
        href: "https://sablepane.vercel.app",
        repo: "https://github.com/PlanckFrames/sablepane",
      },
    ],
  },
  {
    id: "editorial",
    title: "Editorial",
    projects: [
      {
        id: "foliosyne",
        name: "Foliosyne",
        shot: "/shots/foliosyne.jpg",
        blurb:
          "A quieter studio for serious documents. Read, edit, protect, and share PDFs, Word files, and Google Docs in the browser.",
        tags: ["Documents", "PDF", "Studio"],
        href: "https://foliosyne.vercel.app",
        repo: "https://github.com/PlanckFrames/foliosyne",
      },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    projects: [
      {
        id: "galaxy",
        name: "Crypto Galaxy",
        shot: "/shots/galaxy.jpg",
        blurb:
          "Live market caps as a galaxy. Coins become bodies in space — rank, change, volume, and mass at a glance.",
        tags: ["Crypto", "Visualization", "Markets"],
        href: "https://crypto-galaxy-omega.vercel.app",
        repo: "https://github.com/PlanckFrames/CryptoGalaxy",
      },
      {
        id: "chains",
        name: "Crypto Chains",
        shot: "/shots/chains.jpg",
        blurb:
          "Public Layer 2 metrics from Blockscout. Transactions, block time, explorers, and chain posture over a chosen window.",
        tags: ["L2", "Metrics", "Infra"],
        href: "https://crypto-chains-chi.vercel.app",
        repo: "https://github.com/PlanckFrames/CryptoChains",
      },
      {
        id: "pies",
        name: "Crypto Pies",
        shot: "/shots/pies.jpg",
        blurb:
          "Market slices as pies. Allocation, share, and composition for the crypto universe you actually watch.",
        tags: ["Crypto", "Allocation", "Charts"],
        href: "https://crypto-pies.vercel.app",
        repo: "https://github.com/PlanckFrames/crypto-pies",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <div className="sky" />
      <div className="wrap">
        <section className="hero">
          <h1>
            PlanckFrames <em>Studio</em>
          </h1>
          <p className="lede">
            Apps at the edge of documents, data, and markets. Built in the
            open, shipped on Vercel.
          </p>
        </section>

        {sections.map((section) => (
          <section className="band" id={section.id} key={section.id}>
            <div className="section-head">
              <h2>{section.title}</h2>
            </div>
            <div className="grid">
              {section.projects.map((project) => (
                <article className="card" key={project.id}>
                  <h3>{project.name}</h3>
                  <img className="shot" src={project.shot} alt={`${project.name} opening screen`} />
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
        ))}

        <footer>
          <span>PlanckFrames</span>
          <a href="https://github.com/PlanckFrames/pf-studio" target="_blank" rel="noreferrer">
            Site source
          </a>
        </footer>
      </div>
    </>
  );
}
