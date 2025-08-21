import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Data for footer content — replace or fetch as needed
const contactInfo = {
  phone: "+91 9877278125",
  email: "info@makeover.com",
  address: "Leena Pandey, Vastu Ganga Colony, Gola Road, Patna, Bihar, 801503, India",
};

const socialLinks = [
  { href: "https://facebook.com/yourmakeoverpage", label: "Facebook", icon: FaFacebookF },
  { href: "https://instagram.com/yourmakeoverpage", label: "Instagram", icon: FaInstagram },
  { href: "https://twitter.com/yourmakeoverpage", label: "Twitter", icon: FaTwitter },
  { href: "https://pinterest.com/yourmakeoverpage", label: "Pinterest", icon: FaPinterestP },
  { href: "https://youtube.com/yourmakeoverchannel", label: "YouTube", icon: FaYoutube },
];

const quickLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#booking", label: "Book Appointment" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const brandAbout =
  "Dedicated to bringing out your best with expert makeup artistry tailored to every occasion—bridal, party, everyday glam, and special events. Experience flawless, long-lasting looks designed to boost your confidence and turn heads.";

const Footer = () => (
  <footer className="bg-pink-700 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
      {/* Contact With Us */}
      <div>
  <h3 className="text-2xl font-bold mb-4">Contact With Us</h3>
  <p className="flex items-center space-x-3 mb-3 text-pink-200">
    <FaPhoneAlt className="text-pink-400" />
    <span>{contactInfo.phone}</span>
  </p>
  <p className="flex items-center space-x-3 mb-3 text-pink-200">
    <FaEnvelope className="text-pink-400 " />
    <span>{contactInfo.email}</span>
  </p>
  <p className="flex ml-2 items-center space-x-3 text-pink-200 max-w-xs leading-relaxed">
    <FaMapMarkerAlt className="text-pink-400 size-6 -ml-1" />
    <span>{contactInfo.address}</span>
  </p>
  {/* Social Media Icons */}
  <div className="mt-5 -ml-35 flex justify-center space-x-6 text-pink-100">
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="hover:text-white transition"
      >
        <Icon size={24} />
      </a>
    ))}
  </div>
</div>


      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-3 text-pink-200">
          {quickLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-white transition">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Brand About */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Makeover</h3>
        <p className="text-pink-200 max-w-sm leading-relaxed">{brandAbout}</p>
      </div>
    </div>

    

    <hr className="border-pink-600 my-8 max-w-7xl mx-auto" />

    <p className="text-center text-pink-300 text-sm">
      &copy; {new Date().getFullYear()} Makeover. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
