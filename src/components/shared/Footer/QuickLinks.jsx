import { Link } from "react-router";

const QuickLinks = () => {
  const links = [
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "FAQ", path: "/faq" },
    { name: "Help Center", path: "/help" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold font-serif mb-2">Quick Links</h3>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-base-content/70 hover:text-primary transition-colors hover:translate-x-1 transform inline-block"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;