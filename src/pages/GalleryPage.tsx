import { useState } from "react";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { X, Camera } from "lucide-react";

// Placeholder photos - you can replace these with actual images
const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  placeholder: true,
  label: `Memory ${i + 1}`,
}));

const GalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="page-container bg-cream py-20 px-4 md:px-6 overflow-y-auto">
        <BackButton to="/hub" />

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-rose-light/10 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto pt-10 relative z-10">
          {/* Title */}
          <div className="text-center mb-10 opacity-0 animate-slide-up">
            <Camera className="w-12 h-12 text-rose mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Photo Memories
            </h1>
            <p className="font-handwritten text-xl text-rose-dark">
              A journey through time 📸
            </p>
          </div>

          {/* Masonry-style gallery */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="break-inside-avoid opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <button
                  onClick={() => setSelectedPhoto(photo.id)}
                  className="w-full bg-cream-dark rounded-xl overflow-hidden shadow-card
                             transition-all duration-300 hover:shadow-glow hover:scale-[1.02]
                             focus:outline-none focus:ring-2 focus:ring-rose/50"
                  style={{
                    height: `${180 + (index % 3) * 60}px`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center 
                                  border-2 border-dashed border-rose/20 bg-secondary/50">
                    <div className="text-center p-4">
                      <Camera className="w-8 h-8 text-rose/40 mx-auto mb-2" />
                      <span className="text-muted-foreground text-sm">
                        {photo.label}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedPhoto !== null && (
          <div 
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4
                       animate-fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl
                         animate-fade-in-scale"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/90 
                           flex items-center justify-center shadow-card transition-all
                           hover:bg-card hover:scale-110"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="aspect-video bg-cream-dark flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-rose/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Photo {selectedPhoto} Placeholder
                  </p>
                  <p className="text-muted-foreground/60 text-sm mt-2">
                    Click outside to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default GalleryPage;
