import {
  Footer,
  Navbar,
  HeroSection,
  SkillsSection,
  AboutMeSection,
  ContactSection,
} from "@/components";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
