import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/"
        productName=""
        ProductDescription=""
        tryMore=""
        learnMore=""
        googlePLay=""
        appStore=""
      />
      <RightSection />
      <Universe />
    </>
  );
}

export default ProductPage;
