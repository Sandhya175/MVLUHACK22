import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
import { TrendingUp, Package, Recycle, AlertTriangle, Target } from "lucide-react";

export function Analytics() {
  const monthlyData = [
    { month: "Jan", collected: 2400, recycled: 2200, hazardous: 200 },
    { month: "Feb", collected: 2800, recycled: 2500, hazardous: 300 },
    { month: "Mar", collected: 3200, recycled: 2900, hazardous: 300 },
    { month: "Apr", collected: 2900, recycled: 2600, hazardous: 300 },
    { month: "May", collected: 3500, recycled: 3200, hazardous: 300 },
    { month: "Jun", collected: 3800, recycled: 3400, hazardous: 400 },
  ];

  const categoryData = [
    { name: "Computers & Laptops", value: 35, color: "#8884d8" },
    { name: "Mobile Devices", value: 25, color: "#82ca9d" },
    { name: "TVs & Monitors", value: 20, color: "#ffc658" },
    { name: "Appliances", value: 12, color: "#ff7300" },
    { name: "Other", value: 8, color: "#8dd1e1" },
  ];

  const regionData = [
    { region: "North District", items: 1200, weight: 850, centers: 12 },
    { region: "South District", items: 980, weight: 720, centers: 8 },
    { region: "East District", items: 1500, weight: 1100, centers: 15 },
    { region: "West District", items: 750, weight: 520, centers: 6 },
    { region: "Central District", items: 1100, weight: 800, centers: 10 },
  ];

  const trendData = [
    { date: "Week 1", prediction: 2800, actual: 2847 },
    { date: "Week 2", prediction: 2900, actual: 2756 },
    { date: "Week 3", prediction: 3100, actual: 3200 },
    { date: "Week 4", prediction: 3200, actual: 3150 },
    { date: "Week 5", prediction: 3400, actual: null },
    { date: "Week 6", prediction: 3600, actual: null },
  ];

  const kpiCards = [
    {
      title: "Collection Efficiency",
      value: "94.2%",
      change: "+2.1%",
      icon: Target,
      description: "On-time pickups vs scheduled"
    },
    {
      title: "Recycling Rate",
      value: "87.5%",
      change: "+1.8%",
      icon: Recycle,
      description: "Successfully recycled items"
    },
    {
      title: "Hazardous Materials",
      value: "8.3%",
      change: "-0.5%",
      icon: AlertTriangle,
      description: "Items requiring special handling"
    },
    {
      title: "Average Processing Time",
      value: "2.4 days",
      change: "-0.3 days",
      icon: Package,
      description: "From collection to processing"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor e-waste management trends and performance metrics
          </p>
        </div>
        <Select defaultValue="last-6-months">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-30-days">Last 30 Days</SelectItem>
            <SelectItem value="last-3-months">Last 3 Months</SelectItem>
            <SelectItem value="last-6-months">Last 6 Months</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">{kpi.change}</span>
                  <span className="text-muted-foreground">vs last period</span>
                </div>
                <p className="text-xs text-muted-foreground">{kpi.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="regions">Regions</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Collection Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="collected" 
                      stackId="1" 
                      stroke="#8884d8" 
                      fill="#8884d8" 
                      name="Collected (kg)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="recycled" 
                      stackId="2" 
                      stroke="#82ca9d" 
                      fill="#82ca9d" 
                      name="Recycled (kg)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processing Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="collected" fill="#8884d8" name="Collected" />
                    <Bar dataKey="recycled" fill="#82ca9d" name="Recycled" />
                    <Bar dataKey="hazardous" fill="#ffc658" name="Hazardous" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>E-Waste Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded" 
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{category.value}%</div>
                        <div className="text-xs text-muted-foreground">
                          ~{Math.round(category.value * 28.47)} kg
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="regions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regional Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionData.map((region, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{region.region}</h3>
                      <Badge variant="outline">{region.centers} centers</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Items Collected:</span>
                        <div className="font-medium">{region.items.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total Weight:</span>
                        <div className="font-medium">{region.weight} kg</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    name="Actual Collection (kg)"
                    connectNulls={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="prediction" 
                    stroke="#82ca9d" 
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    name="Predicted Collection (kg)"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>• Solid line shows actual collection data</p>
                <p>• Dashed line shows AI-powered predictions based on historical trends</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}