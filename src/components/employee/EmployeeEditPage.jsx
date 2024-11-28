import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../PageHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../../assets/default-image-preview.png";
import Input from "../UI/Input";
import Button from "../UI/Button.jsx";
import { useMemo } from "react";
import { editEmployeeDesignation } from "../../store/employee-actions.js";
import Loading from "../loader/Loading.jsx";
import useFormValidation from "../../customHooks/useFormValidation.js";
import validateEmployeeEntry from "../utility/employeeValidationUtility.js";
import ForwardIcon from "../svg/ForwardIcon.jsx";

export default function EmployeeEditPage() {
  const {
    formData,
    errors,
    handleChange,
    handleBlur,
    validateFields,
    hasError,
  } = useFormValidation(
    {
      designation: "",
    },
    validateEmployeeEntry,
    []
  );
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeData = useSelector(
    (state) => state.employees.employeeDataTable
  );
  const isLoading = useSelector((state) => state.employees.loading);

  const employeeInfo = useMemo(() => {
    return employeeData.data.find(
      (employee) => employee.id === param.employeeId
    );
  }, []);

  async function handleEdit(e) {
    e.preventDefault();

    if (hasError()) {
      if (window.confirm("Do you really want to change designation?")) {
        try {
          const res = await dispatch(
            editEmployeeDesignation(param.employeeId, e.target[0].value)
          );
          console.log(typeof e.target[0].value);
          console.log(res);

          res === "success" && navigate("../employee-list");
        } catch (error) {
          console.error("Failed to update designation:", error);
        }
      }
    }
  }
  return (
    <>
      {isLoading && <Loading fullHeightWidth />}
      <PageHeader
        title="Edit Employee"
        buttonLabel="BACK"
        buttonOnClick={() => navigate("../employee-list")}
      />
      <section className="bg-white p-3 sm:p-4 md:p-6 lg-p-8 xl:p-10 2xl:p-12 rounded-lg grid sm:grid-cols-2 gap-3">
        <h2 className="col-start-1 -col-end-1">
          <strong>Id :</strong> {employeeInfo.id}
        </h2>
        <div className="col-start-1 -col-end-1">
          <img
            src={
              employeeInfo.user.image
                ? `https://restaurantapi.bssoln.com/images/user/${employeeInfo.user.image}`
                : defaultImage
            }
            alt={employeeInfo.user.fullName}
            className="max-w-44 object-cover rounded-lg"
          />
        </div>
        <p>
          {" "}
          <strong>Name:</strong> {employeeInfo.user.fullName}
        </p>
        <p>
          <strong>Phone:</strong> {employeeInfo.user.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {employeeInfo.user.email}
        </p>
        <p>
          <strong>NID:</strong> {employeeInfo.user.nid}
        </p>
        <p>
          <strong>Address:</strong> {employeeInfo.user.address}
        </p>
        <form
          onSubmit={handleEdit}
          className="flex gap-3 col-start-1 -col-end-1"
        >
          <Input
            placeholder={employeeInfo.designation}
            className="placeholder:text-stone-950 border border-solid border-stone-500 rounded p-0.5"
            labelClass="font-bold"
            defaultValue= {employeeInfo.designation}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            Designation:
          </Input>
          {errors?.designation && (
              <span className="absolute text-xs text-red-600 py-0.5 ps-3">
                {errors?.designation}
              </span>
            )}
          <Button type="submit" title="Change designation">
            <ForwardIcon className="fill-primary hover:fill-red-800" />
          </Button>
        </form>
      </section>
    </>
  );
}
