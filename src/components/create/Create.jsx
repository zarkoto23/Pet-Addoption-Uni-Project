import { Form } from "react-router-dom"
import { useCreate } from "../../api/petsApi"

export default function Create() {
  const {create} =useCreate()


  const submitCreate=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const data=Object.fromEntries(formData)

    create(data)
    
    e.target.reset()
    

  }






  return (
    <div className="fixed  left-1/2  transform -translate-x-1/2 flex-col items-center justify-start pt-36">
      <form onSubmit={submitCreate}
        className="opacity-0 bg-gradient backdrop-blur-xs border border-white/50 rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-6 fade-in-up"
      >
        {/* Грид оформление */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Име */}
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

          {/* Категория */}
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

          {/* Пол и Кастрация */}
          <div className="col-span-1 md:col-span-2">
            {/* Пол */}
            <div className="mb-4">
              <label
              className="block text-gray-700 font-semibold mb-2">
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

            {/* Кастрация */}
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

          {/* Снимка */}
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

          {/* Описание */}
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

          {/* Възраст (Years + Months с общо заглавие) */}
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

        {/* Бутон */}
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
