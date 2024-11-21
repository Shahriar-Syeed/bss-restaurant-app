export const employeeValidateInput = (name, value) => {
  let error = "";

  switch (name) {
    case "firstName":
      if (!value.trim()) {
        error = "First name is required.";
      } else if (value.length < 2) {
        error = "First name must be at least 2 characters.";
      } else if (value.length > 10) {
        error = "First name must be at less than 10 characters.";
      }
      break;

    case "middleName":
      if (!value.trim()) {
        error = "Middle name is required.";
      } else if (value.length > 10) {
        error = "Middle name must be at less than 10 characters.";
      }
      break;

    case "lastName":
      if (!value.trim()) {
        error = "Last name is required.";
      } else if (value.trim().length < 2) {
        error = "Last name must be at least 2 characters.";
      } else if (value.trim().length > 10) {
        error = "Last name must be at less than 10 characters.";
      }
      break;

    case "fatherName":
      if (!value.trim()) {
        error = "Father's name is required.";
      } else if (value.trim().length < 2) {
        error = "Father's name must be at least 2 characters.";
      } else if (value.trim().length > 25) {
        error = "Father's name must be at less than 25 characters.";
      }
      break;

    case "motherName":
      if (!value.trim()) {
        error = "Mother's name is required.";
      } else if (value.trim().length < 2) {
        error = "Mother's name must be at least 2 characters.";
      } else if (value.trim().length > 25) {
        error = "Mother's name must be at less than 25 characters.";
      }
      break;

    case "spouseName":
      if (!value.trim()) {
        error = "Spouse's name is required.";
      } else if (value.trim().length < 2) {
        error = "Spouse's name must be at least 2 characters.";
      } else if (value.trim().length > 25) {
        error = "Spouse's name must be at less than 25 characters.";
      }
      break;

    case "email":
      const emailRegex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!emailRegex.test(value)) {
        error = "Invalid email address.";
      }
      break;

    case "phoneNumber":
      const phoneRegex = /^[0-9]{11}$/;
      if (!value.trim()) {
        error = "Phone number is required.";
      } else if (!phoneRegex.test(value.trim())) {
        error = "Phone number must be 11 digits.";
      }
      break;

    case "gender":
      if (!value) {
        error = "Gender select please.";
      } 
      break;

    case "designation":
      if (!value.trim()) {
        error = "Designation is required.";
      } else if (value.trim().length > 15) {
        error = "Designation must be at less then 15 characters.";
      }
      break;

    case "dob":
      if (!value) {
        error = "Date of Birth is required.";
      } else if (Date.now() - Date.parse(value) < 568025136000) {
        error = "Age is less then 18 years.";
      }
      break;

    case "joinDate":
      if (!value) {
        error = "Date of Join is required.";
      } else if (Date.now() - Date.parse(value) <= 0) {
        error = "Date should be before today.";
      }
      break;

    case "nid":
      const nidRegex = /^(?:\d{10}|\d{17})$/;
      if (!value) {
        error = "NID is required.";
      } else if ( !nidRegex.test(value)) {
        error = "NID should be 10 or 17 digits.";
      }
      break;

    default:
      break;
  }

  return error;
};
