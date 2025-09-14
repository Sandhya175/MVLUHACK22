import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Recycle, MapPin, Calendar, TrendingUp, Users, Package, AlertTriangle, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Dashboard() {
  const stats = [
    { title: "Total E-Waste Collected", value: "2,847", unit: "kg", icon: Package, trend: "+12%" },
    { title: "Active Users", value: "1,234", unit: "", icon: Users, trend: "+8%" },
    { title: "Collection Centers", value: "45", unit: "", icon: MapPin, trend: "+3%" },
    { title: "Pending Pickups", value: "23", unit: "", icon: Calendar, trend: "-5%" }
  ];

  const recentActivity = [
    { id: 1, user: "Sarah Johnson", item: "Laptop, Monitor", status: "collected", date: "2 hours ago" },
    { id: 2, user: "Mike Chen", item: "Smartphone, Tablet", status: "pending", date: "4 hours ago" },
    { id: 3, user: "Emily Davis", item: "TV, Gaming Console", status: "scheduled", date: "6 hours ago" },
    { id: 4, user: "Alex Kumar", item: "Desktop PC", status: "collected", date: "1 day ago" }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'collected': return 'default';
      case 'pending': return 'secondary';
      case 'scheduled': return 'outline';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'collected': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <AlertTriangle className="w-4 h-4" />;
      case 'scheduled': return <Calendar className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-6 py-12 sm:px-12 sm:py-16">
          <div className="max-w-xl">
            <h1 className="mb-4">E-Waste Monitoring System</h1>
            <p className="mb-6 opacity-90">
              Track, manage, and ensure safe disposal of electronic waste. 
              Join thousands of users making a positive environmental impact.
            </p>
            <div className="flex gap-3">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Register E-Waste
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Pickup
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1608653206809-e6a8044173b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwd2FzdGUlMjByZWN5Y2xpbmd8ZW58MXx8fHwxNTc3NTM2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Electronic waste recycling"
            className="h-full w-full object-cover opacity-80"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-muted-foreground">{stat.unit}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">{stat.trend}</span>
                <span className="text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(activity.status)}
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={getStatusBadgeVariant(activity.status)}>
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button className="justify-start h-auto p-4" variant="outline">
                <Recycle className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Register New E-Waste</div>
                  <div className="text-sm text-muted-foreground">Add electronic items for disposal</div>
                </div>
              </Button>
              <Button className="justify-start h-auto p-4" variant="outline">
                <Calendar className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Schedule Pickup</div>
                  <div className="text-sm text-muted-foreground">Book a collection appointment</div>
                </div>
              </Button>
              <Button className="justify-start h-auto p-4" variant="outline">
                <MapPin className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Find Collection Centers</div>
                  <div className="text-sm text-muted-foreground">Locate nearby drop-off points</div>
                </div>
              </Button>
              <Button className="justify-start h-auto p-4" variant="outline">
                <TrendingUp className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">View Analytics</div>
                  <div className="text-sm text-muted-foreground">Monitor waste management trends</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}