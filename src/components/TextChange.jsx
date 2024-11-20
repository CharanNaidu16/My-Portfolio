import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["I'm a Full Stack Developer", "I'm a Software Developer"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length) {
        setIsForward(false);
      }

      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Cycle through the texts
      }
    }, 100); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
