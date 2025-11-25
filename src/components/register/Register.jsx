import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useRegister } from "../../api/authApi";
import { toast } from "react-toastify";

export default function Register() {
  const { userLoginHandler } = useContext(UserContext);
  const nav = useNavigate();
  const { register } = useRegister();

  // FORM STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ERROR STATE
  const [errs, setErrs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // VALIDATION FUNCTIONS
  const validateEmail = (email) => {
    if (!email.includes("@")) return "Email must contain @.";
    const parts = email.split("@");
    if (!parts[1] || !parts[1].includes(".")) {
      return "Email must contain a valid domain.";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (password.length < 5) return "Password must be at least 5 characters.";
    return "";
  };

  const validateConfirm = (password, confirmPassword) => {
    if (password !== confirmPassword) return "Passwords do not match.";
    return "";
  };

  // HANDLE BLUR VALIDATION
  const handleBlur = (field) => {
    let newErrs = { ...errs };

    if (field === "email") {
      newErrs.email = validateEmail(email);
      // if (newErrs.email) toast.error(newErrs.email);
    }

    if (field === "password") {
      newErrs.password = validatePassword(password);
      // if (newErrs.password) toast.error(newErrs.password);
    }

    if (field === "confirmPassword") {
      newErrs.confirmPassword = validateConfirm(password, confirmPassword);
      // if (newErrs.confirmPassword) toast.error(newErrs.confirmPassword);
    }

    setErrs(newErrs);
  };

  // SUBMIT HANDLER
  const registerHandler = async (e) => {
    e.preventDefault();

    // Final validation before submit
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);
    const confirmErr = validateConfirm(password, confirmPassword);

    if (emailErr || passErr || confirmErr) {
      toast.error("Please fill all fields with correct information!");
      return;
    }

    try {
      const authData = await register(email, password);
      userLoginHandler(authData);
      toast.success("Success registration!");
      nav("/");
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <form
      noValidate
      onSubmit={registerHandler}
      className="fixed top-50 left-1/2 backdrop-blur-xs transform -translate-x-1/2 flex flex-col gap-4 items-start p-8 w-80 sm:w-[352px] text-white/50 rounded-2xl shadow-xl border border-white-200 bg-gradient fade-in-up"
    >
      {/* EMAIL */}
      <div className="w-full">
        <p>Email</p>
        <input
          placeholder="write your email"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-300 bg-white text-black"
          type="text"
          name="email"
          value={email}
          onBlur={() => handleBlur("email")}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errs.email && (
          <p className="text-red-400 text-sm mt-1">{errs.email}</p>
        )}
      </div>

      {/* PASSWORD */}
      <div className="w-full">
        <p>Password</p>
        <input
          placeholder="write your password"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-300 bg-white text-black"
          type="password"
          name="password"
          value={password}
          onBlur={() => handleBlur("password")}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errs.password && (
          <p className="text-red-400 text-sm mt-1">{errs.password}</p>
        )}
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="w-full">
        <p>Confirm Password</p>
        <input
          placeholder="repeat your password"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-300 bg-white text-black"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onBlur={() => handleBlur("confirmPassword")}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errs.confirmPassword && (
          <p className="text-red-400 text-sm mt-1">{errs.confirmPassword}</p>
        )}
      </div>

      <button className="group relative bg-indigo-500/80 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer overflow-hidden">
        Register
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
      </button>

      <p className="text-white">
        You already have registration?{" "}
        <Link to={"/login"} className="text-indigo-500 cursor-pointer">
          click for Login
        </Link>
      </p>
    </form>
  );
}
