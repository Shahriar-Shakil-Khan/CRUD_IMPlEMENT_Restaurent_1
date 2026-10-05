
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="bg-[#f3eded] px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-extrabold uppercase text-gray-900 md:text-5xl">
          About Us
        </h1>

        <h2 className="mb-2 font-bold text-gray-900">About Our Restaurant</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Our restaurant started with a simple idea: good food brings people
          together. From a small kitchen to a place loved by many, we continue
          to serve fresh, tasty, and carefully prepared dishes. Our menu
          includes burgers, pizza, pasta, salads, desserts, and many more
          favorites, made with quality ingredients and a lot of care.
        </p>

        <h2 className="mb-2 font-bold text-gray-900">Our Mission</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Our mission is to make every meal a happy moment. We believe that
          great food should be easy to find, fairly priced, and served with a
          smile. That is why we keep improving our recipes and service every
          day.
        </p>

        <h2 className="mb-2 font-bold text-gray-900">Why Choose Us</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          We use fresh ingredients, follow clean cooking practices, and offer a
          wide variety of dishes for every taste. Whether you want a quick
          snack or a full meal, we have something for you.
        </p>

        <p className="leading-relaxed text-gray-700">
          Want to see what we offer? Visit our{" "}
          <Link to="/recipes" className="text-rose-600 underline hover:text-rose-700">
            Recipes
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;