import React from "react";
import milano_de_delano__ou__delano_de_milano from "../assets/milano_de_delano__ou__delano_de_milano.jpg";

const Reviews = () => {
  return (
    <>
        <div className="flex-col bg-white items-center px-15 pb-15">
          <h4 className="font-bold text-[20px] pb-10">Depoimentos</h4>
          <div className="grid grid-cols-2 gap-0">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="m-5 border-1 border-gray-400 rounded-[8px] shadow-xs w-fit"
              >
                <div className="flex m-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <i key={starIndex} className="bx bx-star"></i>
                  ))}
                </div>
                <div className="m-4">
                  <div>
                    <h4 className="font-bold text-[1rem]">Review Title</h4>
                    <h4 className="font-medium text-black text-[14px] pb-5">
                      Review body
                    </h4>
                  </div>
                  <div className="flex">
                    <img
                      src={milano_de_delano__ou__delano_de_milano}
                      alt=""
                      className="rounded-full w-12 h-12"
                    />
                    <div className="pl-5 flex-col">
                      <h6 className="text-gray-600 font-semibold">
                        Reviewer Name
                      </h6>
                      <p className="text-gray-400 font-semibold">Date</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Reviews;
