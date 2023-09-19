import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/" className="hello" style={{ color: router.pathname == "/" ? "red" : "" }}>Home</Link>
      <Link href="/about" style={{ color: router.pathname == "/about" ? "red" : "" }}>About</Link>
    </nav>
  )
}