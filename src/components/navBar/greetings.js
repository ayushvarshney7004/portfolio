import { useEffect, useState, Fragment } from "react";

const Greetings = () => {
  // const local = "en";
  const [today, setDate] = useState(new Date()); //to save the current date as hook
  useEffect(() => {
    const timer = setInterval(() => {
      //trigger render at every component which uses the useData book
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); //return function to clear the function timer
    };
  }, []);
  //  const day = today.toLocaleDateString(local, { weekday: "long" });
  //   const date = `${day} , ${today.getDate()} ${today.toLocaleDateString(local, {
  //     month: "long",
  //   })}\n\n`;
  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning 🌞") || (hour < 17 && "Afternoon 🕛") || "Evening 🌝"
  }`;
  //   const time = today.toLocaleDateString(local, {
  //     hour: "2-digit",
  //     hour12: true,
  //     minute: "numeric",
  //   });
  return (
    <Fragment>
      <div>{wish}</div>
    </Fragment>
  );
};

export default Greetings;
