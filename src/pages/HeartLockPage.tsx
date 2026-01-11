import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { Lock, Heart, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeartLockPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "mybbg") {
      navigate("/heart");
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <PageTransition>
      <div className="page-container bg-romantic-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <BackButton to="/hub" />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-mint/10 animate-float fill-current"
              style={{
                left: `${10 + i * 10}%`,
                top: `${15 + (i % 4) * 20}%`,
                width: `${20 + (i % 3) * 10}px`,
                height: `${20 + (i % 3) * 10}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i % 2)}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <div
            className={`mb-8 opacity-0 animate-slide-up ${shake ? "animate-shake" : ""}`}
          >
            <div className="relative inline-block mb-6">
              <Heart className="w-20 h-20 md:w-24 md:h-24 text-mint mx-auto fill-current" />
              <Lock className="w-8 h-8 md:w-10 md:h-10 text-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              This is Private
            </h1>
            <p className="font-handwritten text-lg md:text-xl text-mint-dark">
              Enter the password to unlock 💕
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="opacity-0 animate-slide-up space-y-4"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password..."
                className={`bg-card/80 backdrop-blur-sm border-2 ${
                  error ? "border-red-400" : "border-mint/30"
                } focus:border-mint text-center pr-10 font-handwritten text-lg h-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {error && (
              <p className="text-red-400 font-handwritten text-sm animate-fade-in">
                Wrong password, try again 💔
              </p>
            )}
            <Button
              type="submit"
              className="w-full bg-mint hover:bg-mint-dark text-white font-handwritten text-lg h-12"
            >
              Unlock My Heart
            </Button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default HeartLockPage;
