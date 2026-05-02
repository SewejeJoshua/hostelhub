import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./components/hostelhub/Index";
import { Landing } from "./components/hostelhub/Landing";
import { StudentDashboard } from "./components/hostelhub/StudentDashboard";
import { Listings } from "./components/hostelhub/Listings";
import { PropertyDetails } from "./components/hostelhub/PropertyDetails";
import { AgentDashboard } from "./components/hostelhub/AgentDashboard";
import { AdminDashboard } from "./components/hostelhub/AdminDashboard";
import { PaymentFlow } from "./components/hostelhub/PaymentFlow";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/payment" element={<PaymentFlow />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
