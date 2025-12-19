import { useState } from 'react';
import type { JobListing } from '../../../lib/types';
import { JobCard } from './JobCard';
import { Search } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface JobListProps {
    jobs: JobListing[];
}

export function JobList({ jobs }: JobListProps) {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder={t('jobs.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border-transparent focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                />
            </div>

            <div className="space-y-4">
                {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}

                {filteredJobs.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                        No jobs found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
}
