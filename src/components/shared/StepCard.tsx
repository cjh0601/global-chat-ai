import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
  variant?: "default" | "festival" | "tech";
}

const StepCard = ({
  step,
  icon: Icon,
  title,
  description,
  isLast = false,
  variant = "default",
}: StepCardProps) => {
  return (
    <div className="relative flex gap-4 lg:gap-6">
      {/* Step indicator line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-[calc(100%-4rem)] bg-border" />
      )}

      {/* Step number */}
      <div
        className={cn(
          "relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0",
          "text-lg font-bold",
          variant === "festival" && "gradient-festival text-festival-red-foreground",
          variant === "tech" && "gradient-tech text-primary-foreground",
          variant === "default" && "gradient-primary text-primary-foreground"
        )}
      >
        {step}
      </div>

      {/* Content */}
      <div className="pb-8 lg:pb-12">
        <div className="flex items-center gap-3 mb-2">
          <Icon className={cn(
            "w-5 h-5",
            variant === "festival" && "text-festival-red",
            variant === "tech" && "text-cyan",
            variant === "default" && "text-accent"
          )} />
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
