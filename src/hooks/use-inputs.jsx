import { useState } from "react";
const UseInput = (validateValue) => {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const valueisValid = validateValue(enteredValue);
  const hasError = !valueisValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const InputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueisValid,
    hasError,
    valueChangeHandler,
    InputBlurHandler,
    reset,
  };
};
export default UseInput;
