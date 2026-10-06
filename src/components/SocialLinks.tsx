import { profile } from "@/data/profile";
import { LinkedIn, Mail } from "./Icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul role="list" className={`social-links ${className}`}>
      <li>
        <a className="link" href={`mailto:${profile.email}`}>
          <Mail size={16} /> {profile.email}
        </a>
      </li>
      <li>
        <a className="link link--up" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn size={15} /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </li>
    </ul>
  );
}
