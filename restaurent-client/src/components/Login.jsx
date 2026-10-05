import { Link, Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200";

const Login = () => {
  const { user, signIn, googleSignIn, setLoading } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // already login thakle login page dekhabe na
  if (user) return <Navigate to={from} replace />;

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({ icon: "success", title: "Login successful", timer: 1200, showConfirmButton: false });
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({ icon: "error", title: "Wrong email or password", confirmButtonColor: "#e11d48" });
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({ icon: "success", title: "Login successful", timer: 1200, showConfirmButton: false });
      })
      .catch(() => setLoading(false));
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f3eded] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
            <input type="email" name="email" required className={inputClass} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
            <input type="password" name="password" required className={inputClass} placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-full bg-rose-600 py-3 font-semibold text-white transition hover:bg-rose-700">
            Login
          </button>
        </form>

        <div className="my-5 text-center text-sm text-gray-400">or</div>

        <button
          type="button"
          onClick={handleGoogle}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          New here?{" "}
          <Link to="/register" state={location.state} className="font-semibold text-rose-600 hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;