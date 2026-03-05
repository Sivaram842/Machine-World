import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <footer className="bg-black text-white w-full">

            {/* ================= LAYER 1 — LOGO ================= */}
            <div className="px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
                <div className="text-xl sm:text-2xl tracking-[0.3em] font-semibold">
                    ANTI WORLD
                </div>
            </div>


            {/* ================= LAYER 2 — LINKS ================= */}
            <div className="px-4 sm:px-8 lg:px-16 pb-12 sm:pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20 lg:gap-32">

                    {/* COMPANY */}
                    <div>
                        <p className="text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">COMPANY</p>
                        <ul className="space-y-2 sm:space-y-3 text-white/90 text-sm">
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
                        <p className="text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">PRODUCTS</p>
                        <ul className="space-y-2 sm:space-y-3 text-white/90 text-sm">
                            <li>DAS</li>
                            <li>Realm</li>
                            <li>Book</li>
                            <li>SPATIAL OS</li>
                            <li>MINIMAL OS</li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <p className="text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">SUPPORT</p>
                        <ul className="space-y-2 sm:space-y-3 text-white/90 text-sm">
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
            <div className="px-4 sm:px-8 lg:px-16 pb-16 sm:pb-20">
                <div className="flex flex-col gap-6 max-w-sm">
                    <button
                        onClick={() => window.open("/login", "_blank")}
                        className="border border-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest flex items-center justify-between hover:bg-white hover:text-black transition w-full sm:w-auto"
                    >
                        ANTI WORLD ACCOUNT LOGIN
                        <span>→</span>
                    </button>
                </div>
            </div>


            {/* ================= LAYER 4 — CONTACT ================= */}
            <div className="px-4 sm:px-8 lg:px-16 pb-16 sm:pb-20">
                <p className="text-xs sm:text-sm tracking-widest mb-6 sm:mb-10">CONTACT US</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20 lg:gap-32 text-white/90">
                </div>
            </div>


            {/* ================= LAYER 5 — SOCIAL LINKS ================= */}
            <div className="px-4 sm:px-8 lg:px-16 pb-12 sm:pb-16 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs sm:text-sm text-white/80">

                    <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-20">
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