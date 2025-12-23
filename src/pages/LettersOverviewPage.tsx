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
  { id: "7", name: "Cousin" },
  { id: "8", name: "Uncle" },
  { id: "9", name: "Aunt" },
  { id: "10", name: "Colleague" },
  { id: "11", name: "Mentor" },
  { id: "12", name: "Childhood Friend" },
];

const LettersOverviewPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-soft-gradient relative">
        <BackButton to="/hub" />

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mint-light/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pastel-blue-light/30 rounded-full blur-3xl" />
        </div>

        {/* Scrollable content */}
        <div className="relative z-10 px-6 py-20 pb-32 overflow-y-auto min-h-screen">
          <div className="max-w-4xl mx-auto pt-10">
            {/* Title */}
            <h1 
              className="font-display text-4xl md:text-5xl text-center text-foreground mb-4
                         opacity-0 animate-slide-up"
            >
              Letters of Love
            </h1>
            <p 
              className="font-handwritten text-xl md:text-2xl text-center text-mint-dark mb-12
                         opacity-0 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Messages from the heart ✉️
            </p>

            {/* Letters grid - scrollable */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-8">
              {letters.map((letter, index) => (
                <div
                  key={letter.id}
                  className="opacity-0 animate-slide-up"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <button
                    onClick={() => navigate(`/letter/${letter.id}`)}
                    className="letter-card w-full aspect-square flex flex-col items-center justify-center gap-3
                               group"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-pastel-blue-light flex items-center justify-center
                                    transition-all duration-300 group-hover:bg-pastel-blue group-hover:scale-110">
                      <Mail className="w-6 h-6 md:w-8 md:h-8 text-pastel-blue-dark transition-colors 
                                       group-hover:text-pastel-blue-dark" />
                    </div>
                    <span className="font-handwritten text-base md:text-lg lg:text-xl text-pastel-blue-light 
                                     text-center leading-tight">
                      {letter.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LettersOverviewPage;