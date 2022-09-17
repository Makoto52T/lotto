import '../../styles/globals.css'
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";
import 'react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
