import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "c33cd4416575a2635f2ceaa5dec83b09";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map(movie =>
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`${movie.title} poster`} />
          <h3>{movie.original_title}</h3>
        </div>)}
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

export async function getServerSideProps() {
  // 여기 코드는 server에서 돌아감.
  // 여기서 반환하는 값은 page에서 props로 받을 수 있음
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    }
  }
}