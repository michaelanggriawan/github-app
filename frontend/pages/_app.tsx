import Navbar from '@/components/layout/navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '@/components/layout/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen px-28 pt-12">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;

