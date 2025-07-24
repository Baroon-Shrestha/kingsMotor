import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sampleCars from "./Sample";
import {
  Heart,
  Share2,
  Phone,
  MessageCircle,
  Car,
  Fuel,
  Calendar,
  Gauge,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Shield,
  Award,
} from "lucide-react";
import { BiLeftArrow } from "react-icons/bi";

export default function CarDetails() {
  const { id } = useParams();
  const car = sampleCars.find((c) => c.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const selectedCar = sampleCars.find((car) => car.id === parseInt(id));

  const goBack = () => {
    navigate(-1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + car.images.length) % car.images.length
    );
  };

  const getConditionIcon = (condition) => {
    switch (condition) {
      case "Excellent":
        return <Award className="w-3 h-3" />;
      case "Like New":
        return <Star className="w-3 h-3" />;
      case "Good":
        return <Check className="w-3 h-3" />;
      default:
        return <Shield className="w-3 h-3" />;
    }
  };

  if (!car) return <p className="text-center mt-10">Car not found!</p>;

  return (
    <>
      <div className="relative h-[60vh] bg-cover bg-center">
        <img
          src={`/${car.images[currentImageIndex]}`}
          alt={`${car.name} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full">
          <div className="backdrop-blur-md bg-black/10 py-16 px-6 md:px-0">
            <div className="container mx-auto">
              <div className="text-4xl md:text-7xl font-extrabold text-white">
                Premium Second Hand Cars
              </div>
              <div className="max-w-3xl text-base md:text-xl font-extralight text-white">
                Explore our exclusive collection of premium second-hand cars,
                each thoroughly inspected to deliver exceptional performance,
                reliability, and value you can trust.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="">
              <button
                className="px-6 py-2 bg-green-600 text-white font-bold rounded-2xl flex items-center gap-x-2"
                onClick={() => goBack()}
              >
                <BiLeftArrow />
                Back
              </button>
            </div>
            <div>
              {" "}
              <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-xl font-semibold hover:bg-blue-600 hover:text-white ease-in-out duration-500 flex items-center justify-center">
                Place Order
              </button>
            </div>
          </div>
        </div>
        {/* Image Carousel */}
        <div className="relative h-[500px] overflow-hidden rounded-2xl mb-8">
          <img
            src={`/${car.images[currentImageIndex]}`}
            // src={`/${car.image}`}
            alt={`${car.name} ${car.model}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {car.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {car.name} {car.model}
            </h1>
            <p className="text-gray-600 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {car.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-blue-600">
              NPR {car.price.toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm">Fixed Price</p>
          </div>
        </div>
        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{car.year}</p>
            <p className="text-gray-600 text-sm">Year</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Gauge className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {car.kmsRan.toLocaleString()} KM
            </p>
            <p className="text-gray-600 text-sm">Mileage</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Fuel className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{car.fuelType}</p>
            <p className="text-gray-600 text-sm">Fuel Type</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Car className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {car.transmission}
            </p>
            <p className="text-gray-600 text-sm">Transmission</p>
          </div>
        </div>
        {/* Features */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {car.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-blue-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Vehicle Details */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Vehicle Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Engine</span>
                <span className="font-medium">{car.engine}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Condition</span>
                <span className="font-medium">{car.condition}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Body Type</span>
                <span className="font-medium">{car.bodyType}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Color</span>
                <span className="font-medium">{car.color}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Seats</span>
                <span className="font-medium">{car.seats}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Doors</span>
                <span className="font-medium">{car.doors}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </button>
          <button className="flex-1 bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Message
          </button>
          <button className="flex-1 border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 flex items-center justify-center">
            Place Order
          </button>
          {/* <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 flex items-center justify-center">
          Compare
        </button> */}
        </div>
        {/* Dealer Info */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">
            Kings Motor Company PVT. LTD
          </h4>
          <p className="text-gray-600 text-sm">
            Licensed Dealer • Verified Seller
          </p>
          <p className="text-gray-600 text-sm">Located in {car.location}</p>
        </div>
      </div>
    </>
  );
}
