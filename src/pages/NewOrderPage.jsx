import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/default-image-preview.png";
import PageHeader from "../components/PageHeader";
import Modal from "../components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import { modalActions } from "../store/modal-slice";
import { useEffect, useState } from "react";
import { getFoods } from "../store/food-actions";

const menuItems = [
  { name: "burger", description: "bread and beef", id: 123, price:100, discount:10, discountType:'flat', discountPrice:90 },
  { name: "panta", description: "water and rice make panta", id: 456, price:200, discount:25, discountType:'percentage', discountPrice:150  },
  { name: "pizza", description: "peperoni, cheese and sause", id: 789, price:100, discount:0, discountType:'', discountPrice:0  },
];
export default function NewOrderPage() {
  const [isSelected, setIsSelected] = useState(null);

  // const menuItems = useSelector((state)=>state.foods.foodsRowData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getFoods(1,10))
  // },[])

  function handleSelection(tableId) {
    setIsSelected((prev) => (prev === tableId ? null : tableId));
  }

  // Modal

  const isOpen = useSelector((state) => state.modal.open);
  function closeModal() {
    dispatch(modalActions.close());
  }
  return (
    <>
      <Modal open={isOpen} onClose={closeModal}>
        <h1>Failed fetching data!</h1>
        {/* {errorMess ? <p>{errorMess}</p> : <p>Invalid Password or Username</p>} */}
        <div className="modal-action p-2">
          <Button
            className="float-end button-primary px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </Modal>
      <PageHeader title="Order Food" />
      <div className="grid lg:grid-cols-4 lg:gap-4 md:gap-3.5 sm:gap-3 gap-2.5">
        <section className="lg:col-end-2 pt-3 lg:pb-3 bg-white rounded-lg overflow-hidden">
          <header>
            <h2 className="font-semibold text-lg text-center mb-3">
              SELECT A TABLE{` ${10}`}
            </h2>
          </header>
          <div className="flex lg:flex-col gap-3 viewport-hight overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 lg:[&::-webkit-scrollbar]:h-auto [&::-webkit-scrollbar-track]:bg-gray-300  [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded px-2 lg:px-0 ">
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 lg:border-collapse shadow-md ${
                isSelected === "TB001" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB001")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB001
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB002" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB002")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB002
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB003" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB003")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB003
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB004" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB004")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB004
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB005" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB005")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB005
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB006" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB006")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB006
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB006" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB006")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB006
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB007" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB007")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB007
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB008" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB008")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB008
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB009" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB009")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB009
              </span>
            </div>
            <div
              className={`card flex flex-col lg:flex-row gap-2 items-center justify-evenly py-3 px-3 lg:px-0 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white lg:border-dotted lg:border-b-2 shadow-md ${
                isSelected === "TB010" && "bg-red-600 text-white"
              }`}
              onClick={() => handleSelection("TB010")}
            >
              <img src={defaultImage} alt="" className="w-24 lg:rounded-lg" />
              <span className="md:font-semibold font-medium lg:font-bold lg:text-xl md:text-lg sm:text-base text-base">
                TB010
              </span>
            </div>
          </div>
        </section>
        <section className="lg:col-start-2 lg:col-end-5 p-3 bg-white rounded-lg relative">
          {!isSelected && (
            <div className="absolute bg-red-900 bg-opacity-70 p-8 inset-0 rounded-lg">
              <p className="font-bold p-4 border-4 border-dashed  text-white rounded-lg text-center text-2xl ">
                Please select a table!
              </p>
            </div>
          )}
          <h1>Add foods to the selected table.</h1>
          <div className="flex flex-col gap-2 viewport-hight overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-300  [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded">
            {menuItems.map((menuItem) => (
              <div key={menuItem.id} className="food-card p-3 shadow-md grid lg:grid-cols-3 lg:gap-4 md:gap-3.5 sm:gap-3 gap-2.5 border hover:border-red-900">
                <div>
                  <img
                    src={
                      menuItem.image
                        ? `https://restaurantapi.bssoln.com/images/food/${menuItem.image}`
                        : defaultImage
                    }
                    alt=""
                  />
                </div>
                <h2>Name: {menuItem.name}</h2>
                <h3>price:</h3>
                <h4>Description: {menuItem.description}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
