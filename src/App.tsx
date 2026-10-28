import { Footer, Navbar, SkillsSection, AboutMeSection, ContactSection } from "@/components";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AboutMeSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
