import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";

import roboteclogo from "public/work/robotec-logo.png";
import robofeilogo from "public/work/robofei-logo.png";

export const metadata: Metadata = {
  title: "About | Nicolas Alan",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="text-secondary animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello, I&apos;m Nicolas Alan!</p>

            <p>
              I&apos;m a robot engineer, I work specifically with sociable 
              robots that are helping people on a daily basis
            </p>
            <p>
              I really like programming, mainly in Python, but recently I'm learning Javascript
            </p>
            <p>
              Programming and learning how to do something is something 
              that inspires me the most to do my best.
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
            Here are my networks that I use for work :)
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              {new Date().getFullYear() - 2021}+ years of professional
              robot development experience.
            </p>
            <p>
              I started working on a domestic robot competition team RoboCup, where I was captain before leaving. 
              Then I started working at a Robotec startup for service robots. 
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Engineer",
    company: "Robotec",
    time: "2023 -",
    imageSrc: roboteclogo,
    link: "https://robotecsolutions.com/",
  },
  {
    title: "Software Engineer",
    company: "RoboFEI",
    time: "2021 - 2023",
    imageSrc: robofeilogo,
    link: "https://www.linkedin.com/company/robofei/",
  },
];