import { FC } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Item from "../components/Item";
import all_products from "../assets/all_products";

interface IProps {
  category: string;
  banner: string;
}

const Category: FC<IProps> = ({ category, banner }) => {
  return (
    <section>
      <div className="mt-20">
        <div className="banner">
          <img src={banner} alt="banner" className="w-full"/>
        </div>
        <div className="flex flex-col gap-10 px-6 xs:px-10 mt-10">
          <div className="flex justify-between flex-wrap items-center gap-2">
            <p>
              <span className="font-bold">Showing 1-12</span> out of 36 products
            </p>
            <div className="flex items-center gap-4 px-4 py-2 sm:px-10 sm:py-3 rounded-full ring-1 ring-slate-900/15">
              Sort by <MdOutlineKeyboardArrowDown size={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {all_products.map((item, i) => {
              if (category === item.category) {
                return <Item key={i} {...item} />
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
