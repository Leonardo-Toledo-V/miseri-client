import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import TextIndex from "@/components/TextIndex";

export default function Home() {
  return (
   <>
    <Navbar/>
    <TextIndex/>
    <About/>
    <Reviews/>
    <Footer/>
  </>
  )
}
