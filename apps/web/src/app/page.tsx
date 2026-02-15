export default function HomePage() {
  return (
    <main className="landing">
      <section className="hero container">
        <div className="heroBadge">AI Governance Platform</div>
        <h1>Make AI Compliance Operational, Not Theoretical</h1>
        <p>
          TrustStack AI Assurance Hub translates frameworks and regulations into a project-specific control checklist,
          evidence workflow, and audit-ready report your team can execute.
        </p>
        <div className="hstack heroActions">
          <a className="btn btn-primary" href="/getting-started">Getting Started</a>
          <a className="btn btn-outline" href="/new">Create Project</a>
        </div>
        <div className="heroStats">
          <div className="metricCard">
            <div className="metricValue">Config-Driven</div>
            <div className="metricLabel">Taxonomy and packs loaded from folder structure</div>
          </div>
          <div className="metricCard">
            <div className="metricValue">Evidence-First</div>
            <div className="metricLabel">SHA-256 tracked uploads with immutable audit history</div>
          </div>
          <div className="metricCard">
            <div className="metricValue">Audit-Ready</div>
            <div className="metricLabel">Generate HTML, CSV, and PDF-format report outputs</div>
          </div>
        </div>
      </section>

      <section className="container sectionGrid">
        <article className="panelCard reveal">
          <h2>What It Solves</h2>
          <p>
            Teams often map controls manually across AI use cases, creating inconsistent evidence and slow audits.
            TrustStack gives you a deterministic baseline so every project starts from the same trusted process.
          </p>
        </article>
        <article className="panelCard reveal">
          <h2>Who It Is For</h2>
          <p>
            Security, governance, risk, and engineering teams managing AI systems in regulated or high-assurance
            environments.
          </p>
        </article>
      </section>

      <section className="container">
        <h2 className="sectionTitle">How To Use TrustStack</h2>
        <div className="workflow">
          <article className="stepCard reveal">
            <span className="stepNum">1</span>
            <h3>Define Scope</h3>
            <p>Select industry, segment, and use case to ground the assessment context.</p>
          </article>
          <article className="stepCard reveal">
            <span className="stepNum">2</span>
            <h3>Apply Packs</h3>
            <p>Choose governance, safety, and security packs relevant to your workload.</p>
          </article>
          <article className="stepCard reveal">
            <span className="stepNum">3</span>
            <h3>Execute Controls</h3>
            <p>Track owner, status, notes, and implementation evidence for each checklist item.</p>
          </article>
          <article className="stepCard reveal">
            <span className="stepNum">4</span>
            <h3>Export Reports</h3>
            <p>Produce audit-ready artifacts for internal reviews and external assessments.</p>
          </article>
        </div>
      </section>

      <section className="container ctaStrip reveal">
        <div>
          <h2>Start With The Guided Workspace View</h2>
          <p>
            Open Getting Started to see existing projects and discovered taxonomy, then create your first project.
          </p>
        </div>
        <div className="hstack">
          <a className="btn btn-primary" href="/getting-started">Open Getting Started</a>
          <a className="btn btnSubtle" href="/new">New Project</a>
        </div>
      </section>
    </main>
  );
}
