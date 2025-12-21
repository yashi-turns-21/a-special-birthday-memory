import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { Mail } from "lucide-react";

// Sample letter data - you can add more letters here
const letters = [
  { id: "1", name: "Mom" },
  { id: "2", name: "Dad" },
  { id: "3", name: "Best Friend" },
  { id: "4", name: "Sibling" },
  { id: "5", name: "Grandma" },
  { id: "6", name: "Special One" },
];

const LettersOverviewPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-container bg-soft-gradient py-20 px-6 relative overflow-y-auto">
        <BackButton to="/hub" />

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-light/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-10">
          {/* Title */}
          <h1 
            className="font-display text-4xl md:text-5xl text-center text-foreground mb-4
                       opacity-0 animate-slide-up"
          >
            Letters of Love
          </h1>
          <p 
            className="font-handwritten text-xl md:text-2xl text-center text-rose-dark mb-12
                       opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Messages from the heart ✉️
          </p>

          {/* Letters grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {letters.map((letter, index) => (
              <div
                key={letter.id}
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <button
                  onClick={() => navigate(`/letter/${letter.id}`)}
                  className="letter-card w-full aspect-square flex flex-col items-center justify-center gap-3
                             group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cream flex items-center justify-center
                                  transition-all duration-300 group-hover:bg-rose-light/30 group-hover:scale-110">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-rose-dark transition-colors 
                                     group-hover:text-rose" />
                  </div>
                  <span className="font-handwritten text-base md:text-lg lg:text-xl text-foreground 
                                   text-center leading-tight">
                    {letter.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LettersOverviewPage;
