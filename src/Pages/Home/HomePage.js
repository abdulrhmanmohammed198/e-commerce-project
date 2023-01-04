import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";


const HomePage = () => {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="Most Sold" btntitle="More" />
      <DiscountSection />
      <CardProductsContainer title="Most Rated" btntitle="More" />
      <BrandFeatured title="Brands" btntitle="More" />
    </div>
  );
};
export default HomePage;
