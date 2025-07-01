import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
