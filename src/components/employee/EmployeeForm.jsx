import Input from "../UI/Input.jsx";
import defImg from "../../assets/default-image-preview.png";

// import apiUrl from "../../apiUrl/ApiUrl.jsx";
// import axios from "axios";

export default function EmployeeForm() {
  //   const [formData, setFormData] = useState({
  //     userName: 'admin@mail.com',
  //     password: 'Admin@123',
  // });

  // function handleChange(e){
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value});
  // };

  async function handleSubmit(event) {
    event.preventDefault();

    const fetchData = new FormData(event.target);
    const data = Object.fromEntries(fetchData.entries());
    console.log(data);
    // const logtData = JSON.stringify(loginData);

    // try{
    //   console.log(formData);
    //   const response = await axios.post(`https://www.restaurantapi.bssoln.com/api/Auth/SignIn`, formData);
    //   console.log(response);

    // } catch (error){
    //   console.log(error);
    // }
  }

  return (
    <div className="">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="grid gap-1 bg-white">
          <div className="border-dashed border border-stone-400 relative h-36">
            <Input
              type="file"
              hidden
              required
              id="employeeImage"
              name="imageEmployee"
              labelClass="absolute top-0 bottom-0 left-0 right-0 opacity-0 z-40"
              controlClass="h-full flex items-center justify-center"
              dropdownImg
              imgClass="h-full "
            ></Input>
          </div>
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer border-solid"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Floating outlined
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
