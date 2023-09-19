import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "c33cd4416575a2635f2ceaa5dec83b09";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);


  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h2>Loading...</h2>}
      {movies.map(movie =>
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`${movie.title} poster`} />
          <h3>{movie.original_title}</h3>
        </div>)}
      <h1 className="active">Hi</h1>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}