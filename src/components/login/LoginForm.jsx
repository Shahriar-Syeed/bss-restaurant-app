import { useState } from "react";
import Input from "../UI/Input.jsx";
import Logo from '../../assets/logo-icon.png';
import Button from "../UI/Button.jsx";
// import apiUrl from "../../apiUrl/ApiUrl.jsx";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";



export default function LoginForm () {

  const [formData, setFormData] = useState({
    userName: 'admin@mail.com',
    password: 'Admin@123',
});
const navigate =useNavigate();
function handleChange(e){
  const {name, value} = e.target;
  setFormData({...formData, [name]: value});
};

  async function handleSubmit(event){
    event.preventDefault();

    // const fetchData =new FormData(event.target);
    // const loginData = Object.fromEntries(fetchData.entries());
    // console.log(loginData);
    // const logtData = JSON.stringify(loginData);

    try{
      console.log(formData);
      const response = await axios.post(`https://www.restaurantapi.bssoln.com/api/Auth/SignIn`, formData);
      console.log(response);
      
    } catch (error){
      console.log(error);
    }

    navigate('admin');
    
  }

  function navHandle(params) {
    
  }
  return (
    <div className="login__right__container">
      <header className="mb-5">
        <img src={Logo} alt="Logo" className=" mx-auto w-28" />
        <h1 className=" text-center text-white font-bold">BSS RESTAURANT</h1>
      </header>
      <form onSubmit={(event)=>handleSubmit(event)}>
        <Input type='text' required id='userName' className='h-6 leading-6 p-3' value={formData.userName} onChange={(event)=>handleChange(event)} >Username</Input>
        <Input required id='password' className='h-6 leading-6 p-3' eyeButton value={formData.password} onChange={(event)=>handleChange(event)} >Password</Input>
        <Button type="submit" className='w-full text-white px-4 py-2 button-primary rounded uppercase mb-5 tracking-2px'>LOGIN</Button>
        <Button type="button" className='w-full text-red-600 px-4 font-medium rounded capitalize tracking-2px'>Back To Home</Button>
      </form>
    </div>
  )
}
