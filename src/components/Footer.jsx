import { profile } from "../data/profile";
export default function Footer() {
  return (<footer className="foot wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span></footer>);
}
