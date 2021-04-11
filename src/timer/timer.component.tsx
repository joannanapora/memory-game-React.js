import React, { useEffect } from "react";

const Timer = ({ counter, setCounter }: any) => {
  useEffect(() => {
    let timer = setInterval(() => {
      if (counter.sec === 59) {
        setCounter({ min: counter.min + 1, sec: 0 });
      } else setCounter({ ...counter, sec: counter.sec + 1 });
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

export default Timer;
