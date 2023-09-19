import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "c33cd4416575a2635f2ceaa5dec83b09";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);


  return (
    <div>
      <Seo title="Home" />
      {!movies && <h2>Loading...</h2>}
      {movies.map(movie => <div key={movie.id}><h3>{movie.original_title}</h3></div>)}
      <h1 className="active">Hi</h1>
    </div>
  )
}