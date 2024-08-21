import LATEST from "../assets/latest";
import Item from "./Item";

const NewCollections = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-col gap-8 p-6 sm:p-12">
        <h3 className="text-center text-3xl font-semibold">Latest Products</h3>
        <hr />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {LATEST.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
