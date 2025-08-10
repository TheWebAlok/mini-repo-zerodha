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
        imageUrl="media/kite.png"
        productName="KIT"
        ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
        tryMore=""
        learnMore=""
        googlePLay=""
        appStore=""
      />
      <RightSection />
      <LeftSection
        imageUrl="media/coi.png"
        productName="KIT"
        ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
        tryMore=""
        learnMore=""
        googlePLay=""
        appStore=""
      />
      <Universe />
      <LeftSection
        imageUrl="media/kite.png"
        productName="KIT"
        ProductDescription="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
        tryMore=""
        learnMore=""
        googlePLay=""
        appStore=""
      />
    </>
  );
}

export default ProductPage;
