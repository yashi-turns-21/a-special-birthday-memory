import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { ChevronRight, ImageIcon } from "lucide-react";

const SecondCollagePage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container relative">
        <BackButton to="/birthday-message" />

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

        {/* Navigation button */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            onClick={() => navigate("/hub")}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-mint shadow-glow
                       flex items-center justify-center transition-all duration-300
                       hover:scale-110 hover:shadow-[0_0_40px_hsl(168_45%_75%/0.5)]"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
          </button>
        </div>

        {/* Subtle label */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <p className="font-handwritten text-xl md:text-2xl text-mint-dark/70 animate-pulse-soft">
            Our Memories Together
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default SecondCollagePage;