import Swal from "sweetalert2";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200";

const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

const AddRecipe = () => {
  const handleAddRecipe = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newRecipe = Object.fromEntries(formData.entries());
    console.log(newRecipe);

    fetch("http://localhost:3000/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Recipe Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
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
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Add New Recipe
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Fill in the details below to add a new dish to your menu.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleAddRecipe}
          className="rounded-2xl bg-white p-6 shadow-lg md:p-10"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Chicken Fajitas"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Quantity</label>
              <input
                type="text"
                name="quantity"
                placeholder="e.g. 10 plates"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="e.g. Spicy, Sweet"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Price (৳)</label>
              <input
                type="number"
                name="price"
                placeholder="e.g. 499"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="https://..."
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className={labelClass}>Details</label>
            <textarea
              name="details"
              rows="4"
              placeholder="Write a short description of the recipe"
              className={inputClass}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-rose-600 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-rose-700 active:scale-[0.99]"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddRecipe;