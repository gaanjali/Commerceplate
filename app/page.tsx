"use client";
import Image from "next/image";
import  Header from "./header";
import Collection from "./collection"
 import Feature from "./feature";
import Offer from "./offer";
import Footer from "./footer";
import "./globals.css";
export default function Page() {
  return (
   <>
   <Header/>
  <Collection/>
   <Feature/>
   <Offer/>
   <Footer/> 

   </>
  );
}
