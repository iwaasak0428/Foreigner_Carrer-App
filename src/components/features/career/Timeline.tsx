import type { CareerHistory } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Calendar } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface TimelineProps {
    history: CareerHistory[];
}

export function Timeline({ history }: TimelineProps) {
    return (
        <div className="relative space-y-8 pl-8 before:absolute before:inset-0 before:ml-3.5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
            {history.map((item, index) => (
                <div key={item.id} className="relative">
                    {/* Dot */}
                    <div className={cn(
                        "absolute -left-[34px] top-1 h-4 w-4 rounded-full border-2 border-background",
                        index === 0 ? "bg-primary animate-pulse" : "bg-muted-foreground"
                    )} />

                    <Card className="p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                                <h3 className="text-lg font-bold text-primary">{item.companyName}</h3>
                                <p className="font-medium text-foreground">{item.role}</p>
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full w-fit">
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>{item.startDate} - {item.endDate || 'Present'}</span>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {item.skills.map(skill => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
