"use client";

import Image from "next/image";

interface ResultItemProps {
  category: string;
  score: number;
  icon: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ category, score, icon }) => {
  const colors = () => {
    switch (category) {
      case "Reaction":
        return { text: "text-lightRed", bg: "bg-lightRed/5" };
      case "Memory":
        return { text: "text-orangyYellow", bg: "bg-orangyYellow/5" };
      case "Verbal":
        return { text: "text-greenTeal", bg: "bg-greenTeal/5" };
      case "Visual":
        return { text: "text-cobaltBlue", bg: "bg-cobaltBlue/5" };
      default:
        return { text: "text-orangeyYellow", bg: "bg-orangeyYellow/5" };
    }
  };

  return (
    <div
      className={`flex justify-between items-center ${
        colors().bg
      } rounded-lg py-3 px-4`}
    >
      <div className={`flex gap-3 ${colors().text}`}>
        <Image src={icon} alt={`${category} Icon`} width={16} height={16} />
        <div>{category}</div>
      </div>

      <div className="flex gap-2">
        <span className="font-bold">{score}</span>{" "}
        <span className="text-darkGreyBlue/50 font-bold">/ 100</span>
      </div>
    </div>
  );
};

export default ResultItem;
