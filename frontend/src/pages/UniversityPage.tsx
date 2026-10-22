import { useParams } from "react-router-dom";

export function UniversityPage() {
  const { universityId } = useParams();

  return (
    <main className="page">
      <p className="eyebrow">University details</p>
      <h1>Program information</h1>
      <p className="intro">
        University details are not available yet
        {universityId ? ` for ${universityId}` : ""}.
      </p>
    </main>
  );
}
