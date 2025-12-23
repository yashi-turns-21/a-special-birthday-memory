import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { Heart } from "lucide-react";
import parchmentTexture from "@/assets/parchment-texture.avif";

const HeartLetterPage = () => {
  const letterContent = `My Dearest Love,

If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Only then would you realize how special you are to me.

Every moment with you feels like a beautiful dream I never want to wake up from. Your smile lights up my darkest days, your laugh is the music that fills my heart, and your love is the greatest gift I've ever received.

On this special day, I want you to know that you are my everything. You are my first thought in the morning and my last thought at night. You are the reason I believe in magic, because loving you feels exactly like that.

Thank you for being you. Thank you for choosing me. Thank you for making every ordinary moment extraordinary just by being in it.

Happy Birthday, my love. May all your dreams come true, and may I be lucky enough to be by your side as they do.

Forever and always yours,
With all my heart ❤️`;

  return (
    <PageTransition>
      <div 
        className="page-container py-20 px-4 md:px-6 overflow-y-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${parchmentTexture})` }}
      >
        <BackButton to="/heart" />

        <div className="absolute top-16 left-4 md:left-8 w-16 h-16 border-t-2 border-l-2 border-mint/30 rounded-tl-lg" />
        <div className="absolute top-16 right-4 md:right-8 w-16 h-16 border-t-2 border-r-2 border-mint/30 rounded-tr-lg" />
        <div className="absolute bottom-8 left-4 md:left-8 w-16 h-16 border-b-2 border-l-2 border-mint/30 rounded-bl-lg" />
        <div className="absolute bottom-8 right-4 md:right-8 w-16 h-16 border-b-2 border-r-2 border-mint/30 rounded-br-lg" />

        <div className="max-w-2xl mx-auto pt-10 relative z-10">
          <div 
            className="rounded-2xl p-6 md:p-10 shadow-card border border-mint/20 opacity-0 animate-fade-in-scale bg-cover bg-center"
            style={{ backgroundImage: `url(${parchmentTexture})` }}
          >
            <div className="text-center mb-8">
              <Heart className="w-10 h-10 text-mint mx-auto mb-3 animate-heartbeat fill-current" />
              <h1 className="font-display text-3xl md:text-4xl text-foreground">A Letter From The Heart</h1>
            </div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-mint/40" />
              <Heart className="w-4 h-4 text-mint/60 fill-current" />
              <div className="w-12 h-px bg-mint/40" />
            </div>
            <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line">{letterContent}</div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HeartLetterPage;