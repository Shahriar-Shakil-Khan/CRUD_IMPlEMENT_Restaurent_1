import Banner from "./Banner";
import Hero from "./Hero";
import foods from "../assets/food.json";

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <Hero></Hero> 
      <section className="bg-[#f3eded] py-12 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Best Offers 
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {foods.slice(0, 48).map((food) => (
          <div key={food.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={food.image} alt={food.name} className="h-44 w-full object-cover" />

            <div className="p-4">
              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-400">★</span>
                <span className="text-gray-600">{food.rating}</span>
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
      

    </div>
  );
};

export default Home;



