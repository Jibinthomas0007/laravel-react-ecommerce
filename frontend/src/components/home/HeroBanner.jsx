import { useEffect, useState } from "react";
import BannerCard, { Card } from "../animations/BannerCard";
import bannersData from "@data/banners";
import Button from "@components/common/Button";

export default function HeroBanner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    try {
      setBanners(bannersData);
    } catch (error) {
      console.error("Failed to load banners:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-[#f8f5f0] flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading banners...</p>
      </div>
    );
  }

  if (!banners.length) {
    return (
      <div className="h-screen bg-[#f8f5f0] flex items-center justify-center">
        <p className="text-lg text-gray-500">No banners available</p>
      </div>
    );
  }

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#faf7f2] to-[#f1ece5] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">

        {/* Left Content */}
        <div className="max-w-xl z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#9c8a76] mb-4 sm:mb-5 font-medium">
            New Arrival
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-[#1a1a1a] mb-6">
            Timeless Elegance.
            <br />
            <span className="text-[#9c8a76] lg:text-[#1a1a1a]">Made For Modern Women.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 mb-8 sm:mb-10 max-w-lg">
            Discover graceful silhouettes, premium fabrics, and styles
            designed to elevate every moment.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-5">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Shop Now
            </Button>
            <span className="text-sm text-gray-500">
              Free shipping on first order
            </span>
          </div>
        </div>

        {/* Right Banner - Added extra responsive padding offsets to handle card-skew overflows safely */}
        <div className="w-full flex-1 max-w-[450px] sm:max-w-[500px] lg:max-w-none px-4 sm:px-8 lg:pr-12">
          <BannerCard
            cardDistance={window?.innerWidth < 640 ? 25 : 45} 
            verticalDistance={window?.innerWidth < 640 ? 25 : 45}
            delay={5000}
            pauseOnHover={false}
          >
            {banners.map((item) => (
              <Card
                key={item.id}
                customClass="overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:shadow-[0_25px_60px_rgba(0,0,0,0.15)] group rounded-2xl sm:rounded-3xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">{item.subtitle}</p>

                  <Button
                    size="sm"
                    variant="secondary"
                    className="mt-3 sm:mt-4 text-xs sm:text-sm"
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </BannerCard>
        </div>
      </div>
    </section>
  );
}