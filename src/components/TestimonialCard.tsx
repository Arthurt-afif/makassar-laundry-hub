import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const TestimonialCard = ({ name, rating, comment, avatar }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-lg">
            {avatar}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground italic">"{comment}"</p>
      </CardContent>
    </Card>
  );
};
