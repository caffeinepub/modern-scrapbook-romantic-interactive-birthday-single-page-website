// Central configuration for the scrapbook birthday experience
export const scrapbookConfig = {
  // Hero Section
  hero: {
    headline: "Wait... did I forget something today?",
    countdownTarget: new Date('2026-02-14T00:00:00'), // Change this to your girlfriend's birthday
    hintText: "Maybe it's something special... 💕",
  },

  // The Journey - Long-form paragraphs with "Fake Out" structure
  journey: {
    paragraphs: [
      {
        id: 1,
        text: "I was going to write about how annoying it is when you steal the covers at night, leaving me freezing and desperately trying to reclaim even a corner of the blanket... but then I realized I wouldn't want to be cold with anyone else. Those moments, even the chilly ones, are perfect because they're with you. Every morning I wake up next to you is a gift, even if I'm shivering.",
      },
      {
        id: 2,
        text: "Do you remember the first time we met? I was so nervous I could barely speak. But something about you made everything feel right. From that very first moment, I knew you were special. Every day since then has been an adventure, and I can't wait to see where our story goes next.",
      },
      {
        id: 3,
        text: "I was going to complain about how you always take forever to get ready, making us late to literally everything we've ever planned... but then I realized that every single second of waiting is worth it when I see you walk out looking absolutely stunning. You could take all the time in the world, and I'd wait forever just to see that smile.",
      },
      {
        id: 4,
        text: "There are moments when I look at you and I'm overwhelmed by how lucky I am. You make the ordinary extraordinary. A simple walk becomes an adventure. A quiet evening becomes a cherished memory. You've taught me what it means to truly love someone, and I fall for you more deeply every single day.",
      },
    ],
    polaroids: [
      { id: 1, defaultCaption: "Our first adventure together" },
      { id: 2, defaultCaption: "That time we couldn't stop laughing" },
      { id: 3, defaultCaption: "My favorite smile in the world" },
      { id: 4, defaultCaption: "Forever my favorite person" },
    ],
  },

  // The Tease - Envelope reveals
  tease: {
    envelopes: [
      "You're the reason I believe in magic ✨",
      "Remember when you snorted while laughing? Still the cutest thing ever 😂",
      "I love how you dance when you think no one's watching 💃",
      "Your terrible puns make my day every single time 🤦‍♂️",
      "The way you scrunch your nose when you're concentrating is adorable 🥰",
      "I love you more than you love stealing my hoodies (and that's saying something) 👕",
    ],
  },

  // Our Spots - Optional interactive map
  ourSpots: {
    enabled: true,
    pins: [
      {
        id: 1,
        title: "Where We First Met",
        note: "The coffee shop where our eyes first met. I knew right then you were special.",
        position: { x: 30, y: 40 },
      },
      {
        id: 2,
        title: "Our First Date",
        note: "That little Italian restaurant where you laughed so hard you snorted. I fell even harder for you that night.",
        position: { x: 65, y: 55 },
      },
    ],
  },

  // Grand Finale
  finale: {
    buttonText: "Don't Click This",
    birthdayMessage: "Happy Birthday, My Love! 🎉",
    coupon: {
      title: "One Magical Date Night",
      description: "Redeemable for an unforgettable evening of your choice",
      finePrint: "Valid anytime, anywhere, with unlimited love included",
      redemptionNote: "Just say the word and I'll make it happen ✨",
    },
  },

  // Password-protected surprise
  surprise: {
    enabled: true,
    password: "0214", // Change to her birthday or your anniversary
    videoUrl: "", // Add your video URL here (YouTube embed, etc.) or leave empty for placeholder
    placeholderMessage: "A special video message just for you 💕",
  },
};
