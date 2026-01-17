import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const SocialMedia = () => {
  const socials = [
    {
      icon: FaFacebookF,
      name: "Facebook",
      url: "https://facebook.com",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: FaXTwitter,
      name: "Twitter",
      url: "https://x.com",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://instagram.com",
      color: "hover:text-[#E4405F]",
    },
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-base-content",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold font-serif mb-2">Follow Us</h3>
      <p className="text-base-content/70 text-sm mb-2">
        Join our community and stay updated with the latest wisdom and insights.
      </p>
      <div className="flex gap-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-circle btn-ghost ${social.color} transition-all hover:scale-110`}
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
