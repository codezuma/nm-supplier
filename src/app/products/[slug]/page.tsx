import Container from "@/app/component/shared/container";
import Image from "next/image";

import { CornerUpRightIcon } from "lucide-react";
import RelatedProducts from "@/app/component/home-page/related-products";
import { Fragment } from "react";
const product = {
  name: "Deep Harmony, Abstract Wall Wallpaper",
  image: "/products/product-image.webp",
  price: 1000,
  description:
    "Dive into the captivating allure of Deep Harmony, an abstract wall wallpaper that boasts exquisite geometric patterns in rich hues of deep green and earthy brown. Transform your space into a sanctuary of elegance, where the interplay of shapes and colors creates a sense of serene sophistication.",
};

const ProductPage = () => {
  return (
    <Fragment>
      <Container className="flex gap-8">
        <main className="flex-1">
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex mt-32 flex-col">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Pretty Poppy Prickle
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
              </div>
            </div>

            <p className="mt-6 text-gray-500">{product.description}</p>
            <button className="inline-flex mt-8 h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Get A Free Quote
              <CornerUpRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </main>
        <figure className="flex-1">
          <Image
            className="h-[calc(100vh-95px)] max-h-[1200px] w-full"
            width={1200}
            height={1200}
            src={product.image}
            alt={product.name}
          />
        </figure>
      </Container>
      <RelatedProducts />
    </Fragment>
  );
};

export default ProductPage;
