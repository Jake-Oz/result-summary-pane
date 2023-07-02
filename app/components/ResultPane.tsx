"use client";

import { useEffect, useState } from "react";
import TotalResult from "./TotalResult";
import data from "@/data.json";

const ResultPane = () => {
  const getCurrentDimension = () => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return { width: 380, height: 400 };
  };

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const score = Math.round(
    data
      .map(({ score }) => {
        return score;
      })
      .reduce((prev, value) => {
        return prev + value;
      }) / data.length
  );

  const diameter = screenSize.width <= 375 ? 140 : 165;

  return (
    <div className="flex flex-col items-center py-6 px-10 h-full rounded-b-[2rem] desktop:rounded-[2rem] bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue">
      <div className="text-lightLavender/95 text-xl mb-4 desktop:mb-7">
        Your Result
      </div>
      <TotalResult score={score} diameter={diameter} />
      <div className="text-white/90 text-[26px] mt-3 desktop:mt-6 mb-3">
        Great
      </div>
      <div className="text-lightLavender/70 text-center leading-5 mb-3">
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default ResultPane;
