import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <section className="py-36 px-4">
            <div className="bg-white max-w-[400px] md:max-w-[500px] mx-auto px-6 py-6 xs:px-10 sm:py-8 rounded-md">
                <h1 className="text-2xl xs:text-3xl font-semibold mb-6">Sign Up</h1>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="h-12 xs:h-14 w-full border-none outline-none rounded-lg bg-slate-900/5 px-3"/>
                    <input type="text" placeholder="Email Address" className="h-12 xs:h-14 w-full border-none outline-none rounded-lg bg-slate-900/5 px-3"/>
                    <input type="password" placeholder="Password" className="h-12 xs:h-14 w-full border-none outline-none rounded-lg bg-slate-900/5 px-3"/>
                    <button className="bg-tertiary text-white p-2 xs:p-3 rounded-md">Continue</button>
                </form>
                <p className="font-bold my-4 text-sm xs:text-base">Already have an account? <Link to="/" className="text-orange-400 underline">Login</Link></p>
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <p className="text-sm text-zinc-500">By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Login;