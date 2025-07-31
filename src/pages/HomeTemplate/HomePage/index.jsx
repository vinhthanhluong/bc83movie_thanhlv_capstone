import MainVisual from "./MainVisual";
import MovieShow from "./MovieShow";

import "./home.css";

export default function HomePage() {
  return (
    <>
      <MainVisual />
      <div className="wrapper mx-auto">
        <MovieShow />
      </div>
    </>
  );
}
