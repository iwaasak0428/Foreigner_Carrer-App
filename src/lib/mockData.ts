import type { UserProfile, JobListing, Service, MunicipalityInfo } from './types';

export const MOCK_USER: UserProfile = {
    id: 'u1',
    name: 'Nguyen Van A',
    nationality: 'Vietnam',
    visaStatus: 'Specified Skilled Worker (i)',
    creditScore: 720,
    combatPower: 8500,
    careerHistory: [
        {
            id: 'c1',
            companyName: 'Tokyo Construction Corp.',
            role: 'Site Foreman',
            startDate: '2023-04-01',
            endDate: null,
            description: 'Leading a team of 5 workers in residential construction. Responsible for safety checks and daily reporting.',
            skills: ['Team Leadership', 'Safety Management', 'Japanese N3'],
        },
        {
            id: 'c2',
            companyName: 'Osaka Foods Ltd.',
            role: 'Food Processing Staff',
            startDate: '2020-04-01',
            endDate: '2023-03-31',
            description: 'Operated food processing machinery and maintained hygiene standards.',
            skills: ['Machine Operation', 'Hygiene Control', 'Japanese N4'],
        },
    ],
    housingPayments: [
        { month: '2024-03', status: 'paid', amount: 55000 },
        { month: '2024-02', status: 'paid', amount: 55000 },
        { month: '2024-01', status: 'paid', amount: 55000 },
        { month: '2023-12', status: 'paid', amount: 55000 },
        { month: '2023-11', status: 'late', amount: 55000 },
        { month: '2023-10', status: 'paid', amount: 55000 },
    ],
    bankAccount: {
        id: 'ba1',
        bankName: 'Yucho Bank',
        accountNumber: '1234-5678-9012',
        balance: 1250000,
        currency: 'JPY',
        transactions: [
            { id: 't1', date: '2024-03-15', description: 'Salary', amount: 250000, type: 'credit' },
            { id: 't2', date: '2024-03-10', description: 'Rent', amount: 55000, type: 'debit' },
            { id: 't3', date: '2024-03-05', description: 'Supermarket', amount: 4500, type: 'debit' },
        ]
    },
    visaDetails: {
        type: 'Specified Skilled Worker (i)',
        number: '123456789012',
        expiryDate: '2025-04-01',
        status: 'Active',
        nextRenewalDate: '2025-02-01'
    },
    remittances: [
        { id: 'r1', date: '2024-02-20', recipient: 'Family (Nguyen Van A)', amount: 50000, status: 'Completed', fee: 500 },
        { id: 'r2', date: '2024-01-20', recipient: 'Family (Nguyen Van A)', amount: 50000, status: 'Completed', fee: 500 },
    ]
};

export const MOCK_SERVICES: Service[] = [
    { id: 's1', title: 'Credit Card Application', description: 'Apply for a credit card with high approval rate for foreigners.', category: 'finance', icon: 'CreditCard', status: 'Available' },
    { id: 's2', title: 'Personal Insurance', description: 'Affordable health and life insurance plans.', category: 'insurance', icon: 'Shield', status: 'Available' },
    { id: 's3', title: 'Medical Hotline', description: '24/7 medical support in your native language.', category: 'medical', icon: 'Stethoscope', status: 'Applied' },
    { id: 's4', title: 'Life Support', description: 'Assistance with gas, water, and electricity setup.', category: 'life', icon: 'HelpingHand', status: 'Available' },
];

export const MOCK_MUNICIPALITY: MunicipalityInfo[] = [
    { id: 'm1', title: 'Garbage Collection Schedule', category: 'garbage', content: 'Burnable: Mon/Thu, Non-burnable: Wed', date: '2024-04-01' },
    { id: 'm2', title: 'Evacuation Centers', category: 'evacuation', content: 'Nearest center: Chuo Elementary School', date: '2024-01-01' },
    { id: 'm3', title: 'Spring Festival', category: 'event', content: 'Join us for the annual cherry blossom viewing party!', date: '2024-04-15' },
    { id: 'm4', title: 'City Office Hours', category: 'office', content: 'Mon-Fri: 9:00 - 17:00', date: '2024-01-01' },
];

export const MOCK_JOBS: JobListing[] = [
    {
        id: 'j1',
        title: 'Senior Construction Worker',
        company: 'Yamada Building Co.',
        location: 'Tokyo, Shinjuku',
        salaryRange: '¥250,000 - ¥350,000',
        tags: ['Construction', 'SSW', 'Bonus'],
        postedDate: '2025-12-18',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=300&h=200',
    },
    {
        id: 'j2',
        title: 'Hotel Front Desk Staff',
        company: 'Grand Hotel Kyoto',
        location: 'Kyoto, Shimogyo',
        salaryRange: '¥220,000 - ¥300,000',
        tags: ['Hospitality', 'English', 'Shift Work'],
        postedDate: '2025-12-15',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=300&h=200',
    },
    {
        id: 'j3',
        title: 'Automotive Mechanic',
        company: 'Speedy Motors',
        location: 'Aichi, Toyota',
        salaryRange: '¥240,000 - ¥320,000',
        tags: ['Automotive', 'Technical', 'Visa Support'],
        postedDate: '2025-12-10',
        imageUrl: 'https://images.unsplash.com/photo-1486262715619-01b80250e0dc?auto=format&fit=crop&q=80&w=300&h=200',
    },
];
