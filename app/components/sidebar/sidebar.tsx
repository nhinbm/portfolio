import { useState } from "react";
import HamburgerButton from "./hamburger-button";
import { AnimatePresence } from "motion/react";
import LinksOverlay from "./links-overlay";

const Sidebar: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <section>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </section>
  );
};
export default Sidebar;
