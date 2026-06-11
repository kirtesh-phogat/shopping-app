import { Link } from "react-router-dom";
import CategoryIcon from "./CategoryIcon";

const CategoryCard = ({ category }) => (
  <Link
    to={`/category/${category.slug}`}
    className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/70"
  >
    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-50 transition duration-300 group-hover:scale-150" />
    <div className="relative flex items-center gap-4">
      <div className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-100 text-indigo-700 transition duration-300 group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white">
        <CategoryIcon category={category.slug} />
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-sm font-bold capitalize text-slate-800">
          {category.name}
        </h3>
        <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition group-hover:text-indigo-600">
          Explore
          <span aria-hidden="true">-&gt;</span>
        </span>
      </div>
    </div>
  </Link>
);

export default CategoryCard;
