import Input from "../UI/Input.jsx";
import Logo from '../../assets/logo-icon.png';
import Button from "../UI/Button.jsx";


export default function LoginForm () {
  return (
    <div className="login__right__container">
      <header className="mb-5">
        <img src={Logo} alt="Logo" className=" mx-auto w-28" />
        <h1 className=" text-center text-white font-bold">BSS RESTAURANT</h1>
      </header>
      <form onSubmit={(event)=>event.preventDefault()}>
        <Input type='text' id='userName' className='h-6 leading-6 p-3' >Username</Input>
        <Input type='password' id='userPassword' eyeButton  >Password</Input>
        <Button className='w-full text-white px-4 py-2 button-primary rounded uppercase mb-5 tracking-2px'>LOGIN</Button>
        <Button className='w-full text-red-600 px-4 font-medium rounded capitalize tracking-2px'>Back To Home</Button>
      </form>
    </div>
  )
}
