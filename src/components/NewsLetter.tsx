const NewsLetter = () => {
    return ( 
        <section>
            <div className="flex flex-col items-center gap-8 bg-white py-14 mt-8">
                <h3 className="text-2xl xs:text-2xl sm:text-4xl font-semibold text-slate-800 text-center px-4 sm:mb-5">Get Exclusive offers on your Email</h3>
                <h4 className="text-base sm:text-lg font-bold uppercase text-center px-4">subscribe to our newsletter and stay updated</h4>
                <div className="bg-primary ring-1 ring-slate-900/10 hover:ring-slate-900/15 rounded-full flex w-[90%] xs:w-[80%] sm:w-auto">
                    <input type="text" className="bg-transparent w-full sm:w-96 xs:text-lg text-slate-800 px-4 py-2 xs:px-5 sm:py-3 outline-none" placeholder="Your email address"/>
                    <button className="bg-zinc-800 text-white min-w-24 xs:min-w-32 sm:min-w-36 w-36 rounded-full text-sm">Subscribe</button>
                </div>
            </div>
        </section>
     );
}
 
export default NewsLetter;