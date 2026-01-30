import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  variant?: "default" | "festival" | "tech";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 每个页面独立，导航项根据当前variant显示不同的CTA
  const getCtaText = () => {
    switch (variant) {
      case "festival":
        return "立即领取";
      case "tech":
        return "免费体验";
      default:
        return "免费试用";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
              variant === "festival" ? "gradient-festival" : 
              variant === "tech" ? "gradient-tech" : "gradient-accent"
            )}>
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              跨境<span className={cn(
                variant === "festival" ? "text-gradient-festival" : 
                variant === "tech" ? "text-gradient-primary" : "text-gradient-accent"
              )}>聚聊</span>
            </span>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant={variant === "festival" ? "festival" : variant === "tech" ? "tech" : "hero"} 
              size="lg"
            >
              {getCtaText()}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="px-4">
              <Button 
                variant={variant === "festival" ? "festival" : variant === "tech" ? "tech" : "hero"} 
                size="lg" 
                className="w-full"
              >
                {getCtaText()}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
