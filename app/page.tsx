import Features from "./page-components/Features";
import Hero from "./page-components/Hero";
import Listing from "./page-components/Listing";
import Products from "./page-components/PopularProducts";
import SignUp from "./page-components/SignUp";
import GetInTouch from "./page-components/GetInTouch";

export default function Home() {
  return (
    <>
  
    <Hero/>
    <Features/>
    <Listing/>
    <Products/>
    <SignUp/>
    <GetInTouch/>
    
    </>
  );
}
