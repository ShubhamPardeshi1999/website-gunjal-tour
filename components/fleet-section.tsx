"use client";

import { useState } from "react";
import { Users, Settings, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal, type Car } from "./booking-modal";

const FLEET_CARS: Car[] = [
  {
    id: "1",
    name: "Toyota Innova Crysta",
    price: "₹2,500",
    seats: 7,
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Maruti Swift Dzire",
    price: "₹1,500",
    seats: 5,
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Mahindra XUV700",
    price: "₹3,000",
    seats: 7,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Hyundai Creta",
    price: "₹2,200",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    name: "Honda City",
    price: "₹2,000",
    seats: 5,
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    name: "Kia Seltos",
    price: "₹2,300",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1681285223389-9eb17e883827?auto=format&fit=crop&q=80&w=800",
  }
];

export function FleetSection() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose from our diverse selection of well-maintained vehicles to ensure a safe and comfortable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_CARS.map((car) => (
            <div
              key={car.id}
              className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-neutral-100">
                {/* Fallback to gray bg if image fails, but using standard img for now */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-neutral-900">{car.name}</h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Users size={16} className="text-emerald-600" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Settings size={16} className="text-emerald-600" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Fuel size={16} className="text-emerald-600" />
                    <span>AC</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-neutral-500">Starting from</span>
                    <p className="text-xl font-bold text-emerald-600">{car.price}<span className="text-sm font-normal text-neutral-500">/day</span></p>
                  </div>
                  <Button
                    className="bg-neutral-900 hover:bg-emerald-600 text-white transition-colors"
                    onClick={() => setSelectedCar(car)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        car={selectedCar}
        isOpen={!!selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </section>
  );
}
