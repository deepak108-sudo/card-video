import { Linkedin, Github, Mail, Twitter, Dribbble } from "lucide-react";

const TeamCard = ({ member }) => {
  if (!member) return null;

  const { name, description, image, role } = member;
  return (
    <div className="relative w-full max-w-[320px] mb-4">
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br"></div>

      {/* Full glass transparent card */}
      <div className="relative bg-white/5 rounded-3xl  border-3 border-blue-300/30 shadow-2xl">
        <div className="relative bg-white/5 rounded-3xl px-6 py-2 border m-1 border-white/30 shadow-2xl">
          {/* Profile section with orbital ring */}
          <div className="relative w-36 h-36 mx-auto mb-6">
            {/* Outer glow effect */}
            <div className="absolute inset-0 rounded-full bg-blue-100/30 blur-2xl"></div>

            {/* Animated orbital ring */}
            <svg className="block absolute inset-0 w-full h-full animate-orbital origin-center">
              <ellipse
                cx="72"
                cy="72"
                rx="70"
                ry="68"
                fill="none"
                stroke="url(#orbitalGradient)"
                strokeWidth="2.5"
                opacity="0.8"
                /* This handles the 2D tilt of the ring */
                transform="rotate(-25 72 72)"
              />
              <defs>
                <linearGradient
                  id="orbitalGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Profile image with blue glow border */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-blue-400/60 shadow-lg shadow-blue-500/50">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-2xl font-bold text-white text-center mb-2 tracking-wide">
            {name}
          </h3>

          {/* Role */}
          <p className="text-cyan-400 text-center text-sm font-medium mb-6 tracking-wider">
            {role}
          </p>

          {/* Divider line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-5"></div>

          {/* Description */}
          <p className="text-gray-200 text-center text-sm mb-8 leading-relaxed truncate w-48">
            {description}
          </p>

          {/* Social icons
        <div className="flex justify-center gap-5">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <social.icon 
                className="w-6 h-6" 
                strokeWidth={2}
                style={{ color: social.color }}
              />
            </a>
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
