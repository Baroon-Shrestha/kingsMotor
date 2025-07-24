import { useState } from "react";
import {
  Heart,
  Share2,
  Phone,
  MessageCircle,
  Car,
  Fuel,
  Calendar,
  Gauge,
  X,
  MapPin,
  Eye,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CarsCard({ car, onOrderClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + car.images.length) % car.images.length
    );
  };

  const formatPrice = (price) => {
    return `NPR ${(price / 100000).toFixed(1)}L`;
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case "Excellent":
        return "bg-green-100 text-green-800";
      case "Like New":
        return "bg-blue-100 text-blue-800";
      case "Good":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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

  return (
    <>
      <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Image Section with Overlay */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={car.image}
            alt={`${car.name} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${getConditionColor(
                car.condition
              )}`}
            >
              {getConditionIcon(car.condition)}
              {car.condition}
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-white text-sm">
              <MapPin className="w-4 h-4" />
              <span>{car.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
              {car.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {formatPrice(car.price)}
              </p>
              <span className="text-sm text-gray-500">{car.year} Model</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Fuel className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">
                {car.fuelType}
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Gauge className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">
                {car.kmsRan.toLocaleString()} km
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Car className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">
                {car.transmission}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link to={`/cars/${car.id}`} className="flex-1">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </Link>

            <button
              onClick={() => onOrderClick?.(car)}
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-4 h-4" />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
