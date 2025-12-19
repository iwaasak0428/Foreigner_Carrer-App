import type { HousingPayment } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface PaymentHistoryProps {
    payments: HousingPayment[];
}

export function PaymentHistory({ payments }: PaymentHistoryProps) {
    return (
        <Card className="overflow-hidden">
            <div className="p-4 bg-muted/50 border-b border-border">
                <h3 className="font-semibold">Payment History</h3>
            </div>
            <div className="divide-y divide-border">
                {payments.map((payment, index) => (
                    <div key={index} className="p-4 flex items-center justify-between hover:bg-muted/20 transition-colors">
                        <div className="flex items-center space-x-3">
                            {payment.status === 'paid' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                            {payment.status === 'unpaid' && <XCircle className="w-5 h-5 text-red-500" />}
                            {payment.status === 'late' && <AlertCircle className="w-5 h-5 text-yellow-500" />}

                            <span className="font-medium">{payment.month}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-muted-foreground">¥{payment.amount.toLocaleString()}</span>
                            <span className={cn(
                                "text-xs px-2 py-1 rounded-full capitalize",
                                {
                                    'bg-green-500/10 text-green-500': payment.status === 'paid',
                                    'bg-red-500/10 text-red-500': payment.status === 'unpaid',
                                    'bg-yellow-500/10 text-yellow-500': payment.status === 'late',
                                }
                            )}>
                                {payment.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
