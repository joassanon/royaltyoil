import { NextIntlProvider } from 'next-intl';
import Layout from '../components/Layout';
import '../styles/globals.css'
import App from 'next/app'

function MyApp({ Component, pageProps, messages }) {
  return (
    <NextIntlProvider messages={{ ...messages, ...pageProps.messages }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  ); 
}
MyApp.getInitialProps = async function getInitialProps(context) {
  const { locale } = context.router;
  return {
    ...(await App.getInitialProps(context)),
    messages: { ...require(`../messages/${locale}.json`),}
  };
};
export default MyApp