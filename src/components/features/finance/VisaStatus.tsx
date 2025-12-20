import type { VisaStatus as VisaStatusType } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Calendar, FileCheck, AlertTriangle } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface VisaStatusProps {
    visa: VisaStatusType;
}

export function VisaStatus({ visa }: VisaStatusProps) {
    const isExpiringSoon = visa.status === 'Expiring Soon';

    return (
        <div className="space-y-6">
            <Card className="p-6 space-y-6">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-lg mb-1">Residence Card</h3>
                        <p className="text-sm text-muted-foreground">{visa.type}</p>
                    </div>
                    <Badge variant={isExpiringSoon ? "destructive" : "default"}>
                        {visa.status}
                    </Badge>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/50 space-y-1">
                        <p className="text-xs text-muted-foreground">Card Number</p>
                        <p className="font-mono font-medium tracking-wider">{visa.number}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-secondary/50 space-y-1">
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                <Calendar className="w-3 h-3" />
                                <span className="text-xs">Expiry Date</span>
                            </div>
                            <p className={cn("font-medium", isExpiringSoon && "text-destructive")}>
                                {visa.expiryDate}
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/50 space-y-1">
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                <FileCheck className="w-3 h-3" />
                                <span className="text-xs">Next Renewal</span>
                            </div>
                            <p className="font-medium">{visa.nextRenewalDate}</p>
                        </div>
                    </div>
                </div>

                {isExpiringSoon && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-500/10 text-yellow-500">
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        <div className="text-sm">
                            <p className="font-bold mb-1">Renewal Required</p>
                            <p className="opacity-90">Your visa is expiring soon. Please prepare your documents for renewal.</p>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}
