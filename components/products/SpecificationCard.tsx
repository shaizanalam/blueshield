import { Zap, Settings, ShieldCheck, MapPin, Truck, Box } from 'lucide-react';

interface SpecificationCardProps {
  capacity?: string;
  automation?: string;
  material?: string;
  installation?: string;
  delivery?: string;
  moq?: string;
}

export function SpecificationCard({
  capacity,
  automation,
  material,
  installation,
  delivery,
  moq,
}: SpecificationCardProps) {
  const items = [
    { label: 'Capacity', value: capacity, icon: Zap },
    { label: 'Automation', value: automation, icon: Settings },
    { label: 'Material', value: material, icon: ShieldCheck },
    { label: 'Installation', value: installation, icon: MapPin },
    { label: 'Delivery', value: delivery, icon: Truck },
    { label: 'Min. Order', value: moq, icon: Box },
  ].filter((item) => Boolean(item.value));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="p-3.5 rounded-xl bg-surface border border-border/80 flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-ice-blue flex items-center justify-center shrink-0">
            <item.icon className="w-4 h-4 text-eng-blue" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
              {item.label}
            </span>
            <p className="text-xs font-bold text-navy truncate">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

