import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';


export default function Index({ posts, globalData }) {
  return (
    <Layout>
    <NavBar title={globalData.name}>Jose Perez
    </NavBar>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
      <div>
    
  <h3 id="experience" className="text-9x3 text-left"><b>Experience</b></h3>
  <h3 id="project" className="text-9x3 text-left"><b>Projects</b></h3>
  <h3 id="volunteer" className="text-9x3 text-left"><b>Volunteering</b></h3>'
  <p className="mt-3 text-lg"></p>
  </div>
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
