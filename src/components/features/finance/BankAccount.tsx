import type { BankAccount as BankAccountType } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { ArrowDownLeft, ArrowUpRight, Wallet } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useLanguage } from '../../../context/LanguageContext';

interface BankAccountProps {
    account: BankAccountType;
}

export function BankAccount({ account }: BankAccountProps) {
    const { t } = useLanguage();

    return (
        <div className="space-y-6">
            {/* Balance Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <p className="text-blue-100 text-sm mb-1">{account.bankName}</p>
                        <p className="text-blue-200 text-xs font-mono">{account.accountNumber}</p>
                    </div>
                    <Wallet className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                    <p className="text-blue-100 text-sm mb-1">Total Balance</p>
                    <h2 className="text-3xl font-bold">
                        {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: account.currency }).format(account.balance)}
                    </h2>
                </div>
            </Card>

            {/* Transactions */}
            <div className="space-y-4">
                <h3 className="font-semibold text-lg">{t('dashboard.recentActivity')}</h3>
                <div className="space-y-3">
                    {account.transactions.map((transaction) => (
                        <Card key={transaction.id} className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    "p-2 rounded-full",
                                    transaction.type === 'credit' ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                                )}>
                                    {transaction.type === 'credit' ? (
                                        <ArrowDownLeft className="w-4 h-4" />
                                    ) : (
                                        <ArrowUpRight className="w-4 h-4" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium">{transaction.description}</p>
                                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                                </div>
                            </div>
                            <span className={cn(
                                "font-bold",
                                transaction.type === 'credit' ? "text-green-500" : "text-foreground"
                            )}>
                                {transaction.type === 'credit' ? '+' : '-'}
                                {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: account.currency }).format(transaction.amount)}
                            </span>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
