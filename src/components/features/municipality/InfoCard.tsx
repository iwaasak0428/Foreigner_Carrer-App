import type { MunicipalityInfo } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { Trash2, Tent, Calendar, Building2 } from 'lucide-react';

interface InfoCardProps {
    info: MunicipalityInfo;
}

export function InfoCard({ info }: InfoCardProps) {
    const Icon = {
        garbage: Trash2,
        evacuation: Tent,
        event: Calendar,
        office: Building2,
    }[info.category] || Building2;

    const colorClass = {
        garbage: "bg-orange-500/10 text-orange-500",
        evacuation: "bg-red-500/10 text-red-500",
        event: "bg-purple-500/10 text-purple-500",
        office: "bg-blue-500/10 text-blue-500",
    }[info.category];

    return (
        <Card className="p-4 flex items-start gap-4">
            <div className={`p-3 rounded-lg shrink-0 ${colorClass}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
                <h3 className="font-bold">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.content}</p>
                {info.date && (
                    <p className="text-xs text-muted-foreground pt-1">Updated: {info.date}</p>
                )}
            </div>
        </Card>
    );
}
