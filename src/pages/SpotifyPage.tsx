import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { Music, QrCode } from "lucide-react";

const SpotifyPage = () => {
  return (
    <PageTransition>
      <div className="page-container bg-soft-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <BackButton to="/heart" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-48 bg-mint-light/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-pastel-blue-light/25 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-lg">
          <div className="opacity-0 animate-slide-up">
            <Music className="w-14 h-14 md:w-16 md:h-16 text-mint mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">Our Song</h1>
            <p className="font-handwritten text-xl text-mint-dark mb-10">Scan to listen 🎵</p>
          </div>

          <div className="opacity-0 animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50 inline-block">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-mint-light/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-mint/30">
                <div className="text-center">
                  <QrCode className="w-16 h-16 md:w-20 md:h-20 text-mint/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm md:text-base">QR Code<br />Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 font-serif text-muted-foreground text-sm md:text-base opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Scan with your Spotify app to play our special playlist
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default SpotifyPage;