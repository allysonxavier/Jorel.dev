import Header from 'components/organisms/Header'
import HeroSection from 'components/organisms/HeroSection'
import SobreSection from 'components/organisms/SobreSection'
import MomentosSection from 'components/organisms/MomentosSection'
import AumigosSection from 'components/organisms/AumigosSection'
import HumanosSection from 'components/organisms/HumanosSection'
import PetiscoSection from 'components/organisms/PetiscoSection'
import EnvioSection from 'components/organisms/EnvioSection'
import Footer from 'components/organisms/Footer'

const Home = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <SobreSection />
      <MomentosSection />
      <AumigosSection />
      <HumanosSection />
      <PetiscoSection />
      <EnvioSection />
    </main>
    <Footer />
  </>
)

export default Home
