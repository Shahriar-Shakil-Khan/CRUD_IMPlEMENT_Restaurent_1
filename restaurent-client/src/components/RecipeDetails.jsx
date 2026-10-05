import { Link, useLoaderData } from "react-router";
import { FaArrowLeft, FaPen, FaTruck, FaUtensils, FaBoxes } from "react-icons/fa";

const RecipeDetails = () => {
  const { _id, name, quantity, supplier, taste, price, photo, details } =
    useLoaderData();

  const infoItems = [
    { icon: <FaTruck />, label: "Supplier", value: supplier },
    { icon: <FaUtensils />, label: "Taste", value: taste },
    { icon: <FaBoxes />, label: "Quantity", value: quantity },
  ];

  return (
    <section className="min-h-screen bg-[#f3eded] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Back link */}
        <Link
          to="/recipes"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-rose-600"
        >
          <FaArrowLeft /> Back to Recipes
        </Link>

        <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
          {/* Image */}
          <div className="h-72 md:h-full">
            <img
              src={photo}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 md:p-10">
            <span className="w-fit rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
              Featured Recipe
            </span>

            <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {name}
            </h1>

            <p className="mt-3 text-3xl font-bold text-rose-600">৳{price}</p>

            {/* Info grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-gray-50 p-4 text-center"
                >
                  <div className="mb-2 flex justify-center text-lg text-rose-500">
                    {item.icon}
                  </div>
                  <p className="text-xs uppercase text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {item.value || "N/A"}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Description
              </h2>
              <p className="leading-relaxed text-gray-600">
                {details || "No description available."}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <Link
                to={`/update-recipe/${_id}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rose-600 py-3 font-semibold text-white transition hover:bg-rose-700"
              >
                <FaPen /> Update
              </Link>
              <Link
                to="/recipes"
                className="flex flex-1 items-center justify-center rounded-full border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                All Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
