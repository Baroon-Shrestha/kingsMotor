import React, { useState } from "react";

import CarsCard from "../SharedComponents/CarsCard";

import sampleCars from "./Sample";

export default function CarsGrid() {
  const handleOrderClick = (car) => {
    alert(`Order placed for ${car.name} ${car.model}!`);
  };

  console.log(sampleCars);

  return (
    <div className="min-h-screen bg-gray-50 py-20 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="text-3xl md:text-6xl font-extrabold">
            Premium Second Hand Cars
          </div>
          <div className="max-w-3xl text-base md:text-xl font-extralight text-center">
            Experience the comfort and quality of high-end vehicles without the
            new car price tag. Our certified pre-owned cars are built to
            impress.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleCars.map((car) => (
            <CarsCard key={car.id} car={car} onOrderClick={handleOrderClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
