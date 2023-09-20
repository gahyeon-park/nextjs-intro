// 이 화면의 url: /movies/xxxx

import { useRouter } from "next/router";
import Seo from "@/components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  // router는 클라이언트 사이드에서만 실행됨. 
  // url에 들어있는 영화제목을 사용해 구글 SEO에 최적화하고, 유저가 접속하기 전 탭제목을 바꾸고 싶고, 
  // 기본적으로  페이지를 pre-render하고싶다면 server-side에서 getServerSideProps를 실행하여 params를 받아 활용한다.
  const [title, id] = params || [];
  console.log(router);
  return (<div>
    {/* 링크 클릭 없이 url 입력으로 들어올 경우 router에 파라미터 정보가 안들어오므로 Loading 출현 */}
    <Seo title={title} />
    <h4>{title || "Loading..."}</h4>
  </div>)
}

export function getServerSideProps({ params: { params } }) {
  // console.log(ctx);
  return {
    props: {
      params
    }
  }
}