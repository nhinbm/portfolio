import { motion } from "framer-motion";
import { LINKS } from "./constants";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  idx: number;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, idx }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className="block text-5xl font-semibold text-foreground transition-colors hover:text-background md:text-7xl"
    >
      {children}.
    </motion.a>
  );
};

const LinksContainer: React.FC = () => {
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20 flex justify-center flex-col h-full">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};
export default LinksContainer;
