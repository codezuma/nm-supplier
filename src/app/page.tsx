import Image from "next/image";
import HeroSection from "./component/shared/hero-section";
import CategoryGridSection from "./component/home-page/category-grid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGridSection />
    </>
  );
}
