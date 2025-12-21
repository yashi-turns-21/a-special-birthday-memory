import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { ScrollText, Music, Heart } from "lucide-react";

const HeartPage = () => {
  const navigate = useNavigate();

  const items = [
    { icon: ScrollText, label: "A Special Letter", path: "/heart-letter", delay: "0.3s" },
    { icon: Music, label: "Our Song", path: "/spotify", delay: "0.5s" },
  ];

  return (
    <PageTransition>
      <div className="page-container bg-romantic-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <BackButton to="/hub" />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Heart key={i} className="absolute text-mint/15 animate-float fill-current"
              style={{ left: `${5 + (i * 8)}%`, top: `${10 + (i % 5) * 18}%`, width: `${15 + (i % 4) * 10}px`, height: `${15 + (i % 4) * 10}px`, animationDelay: `${i * 0.3}s`, animationDuration: `${3 + (i % 3)}s` }} />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="mb-12 opacity-0 animate-slide-up">
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-mint mx-auto mb-4 animate-heartbeat fill-current" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">From My Heart</h1>
            <p className="font-handwritten text-xl md:text-2xl text-mint-dark">Just for you 💕</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            {items.map(({ icon: Icon, label, path, delay }) => (
              <div key={label} className="flex flex-col items-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: delay }}>
                <button onClick={() => navigate(path)} className="btn-icon group bg-card/90 backdrop-blur-sm hover:bg-mint-light/30" aria-label={label}>
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-mint-dark transition-all duration-300 group-hover:text-mint group-hover:scale-110" />
                </button>
                <span className="font-handwritten text-lg md:text-xl text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HeartPage;