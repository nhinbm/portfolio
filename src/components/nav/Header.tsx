"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/nhinguyen05072003/", Icon: SiLinkedin },
  { href: "https://github.com/nhinbm", Icon: SiGithub },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-background-blur backdrop-blur-md">
      <MyLinks />

      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-foreground"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        <OutlineButton onClick={() => window.open("/nhi-nguyen-resume.pdf")}>
          My Resume
        </OutlineButton>
      </div>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    {socialLinks.map(({ href, Icon }) => (
      <Link
        key={href}
        className="text-foreground hover:text-primary transition-colors"
        href={href}
        target="_blank"
        rel="nofollow"
      >
        <Icon />
      </Link>
    ))}
  </div>
);
