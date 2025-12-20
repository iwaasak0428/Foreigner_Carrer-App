import type { Remittance as RemittanceType } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { Send, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface RemittanceProps {
    remittances: RemittanceType[];
}

export function Remittance({ remittances }: RemittanceProps) {
    return (
        <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border-none">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-white/10">
                        <Send className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Send Money Home</h3>
                        <p className="text-emerald-100 text-sm mt-1">Fast and secure international transfers</p>
                    </div>
                    <Button className="w-full bg-white text-emerald-700 hover:bg-emerald-50" size="lg">
                        New Transfer
                    </Button>
                </div>
            </Card>

            <div className="space-y-4">
                <h3 className="font-semibold text-lg">Transfer History</h3>
                <div className="space-y-3">
                    {remittances.map((item) => (
                        <Card key={item.id} className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">{item.date}</span>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    {item.status === 'Completed' && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                                    {item.status === 'Pending' && <Clock className="w-3 h-3 text-yellow-500" />}
                                    {item.status === 'Failed' && <XCircle className="w-3 h-3 text-red-500" />}
                                    {item.status}
                                </Badge>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="font-medium">{item.recipient}</p>
                                    <p className="text-xs text-muted-foreground mt-1">Fee: ¥{item.fee}</p>
                                </div>
                                <p className="text-lg font-bold">
                                    ¥{item.amount.toLocaleString()}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
