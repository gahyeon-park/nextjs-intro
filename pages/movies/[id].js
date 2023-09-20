// 이 화면의 url: /movies/xxxx

import { useRouter } from "next/router"

export default function Detail(params) {
  const router = useRouter();
  console.log(router);
  return "detail"
}