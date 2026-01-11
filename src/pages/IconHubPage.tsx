import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { ScrollText, Heart, Camera, Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const IconHubPage = () => {
  const navigate = useNavigate();
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleHeartClick = () => {
    setShowPasswordDialog(true);
    setPassword("");
    setError("");
  };

  const handlePasswordSubmit = () => {
    if (password === "mybbg") {
      setShowPasswordDialog(false);
      navigate("/heart");
    } else {
      setError("Incorrect password");
    }
  };

  const icons = [
    { icon: ScrollText, label: "Letters", path: "/letters", delay: "0.2s", locked: false },
    { icon: Heart, label: "Heart", path: "/heart", delay: "0.4s", locked: true },
    { icon: Camera, label: "Gallery", path: "/gallery", delay: "0.6s", locked: false },
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
          {icons.map(({ icon: Icon, label, path, delay, locked }) => (
            <div key={label} className="flex flex-col items-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: delay }}>
              <button 
                onClick={() => locked ? handleHeartClick() : navigate(path)} 
                className="btn-icon group hover:bg-mint-light/30 relative" 
                aria-label={label}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-mint-dark transition-all duration-300 group-hover:text-mint group-hover:scale-110" />
                {locked && (
                  <div className="absolute -bottom-1 -right-1 bg-rose-100 rounded-full p-1">
                    <Lock className="w-3 h-3 text-rose-500" />
                  </div>
                )}
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

        <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
          <DialogContent className="bg-cream border-mint/30">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-foreground flex items-center gap-2">
                <Lock className="w-5 h-5 text-rose-400" />
                Secret Section
              </DialogTitle>
              <DialogDescription className="font-handwritten text-lg text-muted-foreground">
                This is a special place just for you. Enter the password to continue...
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <Input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                className="bg-white/50 border-mint/30 font-handwritten text-lg"
              />
              {error && (
                <p className="text-rose-500 text-sm font-handwritten">{error}</p>
              )}
              <Button 
                onClick={handlePasswordSubmit}
                className="w-full bg-mint hover:bg-mint-dark text-white font-handwritten text-lg"
              >
                Unlock
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default IconHubPage;