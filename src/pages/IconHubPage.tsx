import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { ScrollText, Heart, Camera } from "lucide-react";

const IconHubPage = () => {
  const navigate = useNavigate();

  const icons = [
    { icon: ScrollText, label: "Letters", path: "/letters", delay: "0.2s" },
    { icon: Heart, label: "Heart", path: "/heart-lock", delay: "0.4s" },
    { icon: Camera, label: "Gallery", path: "/gallery", delay: "0.6s" },
  ];

  return (
    <PageTransition>
      <div className="page-container bg-cream flex flex-col items-center justify-center relative">
        <BackButton to="/second-collage" />

        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--mint-light)/0.4)_0%,_transparent_25%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--pastel-blue-light)/0.3)_0%,_transparent_25%)]" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 md:mb-16 opacity-0 animate-slide-up text-center px-4">
          Choose Your Adventure
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 px-6">
          {icons.map(({ icon: Icon, label, path, delay }) => (
            <div key={label} className="flex flex-col items-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: delay }}>
              <button onClick={() => navigate(path)} className="btn-icon group hover:bg-mint-light/30" aria-label={label}>
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-mint-dark transition-all duration-300 group-hover:text-mint group-hover:scale-110" />
              </button>
              <span className="font-handwritten text-xl md:text-2xl text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 text-muted-foreground/50">
            <div className="w-8 h-px bg-current" />
            <Heart className="w-4 h-4 animate-pulse-soft" />
            <div className="w-8 h-px bg-current" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default IconHubPage;