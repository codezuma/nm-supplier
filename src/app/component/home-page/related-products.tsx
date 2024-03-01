import FadeIn from "../shared/FadeIn";
import Container from "../shared/container";
const relatedProducts = [
  {
    id: 1,
    name: "Urban Chic Wallpaper",
    category: "Wallpaper",
    href: "#",
    price: "$49",
    imageSrc:
      "https://assets.website-files.com/629db5cb938411167ce1ffe3/62a30b63eda83268759ecf28_service-img-1-p-800.jpeg",
    imageAlt:
      "Urban chic wallpaper design featuring sleek lines and contemporary patterns.",
  },
  {
    id: 2,
    name: "Minimalist Lines Wallpaper",
    category: "Wallpaper",
    href: "#",
    price: "$49",
    imageSrc:
      "https://assets.website-files.com/629db5cb938411167ce1ffe3/62a30b63eda83268759ecf28_service-img-1-p-800.jpeg",
    imageAlt:
      "Minimalist lines wallpaper design featuring clean lines and subtle textures.",
  },
  {
    id: 3,
    name: "Industrial Loft Wallpaper",
    category: "Wallpaper",
    href: "#",
    price: "$49",
    imageSrc:
      "https://assets.website-files.com/629db5cb938411167ce1ffe3/62a30b63eda83268759ecf28_service-img-1-p-800.jpeg",
    imageAlt:
      "Industrial loft wallpaper design inspired by urban architecture and raw materials.",
  },
  {
    id: 3,
    name: "Industrial Loft Wallpaper",
    category: "Wallpaper",
    href: "#",
    price: "$49",
    imageSrc:
      "https://assets.website-files.com/629db5cb938411167ce1ffe3/62a30b63eda83268759ecf28_service-img-1-p-800.jpeg",
    imageAlt:
      "Industrial loft wallpaper design inspired by urban architecture and raw materials.",
  },
];

const RelatedProducts = () => {
  return (
    <Container className="mt-20">
      <FadeIn>
      <div className="flex items-center justify-between space-x-4">
        <h2 className="text-xl font-semibold md:text-3xl md:leading-tight text-gray-950 dark:text-white">
          Related Products
        </h2>
        <a
          href="#"
          className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      </FadeIn>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-4 aspect-w-4 h-64 overflow-hidden  bg-gray-100">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-cover scale-110 group-hover:scale-100 transition-all object-center"
              />
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
              <h3>
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p>{product.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RelatedProducts;
