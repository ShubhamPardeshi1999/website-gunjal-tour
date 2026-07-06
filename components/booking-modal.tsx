"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Car = {
  id: string;
  name: string;
  price: string;
  seats: number;
  transmission: string;
  image: string;
};

type BookingModalProps = {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
};

export function BookingModal({ car, isOpen, onClose }: BookingModalProps) {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!car) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border-neutral-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-neutral-900">
            Book {car.name}
          </DialogTitle>
          <DialogDescription className="text-lg font-medium text-emerald-600">
            {car.price} / day
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Booking Confirmed!</h3>
            <p className="text-neutral-600 mt-2">
              We'll contact you shortly with the details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="border-neutral-300 focus-visible:ring-emerald-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  className="border-neutral-300 focus-visible:ring-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Pickup Date</Label>
                  <Popover>
                    <PopoverTrigger
                      className={buttonVariants({ variant: "outline", className: `w-full justify-start text-left font-normal border-neutral-300 ${!pickupDate ? "text-muted-foreground" : ""}` })}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={setPickupDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label>Drop-off Date</Label>
                  <Popover>
                    <PopoverTrigger
                      className={buttonVariants({ variant: "outline", className: `w-full justify-start text-left font-normal border-neutral-300 ${!dropoffDate ? "text-muted-foreground" : ""}` })}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dropoffDate ? format(dropoffDate, "PPP") : <span>Select date</span>}
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dropoffDate}
                        onSelect={setDropoffDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Pickup Location</Label>
                <Select required>
                  <SelectTrigger className="border-neutral-300 focus:ring-emerald-600">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airport">Airport Terminal</SelectItem>
                    <SelectItem value="downtown">Downtown Office</SelectItem>
                    <SelectItem value="railway">Railway Station</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-6 text-lg"
            >
              {isSubmitting ? "Processing..." : "Confirm Booking"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
