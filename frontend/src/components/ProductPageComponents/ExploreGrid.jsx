export default function ExploreGrid() {
    return (
        <section className="w-full bg-white px-16 py-24">
            <div className="
        grid grid-cols-1 md:grid-cols-4
        grid-rows-[minmax(360px,1fr)_minmax(360px,1fr)]
        gap-8
      ">

                {/* BLOCK 1 – TALL IMAGE */}
                <div
                    className="md:row-span-2 min-h-[740px]
          relative bg-black text-white p-10 flex flex-col justify-end bg-cover bg-center"
                    style={{ backgroundImage: "url(/explore/computers.jpg)" }}
                >
                    <span className="text-xs tracking-[0.25em] uppercase mb-4">
                        Computers
                    </span>
                    <h2 className="text-3xl font-semibold leading-tight mb-4">
                        VARJO-READY<br />COMPUTERS
                    </h2>
                    <p className="text-sm text-gray-200 max-w-sm">
                        Varjo headsets are tethered devices, compatible with a broad range of
                        Windows 10 and 11 computers. Browse our recommended models here. →
                    </p>
                </div>

                {/* BLOCK 2 */}
                <div className="md:row-span-2 min-h-[740px] bg-gray-100 p-10 flex flex-col justify-end">
                    <span className="text-xs tracking-[0.25em] uppercase mb-4">
                        System
                    </span>
                    <h2 className="text-2xl font-semibold leading-tight mb-4">
                        SYSTEM<br />REQUIREMENTS
                    </h2>
                    <p className="text-sm text-gray-600">
                        Find the minimum requirements for running the XR-4 Series. →
                    </p>
                </div>

                {/* BLOCK 3 */}
                <div
                    className="min-h-[360px] relative bg-cover bg-center text-white p-10 flex flex-col justify-end"
                    style={{ backgroundImage: "url(/explore/accessories.jpg)" }}
                >
                    <span className="text-xs tracking-[0.25em] uppercase mb-4">
                        Accessories
                    </span>
                    <h2 className="text-2xl font-semibold leading-tight mb-4">
                        COMPLETE THE<br />EXPERIENCE
                    </h2>
                    <p className="text-sm text-gray-200">
                        Extended cables, controllers and more. →
                    </p>
                </div>

                {/* BLOCK 4 */}
                <div className="min-h-[360px] bg-[#d9dcef] p-10 flex flex-col justify-end">
                    <span className="text-xs tracking-[0.25em] uppercase mb-4">
                        Varjo Alpha
                    </span>
                    <h2 className="text-2xl font-semibold leading-tight mb-4">
                        BRING YOUR XR<br />VISION TO LIFE
                    </h2>
                    <p className="text-sm text-gray-700">
                        High-performance XR systems demand precision. →
                    </p>
                </div>

                {/* BLOCK 5 */}
                <div className="min-h-[360px] bg-gray-100 p-10 flex flex-col justify-end">
                    <span className="text-xs tracking-[0.25em] uppercase mb-4">
                        Software
                    </span>
                    <h2 className="text-2xl font-semibold leading-tight mb-4">
                        VARJO-READY<br />SOFTWARE
                    </h2>
                    <p className="text-sm text-gray-600">
                        See all Varjo-ready software here. →
                    </p>
                </div>

                {/* BLOCK 6 */}
                <div className="min-h-[360px] bg-gray-100 p-10 flex flex-col justify-end">
                    <span className="text-xs tracking-[0.25em] uppercase mb-4">
                        Varjo Base
                    </span>
                    <h2 className="text-2xl font-semibold leading-tight mb-4">
                        TAKE YOUR HEADSET<br />
                        EXPERIENCE TO NEW<br />
                        HEIGHTS
                    </h2>
                    <p className="text-sm text-gray-600">
                        Unlock the full XR experience. →
                    </p>
                </div>

            </div>
        </section>
    );
}
