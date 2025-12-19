import { useLanguage } from '../context/LanguageContext';
import { MOCK_USER } from '../lib/mockData';
import { ScoreCircle } from '../components/features/credit/ScoreCircle';
import { PaymentHistory } from '../components/features/credit/PaymentHistory';
import { Card } from '../components/ui/Card';

export default function CreditPage() {
    const { t } = useLanguage();
    const user = MOCK_USER;

    return (
        <div className="p-6 pb-24 space-y-8">
            <h1 className="text-2xl font-bold">{t('credit.title')}</h1>

            {/* Scores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-card to-secondary/20">
                    <ScoreCircle
                        score={user.combatPower}
                        max={10000}
                        label={t('dashboard.combatPower')}
                        color="text-purple-500"
                        size="lg"
                    />
                    <p className="mt-4 text-center text-sm text-muted-foreground max-w-[200px]">
                        Based on your skills, experience, and reliability.
                    </p>
                </Card>
                <Card className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-card to-secondary/20">
                    <ScoreCircle
                        score={user.creditScore}
                        max={850}
                        label={t('dashboard.creditScore')}
                        color="text-green-500"
                        size="lg"
                    />
                    <p className="mt-4 text-center text-sm text-muted-foreground max-w-[200px]">
                        Based on your housing payment history and financial stability.
                    </p>
                </Card>
            </div>

            {/* Payment History */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">{t('credit.paymentHistory')}</h2>
                <PaymentHistory payments={user.housingPayments} />
            </div>
        </div>
    );
}
