import About from "@/components/Landing/About";
import Footer from "@/components/Landing/Footer";
import Navbar from "@/components/Landing/Navbar.jsx";
import Reviews from "@/components/Landing/Reviews";
import TextIndex from "@/components/Landing/TextIndex";

export default function Home() {
  return (
    <>
      <Navbar />
      <TextIndex />
      <About />
      <Reviews />
      <Footer />
    </>
  )
}
