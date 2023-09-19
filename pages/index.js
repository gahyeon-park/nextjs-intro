import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="active">Hi</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  )
}