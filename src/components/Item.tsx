import { FC } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

interface IProps {
    id: number
    name: string
    image: string
    old_price: number
    new_price: number
}

const Item: FC<IProps> = ({ id, name, image, new_price, old_price }) => {
    return ( 
        <div className="shadow-lg rounded-xl overflow-hidden max-w-80 xs:max-w-80 mx-auto">
            <div className="relative overflow-hidden group">
                <Link to={`/products/${id}`} className="absolute z-10 top-[50%] left-[50%] -translate-x-[50%] 
                    -translate-y-[50%] bg-white w-10 h-10 rounded-full scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 
                    hover:rotate-90 transition-all duration-500 flex items-center justify-center"
                >
                    <FaSearch/>
                </Link>
                <img src={image} alt="item" className="w-full transition-all duration-700 group-hover:scale-110"/>
            </div>
            <div className="p-5">
                <h4 className="line-clamp-2 text-gray-30 font-semibold text-lg">{name}</h4>
                <div className="flex items-center gap-6 mt-4">
                    <div className="font-bold">{new_price}</div>
                    <div className="font-bold text-orange-400 line-through">{old_price}</div>
                </div>
            </div>
        </div>
     );
}
 
export default Item;