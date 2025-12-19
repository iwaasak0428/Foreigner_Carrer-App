export type Language = 'ja' | 'en' | 'vi' | 'zh';

export interface CareerHistory {
    id: string;
    companyName: string;
    role: string;
    startDate: string;
    endDate: string | null; // null means current
    description: string;
    skills: string[];
}

export interface HousingPayment {
    month: string; // YYYY-MM
    status: 'paid' | 'unpaid' | 'late';
    amount: number;
}

export interface UserProfile {
    id: string;
    name: string;
    avatarUrl: string;
    nationality: string;
    visaStatus: string; // e.g., "Specified Skilled Worker (i)"
    visaExpiry: string;
    creditScore: number;
    combatPower: number; // "Sentoryoku"
    careerHistory: CareerHistory[];
    housingPayments: HousingPayment[];
}

export interface JobListing {
    id: string;
    title: string;
    company: string;
    location: string;
    salaryRange: string;
    tags: string[];
    postedDate: string;
    imageUrl?: string;
}
