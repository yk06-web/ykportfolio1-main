import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceOfInterest: formData.get("serviceOfInterest"),
      budgetRange: formData.get("budgetRange"),
      projectDetails: formData.get("projectDetails"),
      gdprConsent: formData.get("gdprConsent") === "on",
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry.");
      }

      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      setError("There was a problem submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6 text-left">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-100/10 border border-red-500 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-white/90">First Name *</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-white/90">Last Name *</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white/90">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-white/90">Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="serviceOfInterest" className="block text-sm font-medium text-white/90">Service of Interest *</label>
          <select
            id="serviceOfInterest"
            name="serviceOfInterest"
            required
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
          >
            <option value="">Select a service...</option>
            <option value="New Website">New Website</option>
            <option value="Redesign">Redesign</option>
            <option value="Automation">Automation</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="budgetRange" className="block text-sm font-medium text-white/90">Budget Range *</label>
          <select
            id="budgetRange"
            name="budgetRange"
            required
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
          >
            <option value="">Select a budget...</option>
            <option value="<$1k">Under $1k</option>
            <option value="$1k-$5k">$1k - $5k</option>
            <option value="$5k+">$5k+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="projectDetails" className="block text-sm font-medium text-white/90">Project Details *</label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={4}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A87C] transition-colors resize-none"
          placeholder="Tell us about what you're trying to build..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="gdprConsent"
          name="gdprConsent"
          type="checkbox"
          required
          className="mt-1 shrink-0 w-4 h-4 accent-[#C9A87C]"
        />
        <label htmlFor="gdprConsent" className="text-sm text-white/70">
          I agree to be contacted regarding my project and understand my information will be handled securely.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[60px] inline-flex items-center justify-center rounded-full px-12 text-[17px] font-semibold tracking-wide transition-all hover:scale-[1.02] shadow-xl disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
        style={{ 
          backgroundColor: "#C9A87C", 
          color: "#111111",
          boxShadow: "0 10px 25px -5px rgba(201, 168, 124, 0.15)"
        }}
      >
        {isSubmitting ? "Submitting..." : "Start a Project"}
      </button>
    </form>
  );
}
