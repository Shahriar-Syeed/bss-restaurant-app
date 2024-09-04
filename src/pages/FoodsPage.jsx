

export default function FoodsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md">
  <form className="grid grid-cols-1 md:grid-cols-12 gap-4">
   
    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <input type="text" placeholder="First Name" className="border border-gray-300 p-2 rounded w-full" />
      <input type="text" placeholder="Middle Name" className="border border-gray-300 p-2 rounded w-full" />
      <input type="text" placeholder="Last Name" className="border border-gray-300 p-2 rounded w-full" />

      <input type="text" placeholder="Spouse Name" className="border border-gray-300 p-2 rounded w-full" />
      <input type="text" placeholder="Father Name" className="border border-gray-300 p-2 rounded w-full" />
      <input type="text" placeholder="Mother Name" className="border border-gray-300 p-2 rounded w-full" />

      <input type="text" placeholder="Designation" className="border border-gray-300 p-2 rounded w-full" />
      <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded w-full" />
      <input type="text" placeholder="Phone Number" className="border border-gray-300 p-2 rounded w-full" />

      <select className="border border-gray-300 p-2 rounded w-full">
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input type="date" placeholder="Date of Birth" className="border border-gray-300 p-2 rounded w-full" />
      <input type="date" placeholder="Date of Join" className="border border-gray-300 p-2 rounded w-full" />
      <input type="text" placeholder="NID" className="border border-gray-300 p-2 rounded w-full" />
    </div>

    
    <div className="md:col-span-4 flex justify-center items-center border border-gray-300 p-4">
      <img src="https://via.placeholder.com/150" alt="No image" className="object-cover w-full h-full" />
    </div>

    
    <div className="md:col-span-12 flex justify-center mt-4">
      <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded">SUBMIT</button>
    </div>
  </form>
</div>

  );
}
