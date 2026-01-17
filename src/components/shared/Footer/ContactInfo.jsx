import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    {
      icon: Mail,
      text: "support@echoesoflife.com",
      href: "mailto:support@echoesoflife.com",
    },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA 94102" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold font-serif mb-2">Contact Us</h3>
      {contacts.map((contact, index) =>
        contact.href ? (
          <a
            key={index}
            href={contact.href}
            className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors group"
          >
            <contact.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{contact.text}</span>
          </a>
        ) : (
          <div
            key={index}
            className="flex items-center gap-3 text-base-content/70"
          >
            <contact.icon className="w-5 h-5" />
            <span>{contact.text}</span>
          </div>
        )
      )}
    </div>
  );
};

export default ContactInfo;