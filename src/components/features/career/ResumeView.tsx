import type { UserProfile } from '../../../lib/types';
import { Button } from '../../ui/Button';
import { Download, FileText, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResumeViewProps {
    user: UserProfile;
    onClose: () => void;
}

export function ResumeView({ user, onClose }: ResumeViewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
            <div className="bg-background w-full max-w-md rounded-t-xl sm:rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <h2 className="text-lg font-bold flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-primary" />
                        Generated Resume
                    </h2>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="p-6 overflow-y-auto space-y-6 bg-white text-black">
                    {/* Resume Header */}
                    <div className="text-center border-b-2 border-black pb-4">
                        <h1 className="text-2xl font-bold uppercase tracking-wider">{user.name}</h1>
                        <p className="text-sm text-gray-600">{user.nationality} | {user.visaStatus}</p>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="font-bold border-b border-gray-300 mb-2">WORK EXPERIENCE</h3>
                        <div className="space-y-4">
                            {user.careerHistory.map(job => (
                                <div key={job.id}>
                                    <div className="flex justify-between font-semibold">
                                        <span>{job.companyName}</span>
                                        <span className="text-sm">{job.startDate} - {job.endDate || 'Present'}</span>
                                    </div>
                                    <div className="text-sm italic mb-1">{job.role}</div>
                                    <p className="text-sm text-gray-700">{job.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="font-bold border-b border-gray-300 mb-2">SKILLS</h3>
                        <div className="flex flex-wrap gap-2">
                            {user.careerHistory.flatMap(h => h.skills).map((skill, i) => (
                                <span key={i} className="text-sm bg-gray-100 px-2 py-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-border bg-muted/50">
                    <Button className="w-full" onClick={() => alert('Download PDF Mock')}>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
