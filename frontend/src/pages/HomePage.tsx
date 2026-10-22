import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="page">
      <p className="eyebrow">A clearer path to your next step</p>
      <h1>Find a university that fits your goals.</h1>
      <p className="intro">
        Compare programs with your academic profile, budget, and preferences in
        mind. Recommendations will include their reasoning and data sources.
      </p>
      <Link className="button" to="/match">
        Start your profile
      </Link>
      <p className="notice">
        This early version is a project scaffold. Matching and university data
        are not available yet.
      </p>
    </main>
  );
}
