import { Heart } from "lucide-react";
import ContactInfo from "./ContactInfo";
import FooterLogo from "./Logo";
import QuickLinks from "./QuickLinks";
import SocialMedia from "./SocialMedia";
import Newsletter from "./Newsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <FooterLogo />
          </div>

          <div>
            <ContactInfo />
          </div>

          <div>
            <QuickLinks />
          </div>

          <div className="flex flex-col gap-6">
            <SocialMedia />
            <div className="divider my-0"></div>
            <Newsletter />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-base-content/60">
              <span>© {currentYear} Echoes of Life. All rights reserved.</span>
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-sm text-base-content/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-error fill-error animate-pulse" />
              <span>for mindful reflection</span>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a
                href="/terms"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Terms
              </a>
              <span className="text-base-content/30">•</span>
              <a
                href="/privacy"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <span className="text-base-content/30">•</span>
              <a
                href="/cookies"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
