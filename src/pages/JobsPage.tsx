import { useLanguage } from '../context/LanguageContext';
import { MOCK_JOBS } from '../lib/mockData';
import { JobList } from '../components/features/jobs/JobList';

export default function JobsPage() {
    const { t } = useLanguage();
    const jobs = MOCK_JOBS;

    return (
        <div className="p-6 pb-24 space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">{t('jobs.title')}</h1>
                <p className="text-sm text-muted-foreground">
                    Find your next opportunity from our partner platform.
                </p>
            </div>

            <JobList jobs={jobs} />
        </div>
    );
}
