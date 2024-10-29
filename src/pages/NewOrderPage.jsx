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
  {
    name: "burger",
    description:
      "bread and beef. beef is very good cooked. with cheese slices. double patty. The text-overflow property may be specified using one or two values. If one value is given, it specifies overflow behavior for the end of the line (the right end for left-to-right text, the left end for right-to-left text). If two values are given, the first specifies overflow behavior for the left end of the line, and the second specifies it for the right end of the line. The property accepts either a keyword value (clip or ellipsis) or a <string> value.The text-overflow property may be specified using one or two values. If one value is given, it specifies overflow behavior for the end of the line (the right end for left-to-right text, the left end for right-to-left text). If two values are given, the first specifies overflow behavior for the left end of the line, and the second specifies it for the right end of the line. The property accepts either a keyword value (clip or ellipsis) or a <string> value.",
    id: 123,
    price: 100,
    discount: 10,
    discountType: "flat",
    discountPrice: 90,
  },
  {
    name: "panta",
    description: "water and rice make panta",
    id: 456,
    price: 200,
    discount: 25,
    discountType: "percentage",
    discountPrice: 150,
  },
  {
    name: "pizza",
    description: "peperoni, cheese and sause",
    id: 789,
    price: 100,
    discount: 0,
    discountType: "",
    discountPrice: 0,
  },
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
            <div className="absolute bg-white bg-opacity-80 inset-0 rounded-lg">
              <div className="font-bold p-4 border-4 border-dashed border-red-700 text-red-950 rounded-t-lg h-40 text-center text-2xl flex items-center justify-center flex-col bg-white gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#cc080b"
                  version="1.1"
                  width="32px"
                  height="32px"
                  viewBox="0 0 45.311 45.311"
                >
                  <g>
                    <path d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656   c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635   C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001   c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0   c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578   c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0   c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29   c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z" />
                  </g>
                </svg>
                <p>Please, At First Select A Table!</p>
              </div>
            </div>
          )}
          <h1>Add foods to the selected table.</h1>
          <div className="flex flex-col gap-2 viewport-hight pb-3 lg:pb-0 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-300  [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded">
            {menuItems.map((menuItem) => (
              <div
                key={menuItem.id}
                className="food-card p-3 shadow-md grid lg:grid-cols-4 lg:gap-4 md:gap-3.5 sm:gap-3 gap-2.5 border hover:border-red-900 rounded-sm"
              >
                <div className="lg:row-span-4 place-self-center">
                  <img
                    src={
                      menuItem.image
                        ? `https://restaurantapi.bssoln.com/images/food/${menuItem.image}`
                        : defaultImage
                    }
                    alt=""
                    className="w-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-2xl lg:col-start-2 lg:col-end-5 font-bold capitalize">
                  {menuItem.name}
                </h2>
                <p className="lg:col-start-2 lg:col-end-5 max-h-16 line-clamp-3 text-ellipsis ">
                  Description: {menuItem.description}
                </p>
                <div className="flex flex-wrap justify-between items-center gap-y-3 lg:col-start-2 lg:col-end-5">
                  <h3 className="text-lg font-semibold text-nowrap min-w-44">
                    price: &nbsp;
                    <span
                      className={
                        menuItem.discountPrice
                          ? `line-through text-gray-500`
                          : `text-green-950`
                      }
                    >
                      {menuItem.price} &#2547;
                    </span>{" "}
                    &nbsp;
                    {menuItem.discountPrice !== 0 && (
                      <span className="text-green-950">
                        {menuItem.discountPrice} &#2547;
                      </span>
                    )}
                  </h3>
                  <Button className="button button-primary py-2 px-4 text-white rounded self-">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
