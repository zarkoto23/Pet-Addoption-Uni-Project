import { toast } from "react-toastify";
import { useCreate } from "../../api/petsApi";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { create } = useCreate();
  const navigate = useNavigate();

  const submitCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData);

    data = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value.trim()])
    );

    const hasEmptyFields = Object.values(data).some(
      (value) => value.trim() === ""
    );

    if (hasEmptyFields || !data.gender || !data.castrated) {
      toast.error("All fields must be filled!");
      return;
    }

    const result = await create(data);
    navigate(`/catalog/details/${result?._id}`);
  };

  return (
    <div className="fixed  left-1/2  transform -translate-x-1/2 flex-col items-center justify-start pt-36">
      <form
        onSubmit={submitCreate}
        className="opacity-0 bg-gradient backdrop-blur-xs border border-white/50 rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-6 fade-in-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">
              Name:
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter pet's name"
              className="w-full p-2 rounded-md border bg-white border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">
              Category:
            </label>
            <select
              name="category"
              className="w-full bg-white p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Sex:
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="accent-indigo-500 w-5 h-5"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Castrated:
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="castrated"
                    value="yes"
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="castrated"
                    value="no"
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Picture:
            </label>
            <input
              name="imageUrl"
              type="text"
              placeholder="https://example.com/pet.jpg"
              className="w-full bg-white p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              rows="3"
              placeholder="Tell more about the pet"
              className="bg-white w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Age:
            </label>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="number"
                  min="0"
                  placeholder="Years"
                  name="years"
                  className="bg-white w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  name="months"
                  min="0"
                  max="11"
                  placeholder="Months"
                  className="bg-white w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="relative w-full bg-indigo-500/80 hover:bg-indigo-600 text-white py-2 rounded-md font-semibold transition-all group overflow-hidden"
        >
          Publish Ad
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </form>
    </div>
  );
}
