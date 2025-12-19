import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MOCK_USER } from '../../lib/mockData';
import { Timeline } from '../../components/features/career/Timeline';
import { ResumeView } from '../../components/features/career/ResumeView';
import { Button } from '../../components/ui/Button';
import { FileText } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export default function CareerPage() {
    const { t } = useLanguage();
    const [showResume, setShowResume] = useState(false);
    const user = MOCK_USER;

    return (
        <div className="p-6 pb-24 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{t('career.title')}</h1>
                <Button size="sm" onClick={() => setShowResume(true)}>
                    <FileText className="w-4 h-4 mr-2" />
                    {t('career.resume')}
                </Button>
            </div>

            <Timeline history={user.careerHistory} />

            <AnimatePresence>
                {showResume && (
                    <ResumeView user={user} onClose={() => setShowResume(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}
