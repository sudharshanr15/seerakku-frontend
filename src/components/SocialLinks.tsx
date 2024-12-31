import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const social_links: {
  name: string;
  href: "";
  icon: React.ReactNode;
}[] = [
  {
    name: "Facebook",
    href: "",
    icon: <FacebookIcon fontSize="large" />,
  },
  {
    name: "Instagram",
    href: "",
    icon: <InstagramIcon fontSize="large" />,
  },
  {
    name: "Youtube",
    href: "",
    icon: <YouTubeIcon fontSize="large" />,
  },
];

function SocialLinks() {
  return (
    <div className="flex gap-7">
      {social_links.map((link, index) => (
        <a href={link.href} className="text-white" key={index}>
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
