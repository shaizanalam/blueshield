import type { Specification } from '@/types';

interface SpecificationTableProps {
  specifications: Specification[];
  className?: string;
}

export function SpecificationTable({ specifications, className = '' }: SpecificationTableProps) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className={`overflow-hidden rounded-2xl border border-border ${className}`}>
      <table className="w-full text-left border-collapse text-sm">
        <tbody className="divide-y divide-border">
          {specifications.map((spec, i) => (
            <tr key={i} className="hover:bg-surface/50 transition-colors">
              <td className="py-3.5 px-5 font-semibold text-white w-1/3 bg-surface/40 border-r border-border">
                {spec.label}
              </td>
              <td className="py-3.5 px-5 text-text">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

