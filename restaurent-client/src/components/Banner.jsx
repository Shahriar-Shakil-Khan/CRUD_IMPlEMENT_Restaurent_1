
import bannerImg from "../../public/image/Banner.jpg"; // tomar food image ekhane rakho

export default function Banner() {
  return (
    <div
      className="relative h-[450px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* dark overlay jate text bhalo dekhay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-2xl px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover &amp; Organize 10,000+ Recipes
        </h1>
        <p className="text-base md:text-lg mb-8">
          Plan meals, generate shopping lists, and cook smarter.
        </p>

        {/* Search bar */}
        <div className="flex items-center bg-white rounded-full px-6 py-3">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-gray-700 outline-none text-lg"
          />
          <button type="button" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}