import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EqBeatsIq from '../components/EqBeatsIq';
import FamiliarScenarios from '../components/FamiliarScenarios';
import MeetTheApp from '../components/MeetTheApp';
import SelfImprovement from '../components/SelfImprovement';
import BestYouWithEQ from '../components/BestYouWithEQ';
import SocialSkills from '../components/SocialSkills';
import BeforeYouStart from '../components/BeforeYouStart';
import WorkWithUs from '../components/WorkWithUs';
import OpenVacancies from '../components/OpenVacancies';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ahead App</title>
        <meta name="description" content="Master your life by mastering emotions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <EqBeatsIq />
      <FamiliarScenarios />
      <MeetTheApp />
      <SelfImprovement />
      <BestYouWithEQ />
      <SocialSkills />
      <BeforeYouStart />
      <WorkWithUs />
      <OpenVacancies />
    <Footer />
    </div>
  );
};

export default Home;