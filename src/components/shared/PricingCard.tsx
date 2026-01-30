import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  badge?: string;
  variant?: "default" | "festival";
}

const PricingCard = ({
  name,
  price,
  originalPrice,
  period = "/月",
  description,
  features,
  ctaText,
  highlighted = false,
  badge,
  variant = "default",
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative p-6 lg:p-8 rounded-2xl border transition-all duration-300",
        highlighted
          ? variant === "festival"
            ? "bg-gradient-to-b from-festival-red/5 to-festival-gold/5 border-festival-red/30 shadow-festival"
            : "bg-gradient-to-b from-accent/5 to-accent/10 border-accent/30 shadow-glow"
          : "bg-card border-border hover:shadow-lg hover:-translate-y-1"
      )}
    >
      {badge && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold",
            variant === "festival"
              ? "gradient-festival text-festival-red-foreground"
              : "gradient-accent text-accent-foreground"
          )}
        >
          {badge}
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="text-center mb-6">
        {originalPrice && (
          <span className="text-sm text-muted-foreground line-through mr-2">
            ¥{originalPrice}
          </span>
        )}
        <span
          className={cn(
            "text-4xl font-bold",
            price === "免费" || price === "0"
              ? variant === "festival"
                ? "text-gradient-festival"
                : "text-gradient-accent"
              : "text-foreground"
          )}
        >
          {price === "免费" || price === "0" ? "免费" : `¥${price}`}
        </span>
        {price !== "免费" && price !== "0" && (
          <span className="text-muted-foreground">{period}</span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                "w-5 h-5 shrink-0 mt-0.5",
                variant === "festival" ? "text-festival-red" : "text-accent"
              )}
            />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={
          highlighted
            ? variant === "festival"
              ? "festival"
              : "hero"
            : "outline"
        }
        size="lg"
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;
