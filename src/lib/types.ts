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

export interface BankAccount {
    id: string;
    bankName: string;
    accountNumber: string;
    balance: number;
    currency: string;
    transactions: Transaction[];
}

export interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'credit' | 'debit';
}

export interface VisaStatus {
    type: string;
    number: string;
    expiryDate: string;
    status: 'Active' | 'Expiring Soon' | 'Expired';
    nextRenewalDate: string;
}

export interface Remittance {
    id: string;
    date: string;
    recipient: string;
    amount: number;
    status: 'Completed' | 'Pending' | 'Failed';
    fee: number;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    category: 'finance' | 'insurance' | 'medical' | 'life';
    icon: string;
    status: 'Available' | 'Applied';
}

export interface MunicipalityInfo {
    id: string;
    title: string;
    category: 'garbage' | 'evacuation' | 'event' | 'office';
    content: string;
    date?: string;
}

export interface UserProfile {
    id: string;
    name: string;
    nationality: string;
    visaStatus: string;
    combatPower: number;
    creditScore: number;
    careerHistory: CareerHistory[];
    housingPayments: HousingPayment[];
    bankAccount: BankAccount;
    visaDetails: VisaStatus;
    remittances: Remittance[];
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
