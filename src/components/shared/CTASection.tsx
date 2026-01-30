import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  variant?: "default" | "festival" | "tech";
  showContact?: boolean;
}

const CTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
  showContact = false,
}: CTASectionProps) => {
  return (
    <section
      className={cn(
        "py-16 lg:py-24",
        variant === "festival" && "gradient-festival",
        variant === "tech" && "gradient-tech",
        variant === "default" && "gradient-primary"
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:17359196071">
            <Button variant="secondary" size="xl" className="group">
              <Phone className="w-5 h-5" />
              {primaryCta}
            </Button>
          </a>
          {secondaryCta && (
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <MessageCircle className="w-5 h-5" />
              {secondaryCta}
            </Button>
          )}
        </div>

        {showContact && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>咨询热线：17359196071</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>企业微信咨询</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
