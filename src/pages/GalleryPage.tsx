import { useState } from "react";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import { X, Camera, ImageIcon, ArrowLeft } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Timeline events - you can customize these
const timelineEvents = [
  {
    id: 1,
    eventName: "Childhood Days",
    photos: [
      { id: 1, label: "Memory 1" },
      { id: 2, label: "Memory 2" },
      { id: 3, label: "Memory 3" },
    ],
  },
  {
    id: 2,
    eventName: "School Years",
    photos: [
      { id: 4, label: "Memory 4" },
      { id: 5, label: "Memory 5" },
    ],
  },
  {
    id: 3,
    eventName: "College Life",
    photos: [
      { id: 6, label: "Memory 6" },
      { id: 7, label: "Memory 7" },
      { id: 8, label: "Memory 8" },
    ],
  },
  {
    id: 4,
    eventName: "First Job",
    photos: [
      { id: 9, label: "Memory 9" },
      { id: 10, label: "Memory 10" },
    ],
  },
  {
    id: 5,
    eventName: "Adventures Together",
    photos: [
      { id: 11, label: "Memory 11" },
      { id: 12, label: "Memory 12" },
      { id: 13, label: "Memory 13" },
    ],
  },
  {
    id: 6,
    eventName: "Special Moments",
    photos: [
      { id: 14, label: "Memory 14" },
      { id: 15, label: "Memory 15" },
    ],
  },
];

const GalleryPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ eventId: number; photoId: number } | null>(null);

  const currentEvent = selectedEvent !== null 
    ? timelineEvents.find(e => e.id === selectedEvent) 
    : null;

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-cream relative">
        <BackButton to="/hub" />

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-mint-light/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pastel-blue-light/20 rounded-full blur-3xl" />
        </div>

        {/* Scrollable content */}
        <div className="relative z-10 px-4 md:px-6 py-20 pb-32 overflow-y-auto min-h-screen">
          <div className="max-w-4xl mx-auto pt-10">
            {/* Title */}
            <div className="text-center mb-12 opacity-0 animate-slide-up">
              <Camera className="w-12 h-12 text-mint mx-auto mb-4" />
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
                Journey Through Time
              </h1>
              <p className="font-handwritten text-xl text-mint-dark">
                A timeline of beautiful memories 📸
              </p>
            </div>

            {/* Timeline with Tabs or Event Detail View */}
{selectedEvent === null ? (
              /* Timeline visual indicator */
              <div className="relative mt-8">
                <div className="timeline-line" />
                {timelineEvents.map((event, index) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className="relative mb-12 last:mb-0 w-full text-left opacity-0 animate-slide-up
                               group cursor-pointer"
                    style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                  >
                    <div className="timeline-dot" style={{ top: "0.5rem" }} />
                    <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2" />
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                        <div className="bg-dark-blue px-6 py-4 rounded-xl shadow-card border-2 border-mint/20
                                        group-hover:border-mint/50 group-hover:shadow-glow transition-all duration-300">
                          <h3 className="font-handwritten text-xl md:text-2xl text-pastel-blue-light">
                            {event.eventName}
                          </h3>
                          <p className="font-handwritten text-sm text-pastel-blue/70 mt-1">
                            {event.photos.length} photos • Click to view
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              /* Event Detail View */
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="flex items-center gap-2 text-mint hover:text-mint-dark transition-colors mb-8
                             font-handwritten text-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Timeline
                </button>

                <div className="bg-dark-blue rounded-2xl p-6 md:p-8 shadow-card border-2 border-mint/20">

                  {/* Photos grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentEvent?.photos.map((photo, index) => (
                      <button
                        key={photo.id}
                        onClick={() => setSelectedPhoto({ eventId: currentEvent.id, photoId: photo.id })}
                        className="aspect-square bg-pastel-blue-light/20 rounded-xl overflow-hidden
                                   transition-all duration-300 hover:shadow-glow hover:scale-[1.03]
                                   focus:outline-none focus:ring-2 focus:ring-mint/50
                                   border-2 border-dashed border-mint/30 opacity-0 animate-fade-in"
                        style={{ animationDelay: `${0.2 + index * 0.05}s`, animationFillMode: "forwards" }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center p-2">
                            <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-pastel-blue/50 mx-auto mb-2" />
                            <span className="text-pastel-blue-light text-xs md:text-sm font-handwritten">
                              {photo.label}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
              
              <div className="aspect-video bg-mint-light/30 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-mint/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Photo Placeholder
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
