import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/Card';
import { User, Settings, LogOut, ChevronRight } from 'lucide-react';
import { MOCK_USER } from '../lib/mockData';
import { Link } from 'react-router-dom';

export default function MenuPage() {
    const { t, language, setLanguage } = useLanguage();
    const user = MOCK_USER;

    const languages = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'ja', label: '日本語', flag: '🇯🇵' },
        { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'zh', label: '中文', flag: '🇨🇳' },
    ] as const;

    return (
        <div className="p-6 pb-24 space-y-6">
            <h1 className="text-2xl font-bold">{t('menu.title')}</h1>

            {/* Profile Summary */}
            <Card className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="font-bold text-lg">{user.name}</h2>
                    <p className="text-sm text-muted-foreground">{user.nationality}</p>
                </div>
            </Card>

            <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground px-1">{t('settings.language')}</h3>
                <Card className="divide-y divide-border">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-xl">{lang.flag}</span>
                                <span className="font-medium">{lang.label}</span>
                            </div>
                            {language === lang.code && (
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            )}
                        </button>
                    ))}
                </Card>
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground px-1">Account</h3>
                <Card className="divide-y divide-border">
                    <Link to="/settings" className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors first:rounded-t-lg last:rounded-b-lg">
                        <div className="flex items-center gap-3">
                            <Settings className="w-5 h-5 text-muted-foreground" />
                            <span className="font-medium">{t('menu.settings')}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                    <button className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors first:rounded-t-lg last:rounded-b-lg text-red-500">
                        <div className="flex items-center gap-3">
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">{t('menu.logout')}</span>
                        </div>
                    </button>
                </Card>
            </div>
        </div>
    );
}
