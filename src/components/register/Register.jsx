import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useRegister } from "../../api/authApi";
import { toast } from "react-toastify";

export default function Register() {
  const { userLoginHandler } = useContext(UserContext);
  const nav = useNavigate();

  const { register } = useRegister();

  const registerHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);


    if (data.password !== data.confirm) {
      e.target.elements.confirm.value = "";
      return toast.error("Paswords not match!");
    }

    try {
      const authData = await register(data.email, data.password);
      userLoginHandler(authData);
      toast.success("Success registration!");

      nav("/");
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
      e.target.reset();
    }
  };
  return (
    <form
      onSubmit={registerHandler}
            className="fixed top-50 left-1/2  backdrop-blur-xs transform -translate-x-1/2 flex flex-col gap-4 items-start p-8 w-80 sm:w-[352px] text-white/50 rounded-2xl shadow-xl border border-white-200 bg-gradient fade-in-up"

    >
      <div className="w-full ">
        <p>Email</p>
        <input
          placeholder="write yout email"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-300 bg-white text-black"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="w-full ">
        <p>Password</p>
        <input
          placeholder="write your password"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-300 bg-white text-black"
          type="password"
          name="password"
          required
        />
      </div>
      <div className="w-full ">
        <p>Confirm Password</p>
        <input
          placeholder="repeat your password"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-300 bg-white text-black"
          type="password"
          name="confirm"
          required
        />
      </div>
      <p></p>
      <p></p>
      <button className="group relative bg-indigo-500/80 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer overflow-hidden">
        Register
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
      </button>
      <p className="text-white">
        You already have registration ?{" "}
        <Link to={"/login"} className="text-indigo-500 cursor-pointer">
          click for Login
        </Link>
      </p>
    </form>
  );
}
