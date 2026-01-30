import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "festival" | "tech";
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "group p-6 lg:p-8 rounded-2xl bg-card border border-border",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
          "transition-transform group-hover:scale-110",
          variant === "festival" && "gradient-festival",
          variant === "tech" && "gradient-tech",
          variant === "default" && "gradient-accent"
        )}
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
