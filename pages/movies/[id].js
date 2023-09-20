// 이 화면의 url: /movies/xxxx

import { useRouter } from "next/router"

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (<div>
    {/* 링크 클릭 없이 url 입력으로 들어올 경우 router에 파라미터 정보가 안들어오므로 Loading 출현 */}
    <h4>{router.query.title || "Loading..."}</h4>
  </div>)
}