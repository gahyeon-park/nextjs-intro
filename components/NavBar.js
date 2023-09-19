import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/" legacyBehavior><a className={router.pathname === "/" ? "active" : ""}>Home</a></Link>
      <Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
      <style jsx>{`
        /* 이 스타일들은 NavBar 컴포넌트에 한정되어 유효함.
          (=> NavBar를 가진 index 화면에서 active 클래스를 가진 요소가 있더라도 active 스타일이 적용되지 X)
        */
        nav {
          background-color: whitesmoke;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: dodgerblue;
        }
      `}</style>
    </nav>
  )
}