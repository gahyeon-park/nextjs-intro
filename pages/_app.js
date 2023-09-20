import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* getServerSideProps()에서 보낸 props가 pageProps로 넘어오고 pageProps로 index에서 reulsts props로 받을 수 있는 것 */}
      <Component {...pageProps} />
    </Layout>
  )
}