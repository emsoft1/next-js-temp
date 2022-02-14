import Layout from "../component/Layout";
import "../styles/globals.css";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/* wrapping the hole page in side the Layout Component to assine the layout to all pages  */}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;
