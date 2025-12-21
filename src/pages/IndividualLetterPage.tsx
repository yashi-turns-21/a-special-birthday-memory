import { useParams } from "react-router-dom";
import BackButton from "@/components/BackButton";
import PageTransition from "@/components/PageTransition";

// Sample letter content - you can customize this
const letterContent: Record<string, { from: string; content: string }> = {
  "1": {
    from: "Mom",
    content: `My dearest,

On this special day, I want you to know how much you mean to me. From the moment you came into this world, you filled my heart with a love I never knew was possible.

Watching you grow into the amazing person you are today has been the greatest joy of my life. Every smile, every achievement, every moment we've shared is treasured in my heart forever.

Happy Birthday, my love. May this year bring you all the happiness you deserve.

With all my love,
Mom ❤️`,
  },
  "2": {
    from: "Dad",
    content: `Happy Birthday!

Another year older, another year wiser. I'm so proud of the person you've become. Your strength, your kindness, your determination - these are the qualities that make you truly special.

Remember that no matter where life takes you, I'll always be here cheering you on. Dream big, work hard, and never forget how loved you are.

Here's to another amazing year ahead!

Love always,
Dad`,
  },
  "3": {
    from: "Best Friend",
    content: `HAPPY BIRTHDAY!! 🎉

Can you believe another year has passed? Time really flies when you're having fun with your favorite person (that's me, obviously 😄).

Thank you for being the best friend anyone could ask for. Through all the laughs, the tears, the late-night talks, and the crazy adventures - you've been there through it all.

Here's to more memories, more adventures, and more years of friendship!

Love you always,
Your Best Friend ✨`,
  },
  "4": {
    from: "Sibling",
    content: `Hey Birthday Star! 🌟

Remember when we used to fight over the remote? Or that time we built a blanket fort and refused to come out for dinner? Those memories are some of my favorites.

Even though we've grown up (sort of), you're still my favorite partner in crime. Thanks for always having my back and for being the best sibling ever.

Wishing you the happiest of birthdays!

Your favorite sibling 😎`,
  },
  "5": {
    from: "Grandma",
    content: `My precious grandchild,

Another beautiful birthday! It feels like just yesterday you were a little one running around the garden, and now look at how wonderful you've become.

You bring so much light into our lives. Your laughter is the sweetest music, and your hugs are the warmest embrace. Never forget how special you are to this whole family.

May God bless you with health, happiness, and all your heart's desires.

With endless love,
Grandma 💕`,
  },
  "6": {
    from: "Special One",
    content: `My love,

Today we celebrate you - the person who makes every day brighter just by being in it. Your smile is my sunshine, your laugh is my favorite song.

I'm so grateful for every moment we share. You've shown me what true love feels like, and I fall more in love with you every single day.

Happy Birthday, my everything. Here's to us and all the beautiful moments yet to come.

Forever yours,
Your Special One 💝`,
  },
};

const IndividualLetterPage = () => {
  const { id } = useParams<{ id: string }>();
  const letter = letterContent[id || "1"] || letterContent["1"];

  return (
    <PageTransition>
      <div className="page-container parchment-bg py-20 px-4 md:px-6 overflow-y-auto">
        <BackButton to="/letters" />

        {/* Paper texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />
        </div>

        {/* Decorative corners */}
        <div className="absolute top-16 left-4 md:left-8 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
        <div className="absolute top-16 right-4 md:right-8 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
        <div className="absolute bottom-8 left-4 md:left-8 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
        <div className="absolute bottom-8 right-4 md:right-8 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />

        {/* Letter content */}
        <div className="max-w-2xl mx-auto pt-10 relative z-10">
          <div 
            className="bg-vintage-paper/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-card
                       border border-gold/20 opacity-0 animate-fade-in-scale"
          >
            {/* Letter header */}
            <div className="text-center mb-8">
              <p className="font-handwritten text-2xl md:text-3xl text-rose-dark">
                A Letter From
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                {letter.from}
              </h1>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gold/50" />
              <div className="w-2 h-2 rounded-full bg-gold/50" />
              <div className="w-16 h-px bg-gold/50" />
            </div>

            {/* Letter body */}
            <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line">
              {letter.content}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default IndividualLetterPage;
