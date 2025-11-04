
export default function Login() {
  return (
   <form className="fixed top-50 left-1/2 transform -translate-x-1/2 flex flex-col gap-4 items-start p-8 w-80 sm:w-[352px] text-white rounded-lg shadow-xl border border-gray-200 bg-indigo-300/80">
      <div className="w-full ">
        <p>Email</p>
        <input
          placeholder="write yout email"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-400"
          type="email"
          required
        />
      </div>
      <div className="w-full ">
        <p>Password</p>
        <input
          placeholder="write your password"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-400"
          type="password"
          required
        />
      </div>
      <p></p>
      <p>
      </p>
 <button className="group relative bg-indigo-500/80 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer overflow-hidden">
  Login
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
</button>
       <p className="text-white">You have not registration ? <span className="text-indigo-500 cursor-pointer">click here</span></p>
    </form>
  );
}
