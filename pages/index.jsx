import {
  Navbar,
  Hero,
  Showcase,
  Testimonials,
  Gallery,
  Footer
} from "../components";

export default function IndexPage() {
  return (
    <>
      <header className="header">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Showcase />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
