"use client";

interface TotalResultProps {
  score: number | string | undefined;
  diameter: number;
}

const TotalResult: React.FC<TotalResultProps> = ({ score, diameter }) => {
  if (typeof score == "undefined") {
    score = "--";
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-violetBlue to-persianBlue `}
      style={{ height: diameter, width: diameter }}
    >
      <div className="text-white/90 text-6xl font-bold">{score}</div>
      <div className="text-lightLavender/50 text-lg">of 100</div>
    </div>
  );
};

export default TotalResult;
