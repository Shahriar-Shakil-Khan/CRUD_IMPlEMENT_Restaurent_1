import food1 from "../../public/image/1.jpg";
import food2 from "../../public/image/2.jpg";
import food3 from "../../public/image/3.jpg";
import food4 from "../../public/image/4.jpg";
import food5 from "../../public/image/5.jpg";
import food6 from "../../public/image/4.jpg";
import food7 from "../../public/image/1.jpg";
import food8 from "../../public/image/4.jpg";

const foods = [
  { id: 1, name: "Organic Asparagus", price: 499, image: food1 },
  { id: 2, name: "Chicken Fajitas", price: 499, image: food2 },
  { id: 3, name: "Steak with Wedges", price: 999, image: food3 },
  { id: 4, name: "Cherry Tomato", price: 300, image: food4 },
  { id: 5, name: "Roasted Corn", price: 499, image: food5 },
  { id: 6, name: "Avocado & Egg Breakfast", price: 300, image: food6 },
  { id: 7, name: "Chocolate Chip Cookies", price: 600, image: food7 },
  { id: 8, name: "Chicken Fajitas", price: 499, image: food8 },
];

export default function Hero() {
  return (
    <section className="bg-[#f3eded] py-12 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Our Menu
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {foods.map((food) => (
          <div key={food.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={food.image} alt={food.name} className="h-44 w-full object-cover" />

            <div className="p-4">
              <div className="flex gap-0.5 text-sm text-gray-300">
                {"★★★★★"}
              </div>

              <div className="mt-2 flex items-end justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{food.name}</h3>
                  <p className="mt-3 text-sm font-semibold text-rose-600">
                    ৳{food.price}.00
                  </p>
                </div>

                <button
                  type="button"
                  className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-rose-600 hover:text-white transition"
                >
                  🧺
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}