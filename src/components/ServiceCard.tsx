import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration: string;
}

export const ServiceCard = ({ icon: Icon, title, description, price, duration }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Harga</span>
          <span className="font-semibold text-primary">{price}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Waktu</span>
          <span className="font-medium">{duration}</span>
        </div>
        <Button className="w-full mt-4" variant="default">
          Chat WA untuk Pesan
        </Button>
      </CardContent>
    </Card>
  );
};
