"use client";

const Button = () => {
  return (
    <div className="flex justify-center cursor-pointer rounded-3xl hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue bg-darkGreyBlue text-paleBlue text-center h-12 mt-2">
      <button
        className="w-full"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Button;
