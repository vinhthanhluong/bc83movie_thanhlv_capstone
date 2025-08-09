import MainVisual from "./MainVisual";
import MovieShow from "./MovieShow";
import MovieComing from "./MovieComing";
import ListMovie from "./ListMovie";
import PopupMovie from "./PopupMovie";
import { useHomeStore } from "../../../store/home.store";

import "./home.css";

export default function HomePage() {
  const moviePopup = useHomeStore(state => state.moviePopup)
  return (
    <>
      <MainVisual />
      <div className="wrapper mx-auto">
        <MovieShow />
        <MovieComing />
        <ListMovie />
      </div>

      <PopupMovie movie={moviePopup} />
    </>
  );
}
