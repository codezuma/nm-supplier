import { cn, isEven } from "@/lib/utils";
import { DirectionAwareCard } from "../shared/Image-hover-card";
import Container from "../shared/container";
import categories from "@/data/categories-data.json";

const CategoryGridSection = () => {
  return (
    <Container className="mt-20">
      <header className="max-w-2xl  mb-8 lg:mb-10">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-700 dark:text-white">
          Our Categories
        </h2>
      </header>
      <div className="grid md:grid-cols-3 grid-cols-1  gap-4 ">
        {categories.map((category, index) => {
          return (
            
            <DirectionAwareCard
              className={cn(
                "h-96 border",
                index === 3 || index === 6 || index === 10 || index === 13
                  ? "md:col-span-2"
                  : ""
              )}
              imageUrl={category.imageUrl}
              key={index}
            >
              <header>
                <h2
                  className="
                  text-xl mb-1 font-semibold 
                  md:text-2xl md:leading-tight
                "
                >
                  {category.title}
                </h2>
                <p className="text-sm  text-gray-200">{category.description}</p>
              </header>
            </DirectionAwareCard>
          );
        })}
      </div>
    </Container>
  );
};

export default CategoryGridSection;

const gridClasses = (index: number) => {
  const evenSequence = [
    "lg:col-span-8 sm:col-span-5 col-span-4",
    "lg:col-span-4 sm:col-span-3 col-span-4",
    "lg:col-span-4 sm:col-span-5 col-span-4",
    "lg:col-span-8 sm:col-span-5 col-span-4",
    "lg:col-span-4 sm:col-span-3 col-span-4",
    "lg:col-span-4 sm:col-span-5 col-span-4",
  ];
  const oddSequence = [
    "lg:col-span-8 sm:col-span-5 col-span-4",
    "lg:col-span-4 sm:col-span-3 col-span-4",
    "lg:col-span-4 sm:col-span-5 col-span-4",
    "lg:col-span-8 sm:col-span-5 col-span-4",
    "lg:col-span-4 sm:col-span-3 col-span-4",
    "lg:col-span-4 sm:col-span-5 col-span-4",
  ];

  const sequenceLength = Math.max(evenSequence.length, oddSequence.length);
  const expandedEvenSequence = Array(sequenceLength * 2)
    .fill(0)
    .map((_, i) => evenSequence[i % 2]);
  const expandedOddSequence = Array(sequenceLength * 2)
    .fill(0)
    .map((_, i) => oddSequence[i % 2]);

  if (index % 2 === 0) {
    return expandedEvenSequence[index / 2];
  } else {
    return expandedOddSequence[Math.floor(index / 2)];
  }
};
