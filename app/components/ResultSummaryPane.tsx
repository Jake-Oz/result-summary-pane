import data from "@/data.json";
import ResultItem from "./ResultItem";
import Button from "./Button";

const ResultSummaryPane = () => {
  return (
    <div className="flex flex-col items-left py-5 desktop:py-6 px-8 gap-5 desktop:gap-6">
      <div className="text-xl font-bold">Summary</div>
      <div className="flex flex-col gap-4">
        {data.map((item) => {
          return (
            <ResultItem
              key={item.category}
              category={item.category}
              score={item.score}
              icon={item.icon}
            />
          );
        })}
      </div>
      <Button />
    </div>
  );
};

export default ResultSummaryPane;
