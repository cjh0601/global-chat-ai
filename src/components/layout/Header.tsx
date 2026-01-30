import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

interface HeaderProps {
  variant?: "default" | "festival" | "tech";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="跨境聚聊AI版" 
              className="h-10 transition-transform group-hover:scale-105" 
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;