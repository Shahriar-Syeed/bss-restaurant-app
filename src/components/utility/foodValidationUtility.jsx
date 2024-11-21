export const employeeValidateInput = (name, value) => {
  let error = "";

  switch (name) {
    case "name":
      if (!value.trim()) {
        error = "Food name is required.";
      } else if (value.length < 3) {
        error = "Must be 3 characters.";
      } else if (value.trim().length > 40) {
        error = "40 characters is limit.";
      }
      break;

    case "description":
      if (!value.trim()) {
        error = "Food description cannot be empty.";
      } else if (value.length > 10) {
        error = "Must be 10 characters.";
      } else if (value.length > 150) {
        error = "150 characters limit.";
      }
      break;

    case "price":
      if (!value.trim()) {
        error = "Price is required.";
      } 
      break;

    default:
      break;
  }

  return error;
};
