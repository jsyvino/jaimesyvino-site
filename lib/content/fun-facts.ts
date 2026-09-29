export interface FunFact {
  text: string;
  image: { src: string; alt: string };
}

export const funFacts: FunFact[] = [
  {
    text: "I went to Game 7 of the 2016 World Series (go Cubs!)",
    image: { src: "/images/about/fun-facts/cubs.jpg", alt: "Jaime and a friend at Game 7 of the 2016 World Series" },
  },
  {
    text: "I once walked from New York City to Boston",
    image: { src: "/images/about/fun-facts/boston.jpg", alt: "Jaime and a friend at the “Entering Boston” sign after walking there from NYC" },
  },
  {
    text: "I played in an international rugby tournament in Kenya",
    image: { src: "/images/about/fun-facts/rugby.gif", alt: "Jaime playing rugby during an international tournament in Kenya" },
  },
  {
    text: "I went to Glacier National Park for my honeymoon",
    image: { src: "/images/about/fun-facts/glacier2.jpg", alt: "A mountain overlooking two alpine lakes at Glacier National Park" },
  },
  {
    text: "I rode my bike from San Francisco to LA",
    image: { src: "/images/about/fun-facts/bike.jpg", alt: "Jaime and a friend biking along the California coastline" },
  },
  {
    text: "I have 3 perfect little monsters",
    image: { src: "/images/about/fun-facts/kids.jpg", alt: "Three kids sitting on a rock overlooking a mountain vista on a hike" },
  },
];
