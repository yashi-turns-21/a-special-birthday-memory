import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Heart, ImageIcon } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container relative flex items-center justify-center">
        {/* Full-screen collage background placeholder */}
        <div className="absolute inset-0 collage-bg-placeholder">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center opacity-40">
              <ImageIcon className="w-24 h-24 md:w-32 md:h-32 text-mint-dark mx-auto mb-4" />
              <p className="font-handwritten text-2xl md:text-3xl text-mint-dark">
                Your Collage Image Here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Replace this with your collage background
              </p>
            </div>
          </div>
        </div>

        {/* Center button overlay */}
        <div className="relative z-10 flex items-center justify-center">
          <button
            onClick={() => navigate("/birthday-message")}
            className="btn-romantic flex items-center gap-3 text-xl md:text-2xl 
                       px-10 py-5 md:px-14 md:py-6 animate-float
                       bg-gradient-to-r from-mint to-pastel-blue"
          >
            <span className="font-handwritten text-2xl md:text-3xl">For You</span>
            <Heart className="w-6 h-6 md:w-7 md:h-7 fill-current animate-heartbeat" />
          </button>
        </div>

        {/* Floating hearts decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-mint/30 animate-float"
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