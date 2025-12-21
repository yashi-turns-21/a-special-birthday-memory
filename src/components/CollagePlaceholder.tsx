interface CollagePlaceholderProps {
  images?: string[];
  className?: string;
}

const CollagePlaceholder = ({ images = [], className = "" }: CollagePlaceholderProps) => {
  // Placeholder pattern when no images are provided
  if (images.length === 0) {
    return (
      <div className={`w-full h-full grid grid-cols-3 grid-rows-3 gap-2 p-4 ${className}`}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-cream-dark/50 rounded-lg flex items-center justify-center 
                       border-2 border-dashed border-rose/30 transition-all duration-300
                       hover:border-rose/50 hover:bg-cream-dark/70"
          >
            <span className="text-muted-foreground text-xs md:text-sm text-center px-2">
              Photo {i + 1}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`w-full h-full grid grid-cols-3 grid-rows-3 gap-2 p-4 ${className}`}>
      {images.slice(0, 9).map((img, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden shadow-card transition-all duration-300
                     hover:scale-105 hover:shadow-glow"
        >
          <img
            src={img}
            alt={`Memory ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default CollagePlaceholder;
