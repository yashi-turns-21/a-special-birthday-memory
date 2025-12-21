import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { Heart } from "lucide-react";

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
      <div className="page-container parchment-bg py-20 px-4 md:px-6 overflow-y-auto">
        <BackButton to="/heart" />

        {/* Paper texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />
        </div>

        {/* Decorative corners */}
        <div className="absolute top-16 left-4 md:left-8 w-16 h-16 border-t-2 border-l-2 border-rose/30 rounded-tl-lg" />
        <div className="absolute top-16 right-4 md:right-8 w-16 h-16 border-t-2 border-r-2 border-rose/30 rounded-tr-lg" />
        <div className="absolute bottom-8 left-4 md:left-8 w-16 h-16 border-b-2 border-l-2 border-rose/30 rounded-bl-lg" />
        <div className="absolute bottom-8 right-4 md:right-8 w-16 h-16 border-b-2 border-r-2 border-rose/30 rounded-br-lg" />

        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose/15 animate-float fill-current"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 3) * 25}%`,
                width: `${18 + (i % 3) * 8}px`,
                height: `${18 + (i % 3) * 8}px`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Letter content */}
        <div className="max-w-2xl mx-auto pt-10 relative z-10">
          <div 
            className="bg-vintage-paper/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-card
                       border border-rose/20 opacity-0 animate-fade-in-scale"
          >
            {/* Letter header */}
            <div className="text-center mb-8">
              <Heart className="w-10 h-10 text-rose mx-auto mb-3 animate-heartbeat fill-current" />
              <h1 className="font-display text-3xl md:text-4xl text-foreground">
                A Letter From The Heart
              </h1>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-rose/40" />
              <Heart className="w-4 h-4 text-rose/60 fill-current" />
              <div className="w-12 h-px bg-rose/40" />
            </div>

            {/* Letter body */}
            <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line">
              {letterContent}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HeartLetterPage;
