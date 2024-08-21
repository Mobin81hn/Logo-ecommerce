import { MdOutlineLocalOffer, MdStar } from "react-icons/md";

const Hero = () => {
    return ( 
        <section className="hero-banner h-[80vh] sm:h-[100vh] relative">
            <div className="flex flex-col gap-10 absolute top-[50%] left-28 translate-y-[-40%]">
                <h1 className="text-7xl font-bold leading-tight">Digital Shopping <br /> Hub Junction</h1>
                <p className="w-[480px] text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sequi voluptatum pariatur. Iure expedita nobis provident ipsam illum adipisci similique non molestias sit nam quaerat consectetur adipisicing elit.</p>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <MdStar size={25}/>
                        <MdStar size={25}/>
                        <MdStar size={25}/>
                        <MdStar size={25}/>
                    </div>
                    <p className="font-bold text-lg">198K</p>
                    <p className="text-lg font-medium">Excellent Reviews</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-zinc-800 text-white py-3 px-6 rounded-full">Shop now</button>
                    <button className="flex items-center gap-2 bg-zinc-200 text-zinc-800 py-3 px-6 rounded-full"><MdOutlineLocalOffer size={20}/> Offers</button>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;