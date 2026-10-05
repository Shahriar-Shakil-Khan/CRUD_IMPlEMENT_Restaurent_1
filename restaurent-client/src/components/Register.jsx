import { Link, Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200";

const Register = () => {
  const { user, createUser, updateUserProfile, setLoading } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace />;

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // password validation
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return Swal.fire({
        icon: "warning",
        title: "Weak password",
        text: "Minimum 6 character, ekta boro hater ar ekta chhoto hater letter lagbe.",
        confirmButtonColor: "#e11d48",
      });
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      Swal.fire({ icon: "success", title: "Account created", timer: 1200, showConfirmButton: false });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: err.code === "auth/email-already-in-use" ? "Email already used" : "Registration failed",
        confirmButtonColor: "#e11d48",
      });
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f3eded] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">Register</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Name</label>
            <input type="text" name="name" required className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Photo URL</label>
            <input type="text" name="photo" className={inputClass} placeholder="https://..." />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
            <input type="email" name="email" required className={inputClass} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
            <input type="password" name="password" required className={inputClass} placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-full bg-rose-600 py-3 font-semibold text-white transition hover:bg-rose-700">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" state={location.state} className="font-semibold text-rose-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;