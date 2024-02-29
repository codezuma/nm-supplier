import { DirectionAwareCard } from "../shared/Image-hover-card";
import Container from "../shared/container";

const categoryData = [
  {
    imageUrl: "/images/sofa.jpg",
    title: "Sofa",
    description: "Explore our range of sofas",
  },
];

const CategoryGridSection = () => {
  return (
    <Container>
      <div className="grid-container">
        {categoryData.map((category, index) => {
          return (
            <DirectionAwareCard imageUrl={category.imageUrl} key={index}>
              <header>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </header>
            </DirectionAwareCard>
          );
        })}
      </div>
    </Container>
  );
};

export default CategoryGridSection;
