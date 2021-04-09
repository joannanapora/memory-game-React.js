import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState<{ min: number; sec: number }>({
    min: 0,
    sec: 1,
  });

  useEffect(() => {
    let timer = setInterval(() => {
      if (counter.sec === 59) {
        setCounter({ min: counter.min + 1, sec: 0 });
      } else setCounter({ ...counter, sec: counter.sec + 1 });
    }, 1000);

    return () => {
      localStorage.setItem("counter", JSON.stringify(counter));
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <span>
      {counter.min} m : {counter.sec} s
    </span>
  );
};

export default Timer;
