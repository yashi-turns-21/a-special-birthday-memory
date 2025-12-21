import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { Sparkles, ChevronRight } from "lucide-react";

const BirthdayMessagePage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container bg-soft-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <BackButton to="/" />

        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_hsl(var(--rose-light)/0.3)_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--accent)/0.2)_0%,_transparent_40%)]" />
        </div>

        {/* Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-gold animate-sparkle"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
                width: `${16 + (i % 3) * 8}px`,
                height: `${16 + (i % 3) * 8}px`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6
                       opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Happy Birthday
          </h1>
          
          <p 
            className="font-handwritten text-3xl md:text-4xl text-rose-dark mb-8
                       opacity-0 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            To Someone Special ✨
          </p>

          <p 
            className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed mb-12
                       opacity-0 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            Today is all about celebrating you and the beautiful person you are.
            Every moment with you is a gift I treasure.
          </p>

          <div 
            className="opacity-0 animate-slide-up"
            style={{ animationDelay: "1.1s" }}
          >
            <button
              onClick={() => navigate("/second-collage")}
              className="btn-romantic inline-flex items-center gap-2"
            >
              <span>Continue</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom navigation hint */}
        <div 
          className="absolute bottom-8 right-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <button
            onClick={() => navigate("/second-collage")}
            className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm shadow-card
                       flex items-center justify-center transition-all duration-300
                       hover:bg-card hover:shadow-glow hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-rose-dark" />
          </button>
        </div>
      </div>
    </PageTransition>
  );
};

export default BirthdayMessagePage;
