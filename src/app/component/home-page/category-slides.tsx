import Container from "../shared/container";
import categories from "@/data/categories-data.json";
import FadeIn, {FadeInStagger} from "@/app/component/shared/FadeIn";


const CategorySlides = () => {
    return <Container className="mt-20">
        <header className="max-w-2xl  mb-8 lg:mb-10">
            <FadeIn>
            <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-700 dark:text-white">
                Our Categories
            </h2>
            </FadeIn>
        </header>
        <div className="flex  gap-4 sm:flex-row flex-col ">
            {categories.slice(0, 6).map((category, index) => {
                return (<FadeIn key={index}
                        style={{backgroundImage: `url(${category.imageUrl})`}}
                        className="sm:flex-1 bg-cover group sm:h-96 h-72 sm:w-auto w-full cursor-pointer sm:hover:flex-[5] transform-gpu transition-all"
                        >
                        <header className="h-full w-full relative bg-slate-950 bg-opacity-40">
                            <h2 className=" text-xl mb-1 sm:block hidden group-hover:hidden font-semibold vertical-text absolute bottom-4 text-white -left-8 transform -translate-x-1/2 inset-0 whitespace-nowrap  md:text-2xl md:leading-tight">
                                {category.title}
                            </h2>
                            <div className="group-hover:block sm:hidden block p-4 bottom-0 absolute  ">
                                <h2 className=" text-xl text-white mb-1 font-semibold  md:text-2xl md:leading-tight  ">
                                    {category.title}
                                </h2>
                                <p className="text-sm  text-gray-200">{category.description}</p>
                            </div>
                        </header>

                    </FadeIn>
                );
            })}
        </div>
    </Container>
}

export default CategorySlides