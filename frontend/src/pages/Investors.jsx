import { useState } from "react";
import NavbarStatic from "../components/NavbarStatic";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
      handleReset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
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

  return (
    <div>
      <NavbarStatic />
      <Header />
      <div className="w-full min-h-screen bg-white text-black flex flex-col items-center justify-start pb-16">

        {/* TOP SECTION */}
        <div className="w-full max-w-[1200px] px-6 text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            become an investor for<br />
            ANTI WORLD        </h1>

          <p className="text-lg md:text-xl max-w-[850px] mx-auto leading-8 text-black/90">

          </p>
        </div>

        {/* FORM SECTION */}
        <div className="bg-white rounded-2xl shadow-xl text-black w-full max-w-[1150px] p-10 md:p-14">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            enquiry form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="your name *"
                value={form.name}
                onChange={handleChange}
                className="border rounded-md p-3 w-full "
                required
              />

              <input
                type="text"
                name="contact"
                placeholder="your contact *"
                value={form.contact}
                onChange={handleChange}
                className="border rounded-md p-3 w-full "
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="your email *"
              value={form.email}
              onChange={handleChange}
              className="border rounded-md p-3 w-full "
              required
            />

            <input
              type="text"
              name="investment"
              placeholder="investment value *"
              value={form.investment}
              onChange={handleChange}
              className="border rounded-md p-3 w-full "
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="border rounded-md p-3 w-full cursor-pointer "
                required
              >
                <option value="">Select Country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>France</option>
                <option>Japan</option>
                <option>South Korea</option>
                <option>Singapore</option>
                <option>United Arab Emirates</option>
              </select>

              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="border rounded-md p-3 w-full cursor-pointer "
                required
              >
                <option value="">Select State</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>


                <option>Andaman and Nicobar Islands</option>
                <option>Chandigarh</option>
                <option>Dadra & Nagar Haveli and Daman & Diu</option>
                <option>Delhi</option>
                <option>Jammu & Kashmir</option>
                <option>Ladakh</option>
                <option>Lakshadweep</option>
                <option>Puducherry</option>

              </select>

              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="border rounded-md p-3 w-full cursor-pointer "
                required
              >
                <option value="">Select City</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bengaluru</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Kolkata</option>
                <option>Pune</option>
                <option>Ahmedabad</option>
                <option>Jaipur</option>
                <option>Surat</option>
                <option>Lucknow</option>
                <option>Kanpur</option>
                <option>Nagpur</option>
                <option>Indore</option>
                <option>Bhopal</option>
                <option>Patna</option>
                <option>Vadodara</option>
                <option>Ghaziabad</option>
                <option>Visakhapatnam</option>
                <option>Rajahmundry</option>
                <option>Vijayawada</option>
                <option>Guwahati</option>
                <option>Coimbatore</option>
                <option>Kochi</option>
                <option>Thane</option>
                <option>Noida</option>
                <option>Chandigarh</option>
                <option>Mysuru</option>
                <option>Varanasi</option>
                <option>Udaipur</option>
                <option>Agra</option>
                <option>Prayagraj</option>
                <option>Jodhpur</option>
                <option>Madurai</option>
                <option>Ranchi</option>
                <option>Dehradun</option>
                <option>Aurangabad</option>
                <option>Nashik</option>

              </select>
            </div>

            <textarea
              name="background"
              placeholder="tell me about your background"
              value={form.background}
              onChange={handleChange}
              rows={4}
              className="border rounded-md p-3 w-full "
            />

            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 border-2 border-black rounded-md text-black hover:bg-black hover:text-white"
              >
                reset
              </button>

              <button
                type="submit"
                className="px-8 py-2 bg-black text-white rounded-md hover:opacity-80"
              >
                submit
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
