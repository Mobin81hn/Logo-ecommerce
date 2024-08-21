import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/social";

const Footer = () => {
  return (
    <footer className="w-[100%] lg:w-[90%] pl-6 pr-1 xs:px-16 sm:px-20 md:px-8 py-12 mx-auto">
      <h2 className="text-2xl font-bold mb-10">Shoppee</h2>
      <div className="flex justify-between gap-8 flex-wrap">
        {FOOTER_LINKS.map((link, i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold mb-6">{link.title}</h2>
            <div className="flex flex-col items-start gap-4">
              {link.links.map((targetLink, i) => (
                <Link className="text-zinc-500" key={i} to="/">
                  {targetLink}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {FOOTER_CONTACT_INFO.title}
          </h2>
          <div className="flex flex-col gap-4">
            {FOOTER_CONTACT_INFO.links.map((link, i) => (
              <p className="flex items-center gap-4 text-zinc-500" key={i}>
                <span className="text-base">{link.label}:</span>
                <span className="text-base">{link.value}</span>
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">{SOCIALS.title}</h2>
          <div className="flex items-center gap-4">
            {SOCIALS.links.map((image, i) => (
              <Link className="text-zinc-500" key={i} to="/">
                <img src={image} alt="social-media" className="w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
