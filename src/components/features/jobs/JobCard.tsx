import type { JobListing } from '../../../lib/types';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { MapPin, Building2, Banknote, Clock } from 'lucide-react';

interface JobCardProps {
    job: JobListing;
}

export function JobCard({ job }: JobCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
            <div className="relative h-32 overflow-hidden">
                <img
                    src={job.imageUrl}
                    alt={job.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white font-bold text-lg leading-tight">{job.title}</h3>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {job.company}
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {job.postedDate}
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {job.location}
                    </div>
                    <div className="flex items-center text-sm font-medium">
                        <Banknote className="w-4 h-4 mr-2 text-green-500" />
                        {job.salaryRange}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                    {job.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
}
