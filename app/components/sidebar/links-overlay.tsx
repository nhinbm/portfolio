import LinksContainer from "./links-container";
import SocialMedia from "./social-media";

const LinksOverlay: React.FC = () => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      <LinksContainer />
      <SocialMedia />
    </nav>
  );
};
export default LinksOverlay;
