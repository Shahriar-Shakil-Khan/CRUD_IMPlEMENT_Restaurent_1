import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onSubscribe(event) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <footer className="bg-neutral px-6 py-14 text-neutral-content md:px-12">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.4fr_1fr_1.4fr]">
          <div>
            <p className="text-2xl font-extrabold text-primary">FlavorFolio</p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-neutral-content/60">
              Lorem ipsum dolor sit amet consectetur. Tristique cursus morbi nibh nec et vulputate. Turpis
              tortor nisi imperdiet quis accumsan.
            </p>
            <div className="mt-5 flex gap-3">
              {[["f", "Facebook"], ["t", "Twitter"], ["ig", "Instagram"], ["in", "LinkedIn"]].map(([s, label]) => (
                <a key={label} href="/" aria-label={label} className="btn btn-circle btn-primary btn-sm font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="User links">
            <h3 className="mb-3 text-sm font-bold text-white">User Link</h3>
            <ul className="space-y-2 text-xs text-neutral-content/60">
              {[
                ["About Us", "/about"],
                ["Contact Us", "/"],
                ["Order Delivery", "/"],
                ["Payment & Tax", "/"],
                ["Terms of Services", "/"],
              ].map(([l, href]) => (
                <li key={l}>
                  <a href={href} className="link link-hover">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-3 text-sm font-bold text-white">Contact Us</h3>
            <address className="mb-4 text-xs not-italic text-neutral-content/60">
              Roadside Kitchen Bashundhara R/A
              <br />
              +01797XXXXXX
            </address>
            {subscribed ? (
              <div role="status" className="alert alert-success text-sm">Thanks for subscribing!</div>
            ) : (
              <form onSubmit={onSubscribe} className="join w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  aria-label="Email address"
                  className="input join-item w-full bg-white text-base-content"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-neutral-content/60 sm:flex-row">
          <p>©2025 ARR, All right reserved</p>
          <div className="flex gap-8">
            <a href="/" className="link link-hover">Privacy Policy</a>
            <a href="/" className="link link-hover">Terms of Use</a>
          </div>
        </div>
      </footer>
  )
}
