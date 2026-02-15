import "./globals.css";

export const metadata = {
  title: "TrustStack AI Assurance Hub",
  description: "TrustStack AI GRC Workbench — config-driven packs → controls → evidence → audit-ready."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container nav-row">
            <div>
              <a className="brand-title" href="/">TrustStack AI Assurance Hub</a>
              <div className="brand-subtitle">AI GRC Workbench · Config-driven packs → controls → evidence → audit-ready.</div>
            </div>
            <nav aria-label="Primary navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/getting-started">Getting Started</a></li>
                <li><a className="btn btn-primary nav-cta" href="/new">New Project</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="container footer-row">
            <div>© {new Date().getFullYear()} TrustStack AI GRC (scaffold). Not legal advice.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
