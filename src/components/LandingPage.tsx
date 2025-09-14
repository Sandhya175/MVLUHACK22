import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Recycle, 
  Shield, 
  MapPin, 
  Calendar, 
  BarChart3, 
  Users, 
  Leaf, 
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Target,
  Package
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Recycle,
      title: "Easy Registration",
      description: "Register your electronic waste items quickly and securely for proper disposal"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling", 
      description: "Book convenient pickup times that work with your schedule"
    },
    {
      icon: MapPin,
      title: "Find Collection Centers",
      description: "Locate authorized drop-off points near your location"
    },
    {
      icon: BarChart3,
      title: "Track Impact",
      description: "Monitor your environmental impact and recycling contributions"
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "All e-waste is handled by certified facilities with data destruction"
    },
    {
      icon: Leaf,
      title: "Environmental Benefits",
      description: "Reduce landfill waste and support sustainable recycling practices"
    }
  ];

  const stats = [
    { number: "2,847+", label: "kg E-Waste Collected", icon: Package },
    { number: "1,234+", label: "Active Users", icon: Users },
    { number: "45+", label: "Collection Centers", icon: MapPin },
    { number: "94.2%", label: "Recycling Rate", icon: Target }
  ];

  const steps = [
    {
      step: "1",
      title: "Register Your E-Waste",
      description: "Add details about your electronic items including type, condition, and estimated weight"
    },
    {
      step: "2", 
      title: "Schedule Pickup",
      description: "Choose a convenient time slot for our certified collection team to visit"
    },
    {
      step: "3",
      title: "Safe Processing",
      description: "Items are transported to authorized facilities for proper recycling and disposal"
    },
    {
      step: "4",
      title: "Track & Monitor",
      description: "Receive updates on your contribution and environmental impact"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Recycle className="w-8 h-8 text-green-600" />
            <span className="font-bold text-xl">E-Waste Monitor</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
            <Button onClick={onGetStarted}>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  🌱 Sustainable Technology
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Transform E-Waste into 
                  <span className="text-green-600"> Environmental Impact</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Join thousands of users making a positive environmental impact through responsible 
                  electronic waste management. Track, schedule, and recycle with ease.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={onGetStarted} className="bg-green-600 hover:bg-green-700">
                  Start Managing E-Waste
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1756802138007-13cdc180cc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGVudmlyb25tZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc3NzYxODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Clean environment technology"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">2,847 kg recycled this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Complete E-Waste Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to responsibly manage electronic waste from registration to recycling
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to make a positive environmental impact
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-green-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Make a Real Environmental Difference
              </h2>
              <p className="text-xl opacity-90">
                Every electronic device you recycle through our platform helps reduce toxic waste in landfills 
                and recovers valuable materials for new products.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Prevent toxic materials from entering landfills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Recover precious metals and rare earth elements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Support circular economy initiatives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Reduce carbon footprint from manufacturing</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" onClick={onGetStarted}>
                Join the Movement
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eSUyMGdyZWVufGVufDF8fHx8MTc1Nzc3NjE5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Recycling sustainability"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Start Managing Your E-Waste?
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of environmentally conscious users and make a positive impact today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={onGetStarted}>
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Recycle className="w-6 h-6 text-green-600" />
                <span className="font-bold">E-Waste Monitor</span>
              </div>
              <p className="text-muted-foreground">
                Making electronic waste management accessible, transparent, and environmentally responsible.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Contact Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@ewastemonitor.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 919191 91919</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Recycling Guidelines</div>
                <div>Help Center</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 E-Waste Monitor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}