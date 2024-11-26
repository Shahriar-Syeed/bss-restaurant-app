import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../loader/Loading.jsx";
import PageHeader from "../PageHeader.jsx";
import defaultImage from "../../assets/default-image-preview.png";
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";
import TextArea from "../UI/TextArea.jsx";
import Select from "../UI/Select.jsx";

export default function FoodEditPage() {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foods = useSelector(state => state.foods.foodDataTable);
  const foodData = useSelector((state) => state.foods.foodDataTable.data);
  const isLoading = useSelector((state) => state.foods.loading);
  console.log(foodData, "high");
  const foodInfo = useMemo(() => {
    console.log(foodData);
    return foodData?.data?.find((food) => food.id === param.foodId);
  }, []);
  const DISCOUNT_OPTION = [
    { value: "64555112", label: "None" },
    { value: "63322514", label: "Flat" },
    { value: "85245675", label: "Percentage" },
  ];

  async function handleEdit(e) {
    e.preventDefault();
    if (window.confirm("Do you really want to change food information?")) {
      const fetchData = new FormData(e.target);
      const data = Object.fromEntries(fetchData.entries());
      console.log(data);

      // try{
      //   const res = await dispatch(editEmployeeDesignation(param.employeeId,e.target[0].value));
      //   console.log(typeof e.target[0].value);
      //   console.log(res);

      // res === 'success' && navigate('../foods');
      // }catch(error){
      //   console.error("Failed to update designation:", error);
      // }
    }
  }
  return (
    <>
      {isLoading && <Loading fullHeightWidth />}
      <PageHeader
        title="Edit Food"
        buttonLabel="BACK"
        buttonOnClick={() => navigate("../")}
      />
      <form onSubmit={handleEdit}>
        <section className="grid lg:grid-cols-12 md:grid-cols-2 lg:gap-4 gap-4 bg-white xl:p-10 lg:p-8 md:p-6 sm:p-4 p-3 rounded">
          <h2 className="col-start-1 lg:col-end-9 md:-col-end-1">
            <strong>Id :</strong> {foodInfo?.id}
          </h2>
          <div className="lg:col-start-9 lg:col-end-13 md:col-start-1 md:-col-end-1 lg:row-start-1 lg:row-span-3 flex justify-center items-center">
            <img
              src={
                foodInfo?.image
                  ? `https://restaurantapi.bssoln.com/images/food/${foodInfo?.image}`
                  : defaultImage
              }
              alt={foodInfo?.name}
              className="max-w-48 object-cover rounded-lg "
            />
          </div>
          <div className="lg:col-start-1 lg:col-end-9 md:col-start-1 md:-col-end-1">
            <Input
              placeholder={foodInfo?.name}
              className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5 flex-1"
              outerClassName="flex gap-3 items-center"
              labelClass="font-bold"
              id="name"
            >
              Food Name:
            </Input>
          </div>
          <div className="lg:col-start-1 lg:col-end-9 md:col-start-1 md:-col-end-1">
            <TextArea
              placeholder={foodInfo?.description}
              className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5 w-full"
              labelClass="font-bold block"
              labelTextColor="text-stone-900"
              id="description"
              label
            >
              Description:
            </TextArea>
          </div>
          <div className="lg:col-start-1 lg:col-end-4">
            <Input
              placeholder={foodInfo?.price}
              className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5 w-full"
              labelClass="font-bold"
              id="price"
            >
              Price in(&#2547;):
            </Input>
          </div>
          <div className="lg:col-start-4 lg:col-end-7">
            <Select
              placeholder={foodInfo?.discountType}
              label="Discount Type:"
              className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5 w-full"
              outerClassName="block "
              labelClassName="text-stone-900 font-bold"
              labelClass="font-bold block"
              id="discountType"
              options={DISCOUNT_OPTION}
              value={foodInfo?.discountType}
            />
          </div>
          <div className="lg:col-start-7 lg:col-end-10">
            <Input
              placeholder={foodInfo?.discount}
              className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5 w-full"
              outerClassName="block "
              labelClassName="text-stone-900 font-bold"
              labelClass="font-bold block"
              id="price"
            >
              Discount :
            </Input>
          </div>
          <div className="lg:col-start-10 lg:col-end-13 pt-1">
            <Input
              placeholder={foodInfo?.discountPrice}
              className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5 w-full"
              outerClassName="block "
              labelClassName="text-stone-900 font-bold"
              labelClass="font-bold block"
              id="discountPrice"
            >
              Discount Price (&#2547;) :
            </Input>
          </div>
          <div className="col-start-1 -col-end-1 pt-1">
            <Button
              type="submit"
              className="button-primary w-full py-2 text-white rounded "
            >
              SUBMIT
            </Button>
          </div>
        </section>
      </form>
    </>
  );
}
