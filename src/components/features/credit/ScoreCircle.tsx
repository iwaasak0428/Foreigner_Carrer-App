import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

interface ScoreCircleProps {
    score: number;
    max: number;
    label: string;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function ScoreCircle({ score, max, label, color = 'text-primary', size = 'md' }: ScoreCircleProps) {
    const percentage = Math.min(Math.max((score / max) * 100, 0), 100);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const sizeClasses = {
        sm: 'w-24 h-24',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={cn("relative flex items-center justify-center", sizeClasses[size])}>
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-secondary"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeLinecap="round"
                        className={color}
                    />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className={cn("font-bold tabular-nums", size === 'lg' ? 'text-4xl' : 'text-2xl')}>
                        {score.toLocaleString()}
                    </span>
                </div>
            </div>
            <span className="mt-2 text-sm font-medium text-muted-foreground">{label}</span>
        </div>
    );
}
