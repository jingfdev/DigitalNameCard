import { useState, useEffect } from "react";
import { 
  SiGithub, 
  SiLinkedin, 
  SiFacebook, 
  SiTelegram 
} from "react-icons/si";
import { Mail, User, Share2, Code2 } from "lucide-react";
import profileImage from "@assets/profile.jpg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jingfdev",
      icon: SiGithub,
    },
    {
      name: "Email",
      url: "mailto:jingfongtan@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jingfong-tan/",
      icon: SiLinkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/jingfongTANN",
      icon: SiFacebook,
    },
    {
      name: "Telegram",
      url: "https://t.me/jingfong_TAN",
      icon: SiTelegram,
    }
  ];

  const handleSocialClick = (url: string, platform: string) => {
    console.log(`Clicked: ${platform} - ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Main Card Container */}
        <div className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-600 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-5 min-h-[500px]">
            
            {/* Profile Image Section - Left Side */}
            <div className="md:col-span-2 relative">
              <img 
                src={profileImage}
                alt="JINGFONG TAN - Web/App Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section - Right Side */}
            <div className="md:col-span-3 p-8 flex flex-col justify-center space-y-8">
              
              {/* Name and Title */}
              <div className={`space-y-3 transition-all duration-500 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                  JINGFONG TAN
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  Web/App Developer
                </p>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
              </div>
              
              {/* About Me Section */}
              <div className={`space-y-4 transition-all duration-500 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-blue-500 font-semibold text-lg flex items-center gap-2">
                  <User className="w-5 h-5" />
                  About Me
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  I'm a web and app developer passionate about full-stack development. I'm always exploring ways to improve my skills both Technical and Social Skills. Let's connect and build something amazing together.
                </p>
              </div>
              
              {/* Social Media Links */}
              <div className={`space-y-4 transition-all duration-500 delay-400 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-blue-500 font-semibold text-lg flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Let's Connect
                </h2>
                
                {/* Social Media Grid */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={social.name}
                        onClick={() => handleSocialClick(social.url, social.name)}
                        className="bg-gray-100 hover:bg-gray-200 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                        title={social.name}
                      >
                        <IconComponent className="text-gray-600 hover:text-gray-800 text-xl transition-colors duration-300" />
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Status and Skills Footer */}
              <div className={`flex justify-between items-center transition-all duration-500 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 text-sm">Available for projects</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className={`text-center mt-6 text-gray-400 text-sm transition-all duration-500 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>Digital ID Card • 2025</p>
        </div>
      </div>
    </div>
  );
}
