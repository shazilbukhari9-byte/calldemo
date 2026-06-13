import React, { useEffect } from "react";
import "./PartThree.css";
import { motion, useAnimation } from "framer-motion";
import {
  Phone,
  PhoneCall,
  MessageSquare,
  Voicemail,
  Mic,
  PhoneForwarded,
  BadgeCheck,
  ShieldCheck,
  Layers,
} from "lucide-react";

const features = [
  { icon: Phone, label: "International calls to 200+ countries" },
  { icon: PhoneCall, label: "Virtual numbers across 60+ markets" },
  { icon: MessageSquare, label: "Two-way SMS on every number" },
  { icon: Voicemail, label: "Voicemail for every number" },
  { icon: PhoneForwarded, label: "Call forwarding to any country" },
  { icon: Mic, label: "Call recording via web portal" },
  { icon: BadgeCheck, label: "Caller ID — inbound + outbound" },
  { icon: ShieldCheck, label: "Spam call blocking" },
];

const ThreePart = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: ["0%", "-50%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section className="workflow-section">
      <div className="workflow-carousel">
        <motion.div animate={controls}>
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-left">
                <div className="feature-icon">
                  <f.icon size={20} />
                </div>

                <div>
                  <p className="feature-title">{f.label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="workflow-content">
        <span className="workflow-badge">
          Workflow Automation
        </span>

        <p className="workflow-text">
          Our solutions reduce human error, save time, and scale effortlessly
          with your business needs.
        </p>

        <div className="workflow-tag">
          <Layers size={13} strokeWidth={2.4} style={{color:"#00aeff"}}/>
          <span>
            Same feature set on iOS, Android, and the web portal
          </span>
        </div>
      </div>
    </section>
  );
};

export default ThreePart;