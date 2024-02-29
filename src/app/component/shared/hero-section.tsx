import FadeIn from "./FadeIn";
import { GridPattern } from "./GridPattern";
import Container from "./container";

const HeroSection = () => {
  return (
    <Container>
      <FadeIn className="max-w-6xl">
        <h1 className="  text-5xl text font-medium tracking-tight text-neutral-800 [text-wrap:balance] sm:text-6xl sm:leading-snug">
          Transforming
          <b className="text-neutral-950"> spaces</b>
          {`
          into havens – Let's collaborate to create your
          perfect `}
          <b>home.</b>
        </h1>
      </FadeIn>
    </Container>
  );
};

export default HeroSection;
