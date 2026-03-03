"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { Linkedin } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";
import { useTheme } from "next-themes";

const SocialMediaButtons = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  const iconColor = theme === "dark" ? "#fff" : "#000";

  const BUTTONS = [
    {
      name: "Github",
      href: config.social.github,
      icon: <SiGithub size={"24"} color={iconColor} />,
    },
    {
      name: "LinkedIn",
      href: config.social.linkedin,
      icon: <SiLinkedin size={"24"} color={iconColor} />,
    },
    //{
      //name: "Twitter",
      //href: config.social.twitter,
      //icon: <SiTwitter size={"24"} color={iconColor} />,
    //},
    {
      name: "Instagram",
      href: config.social.instagram,
      icon: <SiInstagram size={"24"} color={iconColor} />,
    },
  ];

  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map(
          (button) =>
            button.href && (
              <Link href={button.href} key={button.name} target="_blank">
                <Button variant={"ghost"}>{button.icon}</Button>
              </Link>
            )
        )}
    </div>
  );
};

export default SocialMediaButtons;
