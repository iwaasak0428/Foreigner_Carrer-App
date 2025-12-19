import { useLanguage } from '../context/LanguageContext';
import { MOCK_USER } from '../lib/mockData';
import { ScoreCircle } from '../components/features/credit/ScoreCircle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Building } from 'lucide-react';

export default function Dashboard() {
    const { t } = useLanguage();
    const user = MOCK_USER;

    return (
        <div className="p-6 space-y-8 pb-24">
            {/* Header */}
            <div className="flex items-center space-x-4">
                <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                />
                <div>
                    <p className="text-sm text-muted-foreground">{t('dashboard.welcome')}</p>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <Badge variant="secondary" className="mt-1">{user.visaStatus}</Badge>
                </div>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 flex flex-col items-center bg-card/50 backdrop-blur-sm border-primary/20">
                    <ScoreCircle
                        score={user.combatPower}
                        max={10000}
                        label={t('dashboard.combatPower')}
                        color="text-purple-500"
                    />
                </Card>
                <Card className="p-4 flex flex-col items-center bg-card/50 backdrop-blur-sm border-primary/20">
                    <ScoreCircle
                        score={user.creditScore}
                        max={850}
                        label={t('dashboard.creditScore')}
                        color="text-green-500"
                    />
                </Card>
            </div>

            {/* Recent Career */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{t('career.title')}</h2>
                </div>
                <Card className="p-4 space-y-4">
                    {user.careerHistory.slice(0, 1).map((career) => (
                        <div key={career.id} className="flex items-start space-x-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Building className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{career.companyName}</h3>
                                <p className="text-sm text-muted-foreground">{career.role}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {career.skills.map((skill) => (
                                        <Badge key={skill} variant="outline" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Card>
            </div>

            {/* Quick Stats / Info */}
            <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 space-y-2">
                    <p className="text-xs text-muted-foreground">Visa Expiry</p>
                    <p className="font-mono font-bold">{user.visaExpiry}</p>
                </Card>
                <Card className="p-4 space-y-2">
                    <p className="text-xs text-muted-foreground">Nationality</p>
                    <p className="font-medium">{user.nationality}</p>
                </Card>
            </div>
        </div>
    );
}
