import { useParams } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";
import parchmentTexture from "@/assets/parchment-texture.avif";

const letterContent: Record<string, { from: string; content: string }> = {
  "1": { from: "Mom", content: `My dearest,\n\nOn this special day, I want you to know how much you mean to me. From the moment you came into this world, you filled my heart with a love I never knew was possible.\n\nWatching you grow into the amazing person you are today has been the greatest joy of my life.\n\nHappy Birthday, my love.\n\nWith all my love,\nMom ❤️` },
  "2": { from: "Dad", content: `Happy Birthday!\n\nAnother year older, another year wiser. I'm so proud of the person you've become.\n\nRemember that no matter where life takes you, I'll always be here cheering you on.\n\nLove always,\nDad` },
  "3": { from: "Best Friend", content: `HAPPY BIRTHDAY!! 🎉\n\nThank you for being the best friend anyone could ask for. Through all the laughs, the tears, and the adventures - you've been there.\n\nHere's to more memories!\n\nLove you always,\nYour Best Friend ✨` },
  "4": { from: "Sibling", content: `Hey Birthday Star! 🌟\n\nEven though we've grown up, you're still my favorite partner in crime.\n\nWishing you the happiest of birthdays!\n\nYour favorite sibling 😎` },
  "5": { from: "Grandma", content: `My precious grandchild,\n\nAnother beautiful birthday! You bring so much light into our lives.\n\nMay God bless you with health, happiness, and all your heart's desires.\n\nWith endless love,\nGrandma 💕` },
  "6": { from: "Special One", content: `My love,\n\nToday we celebrate you. Your smile is my sunshine, your laugh is my favorite song.\n\nHappy Birthday, my everything.\n\nForever yours,\nYour Special One 💝` },
};

const IndividualLetterPage = () => {
  const { id } = useParams<{ id: string }>();
  const letter = letterContent[id || "1"] || letterContent["1"];

  return (
    <PageTransition>
      <div 
        className="min-h-screen w-full py-20 px-4 md:px-6 overflow-y-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${parchmentTexture})` }}
      >
        <BackButton to="/letters" />

        <div className="absolute top-16 left-4 md:left-8 w-16 h-16 border-t-2 border-l-2 border-mint/40 rounded-tl-lg" />
        <div className="absolute top-16 right-4 md:right-8 w-16 h-16 border-t-2 border-r-2 border-mint/40 rounded-tr-lg" />

        <div className="max-w-2xl mx-auto pt-10 relative z-10">
          <div 
            className="rounded-2xl p-6 md:p-10 shadow-card border border-mint/20 opacity-0 animate-fade-in-scale bg-cover bg-center"
            style={{ backgroundImage: `url(${parchmentTexture})` }}
          >
            <div className="text-center mb-8">
              <p className="font-handwritten text-2xl md:text-3xl text-mint-dark">A Letter From</p>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mt-2">{letter.from}</h1>
            </div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-mint/50" />
              <div className="w-2 h-2 rounded-full bg-mint/50" />
              <div className="w-16 h-px bg-mint/50" />
            </div>
            <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line">{letter.content}</div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default IndividualLetterPage;