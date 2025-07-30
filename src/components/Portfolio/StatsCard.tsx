import { Card } from "@/components/ui/card";

interface StatsCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  gradient?: boolean;
}

const StatsCard = ({ number, label, icon, gradient = false }: StatsCardProps) => {
  return (
    <Card className={`p-6 text-center group hover:shadow-hover transition-all duration-300 transform hover:scale-105 ${gradient ? 'bg-gradient-primary text-white border-0' : 'bg-card shadow-card'}`}>
      <div className={`mx-auto mb-4 w-12 h-12 rounded-lg flex items-center justify-center ${gradient ? 'bg-white/20' : 'bg-primary/10 text-primary'} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className={`text-3xl font-bold mb-2 ${gradient ? 'text-white' : 'text-primary'}`}>
        {number}
      </div>
      <div className={`text-sm font-medium ${gradient ? 'text-white/80' : 'text-muted-foreground'}`}>
        {label}
      </div>
    </Card>
  );
};

export default StatsCard;