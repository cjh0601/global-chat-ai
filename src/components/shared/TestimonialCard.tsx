import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  variant?: "default" | "festival";
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  variant = "default",
}: TestimonialCardProps) => {
  return (
    <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
      <Quote
        className={cn(
          "w-8 h-8 mb-4",
          variant === "festival" ? "text-festival-red/30" : "text-accent/30"
        )}
      />
      <p className="text-foreground leading-relaxed mb-6">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold",
            variant === "festival"
              ? "gradient-festival text-festival-red-foreground"
              : "gradient-primary text-primary-foreground"
          )}
        >
          {author[0]}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
