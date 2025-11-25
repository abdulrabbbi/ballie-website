import React from "react";
import Card from "./Card";

export default function CardGrid() {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=80",
      title: "Ballie For You",
      description:
        "Where football brings people together. Born from a passion for the game, Ballie Live helps you find live matches, discover places to watch with friends and feel stadium energy wherever you are.",
      link: "/blogs/ballie-for-you",
    },
    {
      image:
        "https://images.unsplash.com/photo-1701363539457-875b9bc9bbc1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ballie For Business",
      description:
        "Where football fills your venue. With a free Ballie Live Business account, your bar, café or sports venue becomes visible to thousands of fans looking for the perfect spot to cheer together.",
      link: "/blogs/ballie-for-business",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551385093-ad3fb362dc43?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ballie Coins",
      description:
        "Earn. Personalise. Experience. Collect Ballie Coins via daily logins, sharing on socials or inviting friends – then use them to personalise your profile, unlock discounts and enjoy upcoming Ballie Live Game extras.",
      link: "/blogs/ballie-coins",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1200&q=80",
      title: "FootballMaps",
      description:
        "Find where football lives. Discover nearby bars, cafés and venues showing live football – from local derbies to international clashes – and choose the perfect place to watch.",
      link: "/blogs/football-maps",
    },
    {
      image:
        "https://images.unsplash.com/photo-1705593973313-75de7bf95b56?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Live Scores",
      description:
        "Stay in the game. Follow matches in real time, see instantly who scores or takes the lead and stay connected to every moment – wherever you are.",
      link: "/blogs/live-scores",
    },
    {
      image:
        "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1623&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blogs & News",
      description:
        "Stories, updates & highlights. Read about new Ballie Live features, fan stories, venue spotlights and tips to get the most out of your football experience.",
      link: "/blogs/news",
    },
  ];

  return (
    <section className="bg-transparent min-h-screen flex justify-center items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
}
