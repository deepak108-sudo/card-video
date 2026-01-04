// components/TeamSection.jsx
import TeamCard from "./Card.jsx";
import { teamData } from "../data/data";
import { useRef, useEffect } from "react";

export default function TeamSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnd = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("ended", onEnd);
    return () => video.removeEventListener("ended", onEnd);
  }, []);

  return (
    <section className="relative min-h-screen px-2 py-5">
      {/* Video */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/fallback.png"
      >
        <source src="/bg-video.webm" type="video/webm" />
        <source src="/solar4k.mp4" type="video/mp4" />
      </video>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Our Core Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center">
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
