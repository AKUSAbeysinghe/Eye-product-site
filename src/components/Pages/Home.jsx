import React from "react";
// import SelectionHeader from "./../selectionHeader";
import Hero from "../Hero";
import OpticalFeature from "../OpticalFeatures";
import EditorialRibon from "../EditorialRibon";
import EditorialCollections from "../EditorialCollection";
import CollectionNext from "../Collectionnext";
// import GalaryPair from "../GalaryPair";
// import ProductGrid from "../ProductsGrid";

import EyeExamforHome from "../Pages/EyeExams";
import JourneyForHome from "../JournalForHome";
import History from "../Pages/History";

const Home = () => {
  return (
    <>
      <Hero/>
      <OpticalFeature/>
      <EditorialRibon/>
      <EditorialCollections/>
      <CollectionNext/>
      <EyeExamforHome/>
      <JourneyForHome/>
      {/* <GalaryPair/>
      <ProductGrid/> */}
      {/* <SelectionHeader/> */}
 
      <History/>
      
 
      
      
      
      
    </>
  );
};

export default Home;