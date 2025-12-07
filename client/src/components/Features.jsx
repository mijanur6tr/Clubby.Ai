import React from "react";
import { Link } from "react-router-dom";
import { Image, Type, Lightbulb, EyeOff, Eraser, FileCheck2 } from "lucide-react";

const Features = () => {
  const featuresList = [ 
    { icon: <Lightbulb size={32} />, title: "Generate Ideas", link: "/ai/generate-idea" },
      { icon: <Type size={32} />, title: "Generate Content", link: "/ai/article" },
    { icon: <Image size={32} />, title: "Generate Image", link: "/ai/generate-image" },
    { icon: <EyeOff size={32} />, title: "Remove Background", link: "/ai/remove-bg" },
    { icon: <Eraser size={32} />, title: "Remove Object", link: "/ai/remove-object" },
    { icon: <FileCheck2 size={32} />, title: "Review Resume", link: "/ai/review-resume" },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 pt-12">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-gray-900">
        Powerful AI Features
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {featuresList.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-100 group"
          >
            <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm group-hover:text-gray-600 transition">
              Click to start using this AI tool instantly.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
