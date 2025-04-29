import { motion } from "framer-motion";
import { SOCIAL_MEDIA } from "./constants";

const SocialMedia: React.FC = () => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_MEDIA.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component
                className="text-xl text-foreground transition-colors hover:text-background"
                size={32}
              />
            </motion.a>
          );
        })}
      </div>
    </>
  );
};
export default SocialMedia;
