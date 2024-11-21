import { useState } from "react";

export default function useFormValidation(initialState, validateInput) {
  const [formData, setFromData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched]= useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if(touched[name]){
      const error = validateInput(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error || '',
      }));
    }
  };

  const handleBlur = (e) =>{
    const {name, value}= e.target;

    setTouched((prev)=>({
      ...prev,
      [name]: true,
    }));

      const error = validateInput(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error || '',
      }));
  }

  const validateFields = () => {
    const finalErrors = {};
    Object.keys(formData).forEach((field) => {
      const fieldError = validateInput(field, formData[field]);
      if (fieldError) {
        finalErrors[field] = fieldError;
      }
    });
    setErrors(finalErrors);
    return finalErrors;
  };
  const hasError = () => Object.values(errors).some((error) => error !== "");

  return { formData, errors, handleChange, handleBlur, validateFields, hasError };
}
