import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { EWasteRegistration } from "./components/EWasteRegistration";
import { CollectionCenters } from "./components/CollectionCenters";
import { PickupScheduler } from "./components/PickupScheduler";
import { Analytics } from "./components/Analytics";
import { LandingPage } from "./components/LandingPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [showApp, setShowApp] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleGetStarted = () => {
    setShowApp(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "register":
        return <EWasteRegistration />;
      case "centers":
        return <CollectionCenters />;
      case "schedule":
        return <PickupScheduler />;
      case "analytics":
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  if (!showApp) {
    return (
      <>
        <LandingPage onGetStarted={handleGetStarted} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="p-6">
        {renderContent()}
      </main>

      <Toaster />
    </div>
  );
}