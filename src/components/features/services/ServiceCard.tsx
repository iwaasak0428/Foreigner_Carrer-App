import type { Service } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { CreditCard, Shield, Stethoscope, HelpingHand, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const Icon = {
        finance: CreditCard,
        insurance: Shield,
        medical: Stethoscope,
        life: HelpingHand,
    }[service.category] || HelpingHand;

    return (
        <Card className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                </div>
                {service.status === 'Applied' && (
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Applied
                    </Badge>
                )}
            </div>

            <div className="flex-1 space-y-2 mb-4">
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>

            <Button
                className="w-full"
                variant={service.status === 'Applied' ? "outline" : "default"}
                disabled={service.status === 'Applied'}
            >
                {service.status === 'Applied' ? 'View Details' : 'Apply Now'}
            </Button>
        </Card>
    );
}
