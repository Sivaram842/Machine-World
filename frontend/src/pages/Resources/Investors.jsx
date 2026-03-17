import { useState } from "react";
import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";

// 1. Data Mapping: Define which cities belong to which states
const locationData = {
  India: {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Rajahmundry"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur"],
    "Delhi": ["Delhi", "Noida", "Ghaziabad"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
    "Karnataka": ["Bengaluru", "Mysuru", "Hubli"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Prayagraj"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
    // Add other states and their cities here...
  },
};

const Investors = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    investment: "",
    country: "",
    state: "",
    city: "",
    background: "",
  });
  const [loading, setLoading] = useState(false);

  // 2. Logic to handle cascading resets
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      // If country changes, reset state and city
      setForm({ ...form, country: value, state: "", city: "" });
    } else if (name === "state") {
      // If state changes, reset city
      setForm({ ...form, state: value, city: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/investors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      alert(data.message || "Form submitted successfully!");
      handleReset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      contact: "",
      email: "",
      investment: "",
      country: "",
      state: "",
      city: "",
      background: "",
    });
  };

  // Helper variables for cleaner JSX
  const availableStates = form.country ? Object.keys(locationData[form.country] || {}) : [];
  const availableCities = form.state ? locationData[form.country][form.state] || [] : [];

  return (
    <div>
      <Navbar />

      <div className="w-full bg-white px-6 py-20 flex justify-center">
        <div className="w-full max-w-[1100px]">

          {/* TOP INFO */}
          <div className="mb-16">

            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Get In Touch
            </h1>

            <p className="text-gray-600 max-w-[600px]">
              We'd love to hear from you. Whether you want to invest,
              collaborate, or learn more about ANTIWORLD,
              our team is ready to connect.
            </p>

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-2 gap-12 mt-10">

              <div>
                <h3 className="font-semibold mb-2">Our Address</h3>
                <p className="text-gray-600">
                  Antiworld,Meeras Marvel,<br />
                  Puppalaguda,Hyderabad,<br />
                  Telangana 500089<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact Info</h3>
                <p className="text-gray-600">
                  +91 8184809777<br />
                  sashank@antiworld.in
                </p>
              </div>

            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="w-full h-[500px] rounded-xl overflow-hidden mb-20">
            <div className="w-full h-[500px] rounded-xl overflow-hidden mb-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1939791973023!2d78.36245007522116!3d17.402476102370127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95007a565ec3%3A0x7b2be11210188a86!2sAntiworld!5e0!3m2!1sen!2sin!4v1773742315191!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* FORM TITLE */}
          <h2 className="text-4xl md:text-5xl mb-14" >
            Become an Investor for ANTIWORLD
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-500">Your Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition"
                required
              />
            </div>

            {/* CONTACT */}
            <div>
              <label className="text-sm text-gray-500">Contact Number *</label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-500">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition"
                required
              />
            </div>

            {/* INVESTMENT */}
            <div>
              <label className="text-sm text-gray-500">Investment Value *</label>
              <input
                type="text"
                name="investment"
                value={form.investment}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition"
                required
              />
            </div>

            {/* COUNTRY */}
            <div>
              <label className="text-sm text-gray-500">Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 text-lg bg-transparent focus:outline-none focus:border-black"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
              </select>
            </div>

            {/* STATE */}
            <div>
              <label className="text-sm text-gray-500">State</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                disabled={!form.country}
                className="w-full border-b border-gray-300 py-3 text-lg bg-transparent focus:outline-none focus:border-black"
                required
              >
                <option value="">Select State</option>
                {availableStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* CITY */}
            <div>
              <label className="text-sm text-gray-500">City</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                disabled={!form.state}
                className="w-full border-b border-gray-300 py-3 text-lg bg-transparent focus:outline-none focus:border-black"
                required
              >
                <option value="">Select City</option>
                {availableCities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* BACKGROUND */}
            <div>
              <label className="text-sm text-gray-500">Your Background</label>
              <textarea
                name="background"
                rows="4"
                value={form.background}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black resize-none"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-6 pt-6">

              <button
                type="button"
                onClick={handleReset}
                className="text-gray-600 hover:text-black transition"
              >
                Reset
              </button>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:opacity-80 transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </div>

          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Investors;