const Offer = () => {
    return ( 
        <section className="mt-20">
            <div className="offer-banner h-56 sm:h-64 md:h-80 lg:h-96 flex flex-col justify-center items-start gap-2 sm:gap-5 pl-10 sm:pl-16 md:pl-24">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">Summer Sale 50%</h2>
                <h3 className="text-lg md:text-xl lg:text-3xl font-semibold w-[50%] sm:w-auto">Men's Leather Formal Wear Shoes</h3>
                <button className="bg-zinc-800 text-white py-2 px-3 md:py-3 md:px-6 rounded-full font-semibold">Go to store</button>
            </div>
        </section>
     );
}
 
export default Offer;