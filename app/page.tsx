import ResultPane from "./components/ResultPane";
import ResultSummaryPane from "./components/ResultSummaryPane";

export default function Home() {
  return (
    <div className=" desktop:absolute desktop:top-[calc(100vh/2-210px)] desktop:left-[calc(100vw/2-300px)] desktop:w-[600px] desktop:h-[425px]">
      <div className="desktop:relative flex flex-col h-full shadow-2xl shadow-blue-600/25 rounded-[40px]">
        <div className=" h-full w-[100%] desktop:w-[50%] z-10 ">
          <ResultPane />
        </div>
        <div className="desktop:absolute desktop:left-[270px] h-full bg-white desktop:w-[56%] z-0 rounded-r-3xl desktop:pl-7">
          <ResultSummaryPane />
        </div>
      </div>
    </div>
  );
}
