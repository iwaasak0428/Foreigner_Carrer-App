import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/Card';
import { Globe } from 'lucide-react';

export default function SettingsPage() {
    const { t, language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'ja', label: '日本語', flag: '🇯🇵' },
        { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'zh', label: '中文', flag: '🇨🇳' },
    ];

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">{t('settings.title')}</h1>

            <Card className="p-4 space-y-4">
                <div className="flex items-center space-x-2 text-primary mb-4">
                    <Globe className="w-5 h-5" />
                    <h2 className="font-semibold">{t('settings.language')}</h2>
                </div>

                <div className="grid gap-3">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code as any)}
                            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${language === lang.code
                                    ? 'bg-primary/10 border-primary text-primary'
                                    : 'bg-background border-border hover:bg-secondary'
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-xl">{lang.flag}</span>
                                <span className="font-medium">{lang.label}</span>
                            </div>
                            {language === lang.code && (
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            )}
                        </button>
                    ))}
                </div>
            </Card>
        </div>
    );
}
