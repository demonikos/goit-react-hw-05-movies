import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./Layouts/SharedLayout";
import { Home } from "./Pages/Home";
import { Movie } from "./Pages/Movie";
import { MovieDetails } from "./MovieDetails/MovieDetails"


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  )
}