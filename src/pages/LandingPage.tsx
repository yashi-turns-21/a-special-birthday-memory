import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import CollagePlaceholder from "@/components/CollagePlaceholder";
import { Heart } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container bg-romantic-gradient flex items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-rose-light/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold-light/20 rounded-full blur-2xl" />
        </div>

        {/* Collage container */}
        <div className="relative w-full h-screen">
          <CollagePlaceholder />

          {/* Center button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => navigate("/birthday-message")}
              className="btn-romantic flex items-center gap-3 text-xl md:text-2xl 
                         px-10 py-5 md:px-14 md:py-6 animate-float
                         bg-gradient-to-r from-rose to-rose-dark"
            >
              <span className="font-handwritten text-2xl md:text-3xl">For You</span>
              <Heart className="w-6 h-6 md:w-7 md:h-7 fill-current animate-heartbeat" />
            </button>
          </div>
        </div>

        {/* Floating hearts decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose/20 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                width: `${20 + (i % 3) * 10}px`,
                height: `${20 + (i % 3) * 10}px`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default LandingPage;
