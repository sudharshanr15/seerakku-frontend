import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const team_list: {
  name: string;
  position: string;
  social_handles?: {
    name: string;
    icon: React.ReactNode;
    href: string;
  }[];
}[] = [
  {
    name: "Dinesh Kshatriyan",
    position: "Co-Founder",
    social_handles: [
      {
        name: "Facebook",
        icon: <FacebookIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Instagram",
        icon: <InstagramIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Youtube",
        icon: <YouTubeIcon fontSize="large" />,
        href: "",
      },
    ],
  },
  {
    name: "Janaganandhini Dinesh",
    position: "Co-Founder",
    social_handles: [
      {
        name: "Facebook",
        icon: <FacebookIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Instagram",
        icon: <InstagramIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Youtube",
        icon: <YouTubeIcon fontSize="large" />,
        href: "",
      },
    ],
  },
  {
    name: "Padmavathi S",
    position: "Managing Trustee",
    social_handles: [
      {
        name: "Facebook",
        icon: <FacebookIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Instagram",
        icon: <InstagramIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Youtube",
        icon: <YouTubeIcon fontSize="large" />,
        href: "",
      },
    ],
  },
  {
    name: "Sivakumar S",
    position: "Head of Projects",
    social_handles: [
      {
        name: "Facebook",
        icon: <FacebookIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Instagram",
        icon: <InstagramIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Youtube",
        icon: <YouTubeIcon fontSize="large" />,
        href: "",
      },
    ],
  },
  {
    name: "SP Harish",
    position: "Heaf of Corporate Volunteering",
    social_handles: [
      {
        name: "Facebook",
        icon: <FacebookIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Instagram",
        icon: <InstagramIcon fontSize="large" />,
        href: "",
      },
      {
        name: "Youtube",
        icon: <YouTubeIcon fontSize="large" />,
        href: "",
      },
    ],
  },
];

function Team() {
  return (
    <section className="layout-section-xl">
      <h1 className="heading-2 text-center">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {team_list.map((ele, index) => (
          <div key={index}>
            <div className="aspect-video w-full bg-gray-300 mb-5"></div>
            <div className="text-center">
              <h4 className="font-bold text-xl mb-2">{ele.name}</h4>
              <p className="text-lg mb-2">{ele.position}</p>
              <div className="flex gap-5 items-center justify-center">
                {ele.social_handles?.map((media, media_index) => (
                  <a href={media.href} target="_blank" key={media_index}>
                    {media.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
