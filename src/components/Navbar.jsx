import Logo from '../assets/logo-icon.png';


export default function Navbar() {
  return (
    <>
      <nav className="bg-primary sticky top-0 z-20">
        <div className="flex flex-wrap items-center justify-between py-4 px-10">
          <div
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            
            <img src={Logo} alt="Logo" className=" mx-auto h-8" />
            <h2 className=" text-center text-white font-semibold whitespace-nowrap">BSS RESTAURANT</h2>
            
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            
          </div>
        </div>
      </nav>
    </>
  );
}
