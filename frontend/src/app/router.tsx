import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MatchPage } from "../pages/MatchPage";
import { ResultsPage } from "../pages/ResultsPage";
import { SavedPage } from "../pages/SavedPage";
import { UniversityPage } from "../pages/UniversityPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/match", element: <MatchPage /> },
  { path: "/results", element: <ResultsPage /> },
  { path: "/universities/:universityId", element: <UniversityPage /> },
  { path: "/saved", element: <SavedPage /> },
]);
