import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, Package, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface PickupSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  capacity: number;
  bookedSlots: number;
}

interface ScheduledPickup {
  id: string;
  date: string;
  time: string;
  address: string;
  items: string[];
  status: 'scheduled' | 'confirmed' | 'in-progress' | 'completed';
  estimatedWeight: string;
}

export function PickupScheduler() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<PickupSlot | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const pickupSlots: PickupSlot[] = [
    { id: "1", date: "2025-01-15", time: "9:00 AM - 11:00 AM", available: true, capacity: 5, bookedSlots: 2 },
    { id: "2", date: "2025-01-15", time: "11:00 AM - 1:00 PM", available: true, capacity: 5, bookedSlots: 4 },
    { id: "3", date: "2025-01-15", time: "2:00 PM - 4:00 PM", available: false, capacity: 5, bookedSlots: 5 },
    { id: "4", date: "2025-01-15", time: "4:00 PM - 6:00 PM", available: true, capacity: 5, bookedSlots: 1 },
    { id: "5", date: "2025-01-16", time: "9:00 AM - 11:00 AM", available: true, capacity: 5, bookedSlots: 0 },
    { id: "6", date: "2025-01-16", time: "11:00 AM - 1:00 PM", available: true, capacity: 5, bookedSlots: 3 },
    { id: "7", date: "2025-01-16", time: "2:00 PM - 4:00 PM", available: true, capacity: 5, bookedSlots: 2 },
  ];

  const scheduledPickups: ScheduledPickup[] = [
    {
      id: "1",
      date: "2025-01-14",
      time: "10:00 AM - 12:00 PM",
      address: "123, Bandra, Mumbai, India",
      items: ["Laptop", "Monitor", "Keyboard"],
      status: "confirmed",
      estimatedWeight: "8.5 kg"
    },
    {
      id: "2",
      date: "2025-01-12",
      time: "2:00 PM - 4:00 PM",
      address: "123, Bandra, Mumbai, India",
      items: ["Smartphone", "Tablet", "Chargers"],
      status: "completed",
      estimatedWeight: "2.1 kg"
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'scheduled': return 'secondary';
      case 'confirmed': return 'default';
      case 'in-progress': return 'outline';
      case 'completed': return 'outline';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'confirmed': return <Calendar className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const handleSlotSelection = (slot: PickupSlot) => {
    if (!slot.available) return;
    setSelectedSlot(slot);
  };

  const confirmPickup = () => {
    if (!selectedSlot) return;
    setShowConfirmation(true);
    toast("Pickup scheduled successfully! You will receive a confirmation email.");
  };

  const availableDates = [...new Set(pickupSlots.map(slot => slot.date))];

  if (showConfirmation) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h2>Pickup Scheduled!</h2>
              <p className="text-muted-foreground">
                Your e-waste pickup has been confirmed for:
              </p>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">{formatDate(selectedSlot!.date)}</p>
                <p className="text-sm text-muted-foreground">{selectedSlot!.time}</p>
                <p className="text-sm text-muted-foreground">Booking ID: PU-{Date.now().toString().slice(-6)}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Our collection team will arrive during the scheduled time window. 
                You will receive SMS and email reminders 24 hours before pickup.
              </p>
              <Button onClick={() => {setShowConfirmation(false); setSelectedSlot(null);}}>
                Schedule Another Pickup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1>Schedule Pickup</h1>
        <p className="text-muted-foreground">
          Book a convenient time for e-waste collection from your location
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Date Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {availableDates.map((date) => (
                <Button
                  key={date}
                  variant={selectedDate === date ? "default" : "outline"}
                  className="justify-start p-4 h-auto"
                  onClick={() => setSelectedDate(date)}
                >
                  <Calendar className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">{formatDate(date)}</div>
                    <div className="text-sm text-muted-foreground">
                      {pickupSlots.filter(slot => slot.date === date && slot.available).length} slots available
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Slots */}
        <Card>
          <CardHeader>
            <CardTitle>Available Time Slots</CardTitle>
          </CardHeader>
          <CardContent>
            {!selectedDate ? (
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p>Please select a date to view available time slots</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pickupSlots
                  .filter(slot => slot.date === selectedDate)
                  .map((slot) => (
                    <div
                      key={slot.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        !slot.available ? 'opacity-50 cursor-not-allowed' : 
                        selectedSlot?.id === slot.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                      }`}
                      onClick={() => handleSlotSelection(slot)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{slot.time}</p>
                            <p className="text-sm text-muted-foreground">
                              {slot.capacity - slot.bookedSlots} of {slot.capacity} slots available
                            </p>
                          </div>
                        </div>
                        <Badge variant={slot.available ? "outline" : "secondary"}>
                          {slot.available ? "Available" : "Full"}
                        </Badge>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Selected Slot Confirmation */}
      {selectedSlot && (
        <Card>
          <CardHeader>
            <CardTitle>Confirm Pickup Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{formatDate(selectedSlot.date)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{selectedSlot.time}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">What to expect:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Our certified collection team will arrive during the scheduled window</li>
                <li>• All items will be properly documented and categorized</li>
                <li>• You'll receive a receipt with tracking information</li>
                <li>• Items are processed at authorized recycling facilities</li>
              </ul>
            </div>

            <Button onClick={confirmPickup} size="lg" className="w-full">
              Confirm Pickup
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Existing Pickups */}
      {scheduledPickups.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Scheduled Pickups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledPickups.map((pickup) => (
                <div key={pickup.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(pickup.status)}
                      <Badge variant={getStatusVariant(pickup.status)}>
                        {pickup.status}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(pickup.date)}
                    </span>
                  </div>
                  
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{pickup.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="truncate">{pickup.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      <span>{pickup.estimatedWeight}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      Items: {pickup.items.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}