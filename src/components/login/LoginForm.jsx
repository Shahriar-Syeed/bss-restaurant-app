import { useState } from "react";
import Input from "../UI/Input.jsx";
import Logo from "../../assets/logo-icon.png";
import Button from "../UI/Button.jsx";
// import apiUrl from "../../apiUrl/ApiUrl.jsx";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useLoading from "../../customHooks/useLoading.jsx";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice.js";
import Modal from "../UI/Modal.jsx";
import Loading from "../loader/Loading.jsx";
import { setLoginData, submitLogin } from "../../store/login-actions.js";

export default function LoginForm() {
  // const [formData, setFormData] = useState({
  //   userName: "admin@mail.com",
  //   password: "Admin@123",
  // });
  // const [error, setError] = useState(null);
  // const { loader, startLoad, endLoad } = useLoading();
  const navigate = useNavigate();

  const loginData = useSelector((state)=> state.login.formData);
  const isLoading = useSelector((state)=> state.login.loading);
  const error = useSelector((state)=> state.login.error);

  const modalId = useSelector((state)=>state.modal.id);
  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(setLoginData({...loginData, [name]:value}))
    // setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // startLoad();
    // try {
    //   console.log(formData);
    //   const response = await axios.post(
    //     `https://restaurantapi.bssoln.com/api/Auth/SignIn`,
    //     formData
    //   );
    //   console.log(response);
    //   if (response.status === 200) {
    //     const token = "Bearer " + response.data.token;
    //     const user = response.data.user;
    //     const refreshToken = response.data.refreshToken;
    //     sessionStorage.setItem("token", token);
    //     sessionStorage.setItem("refreshToken", refreshToken);
    //     sessionStorage.setItem("user", JSON.stringify(user));
    //     navigate(`/bss-restaurant-app/${user.fullName}`);
    //   }
    // } catch (error) {
    //     setError(error.message);
    //   openModal();
    //   setTimeout(() => {
    //     endLoad();
    //     closeModal();
    //     return;
    //   }, 3000);
    // }
    // endLoad();
    try{
      const res = await dispatch(submitLogin(loginData));

      navigate(res);
    } catch (error){
      console.log(error);
    }

  }
  const isOpen = useSelector((state) => state.modal.open);
  console.log(isOpen);
  const dispatch = useDispatch();
  // function openModal() {
  //   dispatch(modalActions.id("Login Error"))
  //   dispatch(modalActions.open());
  // }
  function closeModal() {
    dispatch(modalActions.close());
    dispatch(modalActions.id(null));
  }

  return (
    <>
    {isLoading && <Loading/>}
      <div className="login__right__container">
        <header className="mb-5">
          <img src={Logo} alt="Logo" className=" mx-auto w-28" />
          <h1 className=" text-center text-white font-bold">BSS RESTAURANT</h1>
        </header>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-5">
            <Input
              type="text"
              required
              id="userName"
              name="userName"
              className="block rounded border border-solid w-full border-slate-250 h-6 leading-6 px-3.5 py-8 "
              value={loginData.userName}
              onChange={(event) => handleChange(event)}
            >
              Username
            </Input>
          </div>
          <div className="mb-5">
            <Input
              required
              id="password"
              name="password"
              className="h-6 leading-6 p-3"
              eyeButton
              value={loginData.password}
              onChange={(event) => handleChange(event)}
            >
              Password
            </Input>
          </div>
          <Button
            type="submit"
            className="w-full text-white px-4 py-2 button-primary rounded uppercase mb-5 tracking-2px"
          >
            LOGIN
          </Button>
          <Link
            to="/bss-restaurant-app/"
            className="w-full text-red-600 px-4 font-medium rounded capitalize tracking-2px"
          >
            Back To Home
          </Link>
        </form>
      </div>
    </>
  );
}
