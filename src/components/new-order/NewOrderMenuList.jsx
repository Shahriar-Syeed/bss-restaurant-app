import { useSelector } from "react-redux";
import Button from "../UI/Button";
import defaultImage from "../../assets/default-image-preview.png";
import { forwardRef } from "react";

const NewOrderMenuList = forwardRef(function NewOrderMenuList(
  { menuItem, toggleCart, addFoodItemInCart, ...props },
  tableRef
) {
  const cartItems = useSelector((state) => state.cart.cartItem);
  return (
    <div {...props} ref={tableRef}>
      <div className="lg:row-span-4 place-self-center max-w-52">
        <img
          src={
            menuItem.image
              ? `https://restaurantapi.bssoln.com/images/food/${menuItem.image}`
              : defaultImage
          }
          alt={menuItem.name}
          className="w-full object-cover rounded-lg"
        />
      </div>
      <h2 className="text-2xl lg:col-start-2 lg:col-end-5 font-bold capitalize">
        {menuItem.name}
      </h2>
      <p className="lg:col-start-2 lg:col-end-5 max-h-16 line-clamp-3 text-ellipsis ">
        Description: {menuItem.description}
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between sm:items-center gap-y-3 lg:col-start-2 lg:col-end-5">
        <h3 className="text-lg font-semibold text-nowrap min-w-44">
          price: &nbsp;
          <span
            className={
              menuItem.discountPrice === 0
                ? `text-green-950`
                : `line-through text-gray-500`
            }
          >
            {menuItem.price}&#2547;
          </span>{" "}
          &nbsp;
          {menuItem.discountPrice !== 0 && (
            <span className="text-green-950">
              {menuItem.discountPrice}&#2547;
            </span>
          )}
        </h3>
        <div className="flex gap-1 flex-wrap">
          {cartItems.items.some((item) => item.foodId === menuItem.id) && (
            <Button
              className="button button__outline--primary py-2 px-4 text-white rounded-md order-2 "
              type="button"
              onClick={toggleCart}
            >
              GO TO CART
            </Button>
          )}
          <Button
            className="button button-primary py-2 px-4 text-white rounded-md sm:order-3"
            type="button"
            onClick={() => addFoodItemInCart(menuItem)}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
});

export default NewOrderMenuList;
