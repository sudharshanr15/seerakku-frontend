import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import XIcon from '@mui/icons-material/X';

const social_links: {
  name: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
  name: "LinkedIn",
  href: "https://in.linkedin.com/company/seerakku",
  icon: <LinkedInIcon className=' hover:text-sky-500' fontSize="large" />,
},
{
  name: "Instagram",
  href: "https://www.instagram.com/seerakku/",
  icon: <InstagramIcon className=' hover:text-pink-500' fontSize="large" />,
},
{
  name: "X",
  href: 'https://twitter.com/0xSeerakku',
  icon: <XIcon className=' hover:text-blue-500' fontSize="large" />,
},
{
  name: "WhatsApp",
  href: "https://chat.whatsapp.com/F2R1drTKrFoGCJjB7sgC4k",
  icon: <WhatsappIcon className='hover:text-green-500' fontSize='large' />
}
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
