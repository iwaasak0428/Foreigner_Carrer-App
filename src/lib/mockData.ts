import type { UserProfile, JobListing } from './types';

export const MOCK_USER: UserProfile = {
    id: 'u1',
    name: 'Nguyen Van A',
    avatarUrl: 'https://i.pravatar.cc/150?u=u1',
    nationality: 'Vietnam',
    visaStatus: 'Specified Skilled Worker (i)',
    visaExpiry: '2026-04-01',
    creditScore: 780,
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
        { month: '2025-11', status: 'paid', amount: 65000 },
        { month: '2025-10', status: 'paid', amount: 65000 },
        { month: '2025-09', status: 'paid', amount: 65000 },
        { month: '2025-08', status: 'paid', amount: 65000 },
        { month: '2025-07', status: 'paid', amount: 65000 },
        { month: '2025-06', status: 'paid', amount: 65000 },
    ],
};

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
