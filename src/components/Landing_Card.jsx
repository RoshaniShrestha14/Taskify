import React from "react";
import { CheckSquare, Calendar, Filter, Search } from "lucide-react";
import "./landing_card.css";

const cards = [
  { icon: CheckSquare, title: "Track Tasks", description: "Add, edit, and manage your daily tasks with ease." },
  { icon: Calendar, title: "Due Dates", description: "Set deadlines and never miss an important task." },
  { icon: Filter, title: "Filter & Sort", description: "Organize tasks by status, date or name." },
  { icon: Search, title: "Quick Search", description: "Find any tasks instantly with debounced search." }
];

const Landing_Card = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Everything you need to stay on track</h2>
        <div className="features-grid">
          {cards.map((card, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                <card.icon className="feature-icon" />
              </div>
              <h3 className="feature-title">{card.title}</h3>
              <p className="feature-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing_Card;
