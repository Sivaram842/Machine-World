import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <footer className="bg-black text-white w-full">

            {/* ================= LAYER 1 — LOGO ================= */}
            <div className="px-16 pt-20 pb-10">
                <div className="text-2xl tracking-[0.3em] font-semibold">
                    ANTI WORLD
                </div>
            </div>


            {/* ================= LAYER 2 — LINKS ================= */}
            <div className="px-16 pb-16">
                <div className="grid grid-cols-3 gap-32">

                    {/* COMPANY */}
                    <div>
                        <p className="text-sm tracking-widest mb-6">COMPANY</p>
                        <ul className="space-y-3 text-white/90">
                            <li>About Us</li>
                            <li>News</li>
                            <li>Jobs</li>
                            <li>Media</li>
                            <li>Legal</li>
                            <li>Case Studies</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* PRODUCTS */}
                    <div>
                        <p className="text-sm tracking-widest mb-6">PRODUCTS</p>
                        <ul className="space-y-3 text-white/90">
                            {/* <li>PRODUCTS</li> */}
                            <li>DAS</li>
                            <li>Realm</li>
                            <li>Book</li>
                            <li>SPATIAL OS</li>
                            <li>MINIMAL OS</li>

                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <p className="text-sm tracking-widest mb-6">SUPPORT</p>
                        <ul className="space-y-3 text-white/90">
                            <li>Help Center</li>
                            <li>System Requirements</li>
                            <li>Compatible Software</li>
                            <li>Find a Reseller</li>
                            <li>Setup Guide</li>
                            <li>Developers</li>
                            <li>ANTI WORLD Account Portal</li>
                        </ul>
                    </div>

                </div>
            </div>


            {/* ================= LAYER 3 — BUTTONS ================= */}
            <div className="px-16 pb-20">
                <div className="flex flex-col gap-6 max-w-sm">
                    <button
                        onClick={() => window.open("/login", "_blank")}
                        className="border border-white px-8 py-4 text-sm tracking-widest flex items-center justify-between hover:bg-white hover:text-black transition"
                    >
                        ANTI WORLD ACCOUNT LOGIN
                        <span>→</span>
                    </button>


                    {/* <button className="border border-white px-8 py-4 text-sm tracking-widest flex items-center justify-between hover:bg-white hover:text-black transition">
                        SUBSCRIBE TO NEWSLETTER
                        <span>→</span>
                    </button> */}
                </div>
            </div>


            {/* ================= LAYER 4 — CONTACT ================= */}
            <div className="px-16 pb-20">
                <p className="text-sm tracking-widest mb-10">CONTACT US</p>

                <div className="grid grid-cols-3 gap-32 text-white/90">

                    {/* <div className="space-y-1">
                        <p className="font-medium">VARJO HQ / FINLAND</p>
                        <p>Vuorikatu 20</p>
                        <p>00100 Helsinki</p>
                        <p>Finland</p>
                    </div>

                    <div className="space-y-1">
                        <p className="font-medium">VARJO USA</p>
                        <p>901 N Glebe Rd.</p>
                        <p>Ste. 500</p>
                        <p>Arlington, VA 22203</p>
                    </div>

                    <div className="space-y-1">
                        <p className="font-medium">VARJO GERMANY</p>
                        <p>Beta-Straße 10A</p>
                        <p>85774 Unterföhring</p>
                        <p>Munich, Germany</p>
                    </div> */}

                </div>
            </div>


            {/* ================= LAYER 5 — SOCIAL LINKS ================= */}
            <div className="px-16 pb-16 pt-8 border-t border-white/10">
                <div className="flex justify-between items-center text-sm text-white/80">

                    <div className="flex gap-20">
                        <span>INSTAGRAM</span>
                        <span>X</span>
                        <span>YOUTUBE</span>
                        <span>LINKEDIN</span>
                        <span>FACEBOOK</span>
                    </div>

                    <div>Cookie policy</div>
                </div>
            </div>

        </footer>
    );
}
