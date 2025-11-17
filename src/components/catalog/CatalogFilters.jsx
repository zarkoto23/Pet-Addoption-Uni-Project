export default function CatalogFilters({onChange}) {

    const handleChange=(e)=>{
      const value=e.target.value
      const field=e.target.name


        onChange(prev=>({
          ...prev,
          [field]:value
        }))


      }
    

  


  return (
    <div className="w-full max-w-6xl mx-auto mb-6 px-4 flex gap-10 justify-center">

      {/* Species */}
      <div className="flex items-center gap-4">
        <label className="text-gray-800 font-semibold text-sm tracking-wide">
          Species:
        </label>

        <select
        name="spicies"
        onChange={handleChange}
          className="w-48 p-3 rounded-xl bg-white/80 backdrop-blur-md
                     border border-indigo-200 shadow-md
                     text-gray-700
                     focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     hover:shadow-lg transition-all duration-200"
        >
          <option value="">All</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="other">Others</option>
        </select>
      </div>

      {/* Gender */}
      <div className="flex items-center gap-4">
        <label className="text-gray-800 font-semibold text-sm tracking-wide">
          Gender:
        </label>

        <select
        name="gender"
        onChange={handleChange}
          className="w-48 p-3 rounded-xl bg-white/80 backdrop-blur-md
                     border border-indigo-200 shadow-md
                     text-gray-700
                     focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     hover:shadow-lg transition-all duration-200"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

    </div>
  );
}
