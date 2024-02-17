import React, { useState, useEffect } from 'react';

const CaruselHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevClick = () => {
        const newIndex = (currentSlide - 1 + 5) % 5; 
        setCurrentSlide(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = (currentSlide + 1) % 5; 
        setCurrentSlide(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 4000); 
        
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <section style={{marginTop: "20px"}}>
            <div id="default-carousel" className="relative w-full" dataCarousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Slide 1 */}
                    <div style={{border: "1px solid red"}} className={`duration-700 ease-in-out ${currentSlide === 0 ? 'block' : 'hidden'}`} dataCarouselItem>
                        <img src="https://www.mashed.com/img/gallery/fast-food-hamburgers-ranked-worst-to-best/intro-1540401194.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div style={{border: "1px solid red"}} className={`duration-700 ease-in-out ${currentSlide === 1 ? 'block' : 'hidden'}`} dataCarouselItem>
                        <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div style={{border: "1px solid red"}} className={`duration-700 ease-in-out ${currentSlide === 2 ? 'block' : 'hidden'}`} dataCarouselItem>
                        <img src="https://food-images.files.bbci.co.uk/food/recipes/black_and_blue_burger_95881_16x9.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div style={{border: "1px solid red"}} className={`duration-700 ease-in-out ${currentSlide === 3 ? 'block' : 'hidden'}`} dataCarouselItem>
                        <img src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div style={{border: "1px solid red"}} className={`duration-700 ease-in-out ${currentSlide === 4 ? 'block' : 'hidden'}`} dataCarouselItem>
                        <img src="https://www.seriouseats.com/thmb/P0opRA7Movx8bqIAjXQHo7y6VeU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230525-SEA-Wagyu-Burger-Amanda-Suarez-hero-54009c50b715486892bbed7a0edc829c.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 0 ? 'bg-black' : 'bg-gray-300'}`} ariaCurrent={currentSlide === 0} ariaLabel="Slide 1" onClick={() => setCurrentSlide(0)}></button>
                    <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 1 ? 'bg-black' : 'bg-gray-300'}`} ariaCurrent={currentSlide === 1} ariaLabel="Slide 2" onClick={() => setCurrentSlide(1)}></button>
                    <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 2 ? 'bg-black' : 'bg-gray-300'}`} ariaCurrent={currentSlide === 2} ariaLabel="Slide 3" onClick={() => setCurrentSlide(2)}></button>
                    <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 3 ? 'bg-black' : 'bg-gray-300'}`} ariaCurrent={currentSlide === 3} ariaLabel="Slide 3" onClick={() => setCurrentSlide(3)}></button>
                    <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 4 ? 'bg-black' : 'bg-gray-300'}`} ariaCurrent={currentSlide === 4} ariaLabel="Slide 3" onClick={() => setCurrentSlide(4)}></button>
                </div>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNextClick}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrevClick}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-400 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-white rtl:rotate-180" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
            </div>
        </section>
    );
}

export default CaruselHome;
