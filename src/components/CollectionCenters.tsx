import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Clock, Star, Search, Navigation } from "lucide-react";

interface CollectionCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  distance: string;
  acceptedItems: string[];
  specialServices: string[];
  coordinates: { lat: number; lng: number };
}

export function CollectionCenters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCenter, setSelectedCenter] = useState<CollectionCenter | null>(null);

  const collectionCenters: CollectionCenter[] = [
    {
      id: "1",
      name: "GreenTech Recycling Center",
      address: "123, Bandra, Mumbai, India",
      phone: "+91 919191 91919",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      rating: 4.8,
      distance: "0.8 miles",
      acceptedItems: ["Computers", "Mobile Devices", "TVs", "Appliances"],
      specialServices: ["Data Destruction", "Pickup Service", "Corporate Recycling"],
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: "2",
      name: "EcoWaste Solutions",
      address: "123, Bandra, Mumbai, India",
      phone: "+91 919191 91919",
      hours: "Mon-Sat: 7AM-7PM, Sun: 10AM-3PM",
      rating: 4.6,
      distance: "1.2 miles",
      acceptedItems: ["All Electronics", "Batteries", "Cables", "Gaming Consoles"],
      specialServices: ["Same-day Pickup", "Bulk Collection", "Certification"],
      coordinates: { lat: 34.0622, lng: -118.2537 }
    },
    {
      id: "3",
      name: "Digital Disposal Hub",
      address: "123, Bandra, Mumbai, India",
      phone: "+91 919191 91919",
      hours: "Mon-Fri: 9AM-5PM, Sat: 10AM-2PM",
      rating: 4.4,
      distance: "2.1 miles",
      acceptedItems: ["Computers", "Servers", "Network Equipment", "Printers"],
      specialServices: ["Secure Data Wiping", "Asset Recovery", "Donation Program"],
      coordinates: { lat: 34.0722, lng: -118.2637 }
    },
    {
      id: "4",
      name: "Green Planet E-Waste",
      address: "123, Bandra, Mumbai, India",
      phone: "+91 919191 91919",
      hours: "Tue-Sat: 8AM-6PM, Sun: 12PM-4PM",
      rating: 4.7,
      distance: "2.8 miles",
      acceptedItems: ["Mobile Devices", "Tablets", "Wearables", "Smart Home"],
      specialServices: ["Mobile Collection Unit", "Educational Programs", "Rewards Program"],
      coordinates: { lat: 34.0822, lng: -118.2737 }
    }
  ];

  const filteredCenters = collectionCenters.filter(center => 
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.acceptedItems.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1>Collection Centers</h1>
        <p className="text-muted-foreground">
          Find authorized e-waste collection centers near you
        </p>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, location, or accepted items..."
                className="pl-10"
              />
            </div>
            <Button>
              <Navigation className="w-4 h-4 mr-2" />
              Use My Location
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Centers List */}
        <div className="space-y-4">
          <h2>Nearby Centers ({filteredCenters.length})</h2>
          {filteredCenters.map((center) => (
            <Card key={center.id} className={`cursor-pointer transition-all hover:shadow-md ${selectedCenter?.id === center.id ? 'ring-2 ring-primary' : ''}`} onClick={() => setSelectedCenter(center)}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{center.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {renderStars(center.rating)}
                        <span className="text-sm text-muted-foreground ml-1">
                          {center.rating} • {center.distance}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Open
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{center.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {center.acceptedItems.slice(0, 3).map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                    {center.acceptedItems.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{center.acceptedItems.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      Get Directions
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Schedule Pickup
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map/Details Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Map View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive map will be displayed here</p>
                  <p className="text-xs text-muted-foreground">
                    Shows collection centers, your location, and optimal routes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {selectedCenter && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedCenter.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Accepted Items</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedCenter.acceptedItems.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Special Services</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedCenter.specialServices.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Button className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call {selectedCenter.phone}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}