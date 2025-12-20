import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MOCK_USER } from '../lib/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { BankAccount } from '../components/features/finance/BankAccount';
import { VisaStatus } from '../components/features/finance/VisaStatus';
import { Remittance } from '../components/features/finance/Remittance';
import { ScoreCircle } from '../components/features/credit/ScoreCircle';
import { PaymentHistory } from '../components/features/credit/PaymentHistory';
import { Card } from '../components/ui/Card';

export default function FinancePage() {
    const { t } = useLanguage();
    const user = MOCK_USER;
    const [activeTab, setActiveTab] = useState('bank');

    return (
        <div className="p-6 pb-24 space-y-6">
            <h1 className="text-2xl font-bold">{t('finance.title')}</h1>

            <Tabs className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="bank" activeValue={activeTab} onValueChange={setActiveTab}>{t('finance.bank')}</TabsTrigger>
                    <TabsTrigger value="visa" activeValue={activeTab} onValueChange={setActiveTab}>{t('finance.visa')}</TabsTrigger>
                    <TabsTrigger value="remittance" activeValue={activeTab} onValueChange={setActiveTab}>{t('finance.remittance')}</TabsTrigger>
                    <TabsTrigger value="credit" activeValue={activeTab} onValueChange={setActiveTab}>{t('finance.credit')}</TabsTrigger>
                </TabsList>

                <TabsContent value="bank" activeValue={activeTab}>
                    <BankAccount account={user.bankAccount} />
                </TabsContent>

                <TabsContent value="visa" activeValue={activeTab}>
                    <VisaStatus visa={user.visaDetails} />
                </TabsContent>

                <TabsContent value="remittance" activeValue={activeTab}>
                    <Remittance remittances={user.remittances} />
                </TabsContent>

                <TabsContent value="credit" activeValue={activeTab} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-card to-secondary/20">
                            <ScoreCircle
                                score={user.combatPower}
                                max={10000}
                                label={t('dashboard.combatPower')}
                                color="text-purple-500"
                                size="lg"
                            />
                        </Card>
                        <Card className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-card to-secondary/20">
                            <ScoreCircle
                                score={user.creditScore}
                                max={850}
                                label={t('dashboard.creditScore')}
                                color="text-green-500"
                                size="lg"
                            />
                        </Card>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">{t('credit.paymentHistory')}</h2>
                        <PaymentHistory payments={user.housingPayments} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
