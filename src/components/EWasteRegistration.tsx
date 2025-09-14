import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Plus, X, Upload, CheckCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface EWasteItem {
  id: string;
  category: string;
  brand: string;
  model: string;
  condition: string;
  estimatedWeight: string;
  hasHazardousMaterials: boolean;
}

export function EWasteRegistration() {
  const [items, setItems] = useState<EWasteItem[]>([]);
  const [currentItem, setCurrentItem] = useState<Partial<EWasteItem>>({});
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredPickupDate: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    "Computers & Laptops",
    "Mobile Devices",
    "TVs & Monitors",
    "Gaming Consoles",
    "Home Appliances",
    "Audio Equipment",
    "Cameras",
    "Other Electronics"
  ];

  const conditions = ["Working", "Partially Working", "Not Working", "Unknown"];

  const addItem = () => {
    if (!currentItem.category || !currentItem.brand) {
      toast("Please fill in the category and brand fields");
      return;
    }

    const newItem: EWasteItem = {
      id: Date.now().toString(),
      category: currentItem.category || "",
      brand: currentItem.brand || "",
      model: currentItem.model || "",
      condition: currentItem.condition || "Unknown",
      estimatedWeight: currentItem.estimatedWeight || "",
      hasHazardousMaterials: currentItem.hasHazardousMaterials || false
    };

    setItems([...items, newItem]);
    setCurrentItem({});
    toast("Item added successfully!");
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast("Item removed");
  };

  const handleSubmit = () => {
    if (items.length === 0) {
      toast("Please add at least one e-waste item");
      return;
    }

    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone || !contactInfo.address) {
      toast("Please fill in all contact information");
      return;
    }

    // Simulate API submission
    setIsSubmitted(true);
    toast("E-waste registration submitted successfully! You will receive a confirmation email shortly.");
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h2>Registration Successful!</h2>
              <p className="text-muted-foreground">
                Your e-waste registration has been submitted. Registration ID: <strong>EW-{Date.now().toString().slice(-6)}</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                You will receive a confirmation email with pickup scheduling details within 24 hours.
              </p>
              <Button onClick={() => {setIsSubmitted(false); setItems([]); setContactInfo({name: "", email: "", phone: "", address: "", preferredPickupDate: "", notes: ""});}}>
                Register More Items
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1>Register E-Waste</h1>
        <p className="text-muted-foreground">
          Add your electronic waste items for safe disposal and recycling
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Add Items Section */}
        <Card>
          <CardHeader>
            <CardTitle>Add E-Waste Items</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div>
                <Label>Category *</Label>
                <Select value={currentItem.category} onValueChange={(value) => setCurrentItem({...currentItem, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Brand *</Label>
                  <Input
                    value={currentItem.brand || ""}
                    onChange={(e) => setCurrentItem({...currentItem, brand: e.target.value})}
                    placeholder="e.g. Apple, Samsung"
                  />
                </div>
                <div>
                  <Label>Model</Label>
                  <Input
                    value={currentItem.model || ""}
                    onChange={(e) => setCurrentItem({...currentItem, model: e.target.value})}
                    placeholder="e.g. iPhone 12, Galaxy S21"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Condition</Label>
                  <Select value={currentItem.condition} onValueChange={(value) => setCurrentItem({...currentItem, condition: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Estimated Weight (kg)</Label>
                  <Input
                    type="number"
                    value={currentItem.estimatedWeight || ""}
                    onChange={(e) => setCurrentItem({...currentItem, estimatedWeight: e.target.value})}
                    placeholder="0.5"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hazardous"
                  checked={currentItem.hasHazardousMaterials || false}
                  onCheckedChange={(checked) => setCurrentItem({...currentItem, hasHazardousMaterials: checked as boolean})}
                />
                <Label htmlFor="hazardous" className="text-sm">
                  Contains hazardous materials (batteries, mercury, etc.)
                </Label>
              </div>
            </div>

            <Button onClick={addItem} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Full Name *</Label>
                <Input
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label>Email *</Label>
                <Input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <Label>Phone Number *</Label>
              <Input
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                placeholder="+91 919191 91919"
              />
            </div>

            <div>
              <Label>Pickup Address *</Label>
              <Textarea
                value={contactInfo.address}
                onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                placeholder="123 Main St, City, State, ZIP"
                rows={3}
              />
            </div>

            <div>
              <Label>Preferred Pickup Date</Label>
              <Input
                type="date"
                value={contactInfo.preferredPickupDate}
                onChange={(e) => setContactInfo({...contactInfo, preferredPickupDate: e.target.value})}
              />
            </div>

            <div>
              <Label>Additional Notes</Label>
              <Textarea
                value={contactInfo.notes}
                onChange={(e) => setContactInfo({...contactInfo, notes: e.target.value})}
                placeholder="Special instructions for pickup..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Items List */}
      {items.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Registered Items ({items.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline">{item.category}</Badge>
                      {item.hasHazardousMaterials && (
                        <Badge variant="destructive" className="text-xs">Hazardous</Badge>
                      )}
                    </div>
                    <p className="font-medium">{item.brand} {item.model}</p>
                    <p className="text-sm text-muted-foreground">
                      Condition: {item.condition} • Weight: {item.estimatedWeight || "N/A"} kg
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button size="lg" onClick={handleSubmit} disabled={items.length === 0}>
          Submit Registration
        </Button>
      </div>
    </div>
  );
}