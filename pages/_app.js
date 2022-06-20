import Layout from "../Components/Layout/Layout";
import { AppWrapper } from "../Context/Context";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // App wrapper passes context provider to entire app
    <AppWrapper>
      {/* Layout holds NavBar Container and Footer */}
      <Layout>
        {/* Main App Component */}
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
