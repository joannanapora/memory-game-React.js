import React, { useEffect, useRef } from "react";
import { differenceInMinutes, differenceInSeconds, min } from "date-fns";

const Timer = ({ counter, setCounter }: any) => {
  let currentDate = useRef(new Date());

  useEffect(() => {
    console.log("SET INTERVAL ZAWOLANY");
    let timer = setInterval(() => {
      const seconds = differenceInSeconds(new Date(), currentDate.current);
      const minutes = differenceInMinutes(new Date(), currentDate.current);
      setCounter({ min: minutes % 60, sec: seconds % 60 });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <span>
      {counter.min} m : {counter.sec} s
    </span>
  );
};

export default React.memo(Timer);
