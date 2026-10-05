import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200";

const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

const UpdateRecipe = () => {
  const recipe = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, quantity, supplier, taste, price, photo, details } = recipe;

  const handleUpdateRecipe = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const updatedRecipe = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/recipe/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Recipe Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => navigate("/recipes"));
        } else {
          Swal.fire({
            icon: "info",
            title: "No changes made",
            confirmButtonColor: "#e11d48",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          confirmButtonColor: "#e11d48",
        });
      });
  };

  return (
    <section className="min-h-screen bg-[#f3eded] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/recipes"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-rose-600"
        >
          <FaArrowLeft /> Back to Recipes
        </Link>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Update Recipe
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Edit the details below and save your changes.
          </p>
        </div>

        <form
          onSubmit={handleUpdateRecipe}
          className="rounded-2xl bg-white p-6 shadow-lg md:p-10"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Price (৳)</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className={labelClass}>Details</label>
            <textarea
              name="details"
              rows="4"
              defaultValue={details}
              className={inputClass}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-rose-600 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-rose-700 active:scale-[0.99]"
          >
            Update Recipe
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateRecipe;