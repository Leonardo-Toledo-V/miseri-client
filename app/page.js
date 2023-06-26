import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import TextIndex from "@/components/TextIndex";
import Head from "next/head";

export default function Home() {
  return (
   <>
    <Navbar/>
    <TextIndex/>
    <About/>
    <Reviews/>
  </>
  )
}
