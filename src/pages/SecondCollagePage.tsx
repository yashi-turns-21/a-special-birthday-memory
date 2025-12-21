import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import CollagePlaceholder from "@/components/CollagePlaceholder";
import { ChevronRight } from "lucide-react";

const SecondCollagePage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container bg-warm-gradient relative">
        <BackButton to="/birthday-message" />

        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-40 h-40 bg-rose-light/25 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-56 h-56 bg-accent/15 rounded-full blur-3xl" />
        </div>

        {/* Collage */}
        <div className="relative w-full h-screen">
          <CollagePlaceholder />
        </div>

        {/* Navigation button */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            onClick={() => navigate("/hub")}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary shadow-glow
                       flex items-center justify-center transition-all duration-300
                       hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--rose)/0.5)]"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
          </button>
        </div>

        {/* Subtle label */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <p className="font-handwritten text-xl md:text-2xl text-rose-dark/70 animate-pulse-soft">
            Our Memories Together
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default SecondCollagePage;
