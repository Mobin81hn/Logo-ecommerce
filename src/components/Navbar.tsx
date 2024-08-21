import { Dispatch, FC, SetStateAction } from "react";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface IProps {
    menuIsOpen: boolean
    setMenuIsOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar: FC<IProps> = ({menuIsOpen,setMenuIsOpen}) => {
    return ( 
        <nav className={`flex items-center flex-col gap-12 absolute top-32 ${menuIsOpen ? "right-8" : "-right-[100%]"} p-12 rounded-xl bg-white ring-1 ring-slate-900/5 w-64 transition-all duration-300 md:p-0 md:w-auto md:ring-0 md:static md:flex-row md:gap-6`}>
            <NavLink to="/" onClick={() => setMenuIsOpen(false)} className={({isActive}) => isActive ? "text-orange-400 border-b-2 border-orange-400 pb-2" : "text-tertiary pb-2"}>
                <div className="flex items-center gap-2">
                    <MdHomeFilled/> Home
                </div>
            </NavLink>
            <NavLink to="/mens" onClick={() => setMenuIsOpen(false)} className={({isActive}) => isActive ? "text-orange-400 border-b-2 border-orange-400 pb-2" : "text-tertiary pb-2"}>
                <div className="flex items-center gap-2">
                    <MdCategory/> Men's
                </div>
            </NavLink>
            <NavLink to="/womens" onClick={() => setMenuIsOpen(false)} className={({isActive}) => isActive ? "text-orange-400 border-b-2 border-orange-400 pb-2" : "text-tertiary pb-2"}>
                <div className="flex items-center gap-2">
                    <MdShop2/> Women's
                </div>
            </NavLink>
            <NavLink to="/kids" onClick={() => setMenuIsOpen(false)} className={({isActive}) => isActive ? "text-orange-400 border-b-2 border-orange-400 pb-2" : "text-tertiary pb-2"}>
                <div className="flex items-center gap-2">
                    <MdContacts/> Kid's
                </div>
            </NavLink>
        </nav>
     );
}
 
export default Navbar;