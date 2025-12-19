import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Language } from '../lib/types';

type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en: {
        'nav.home': 'Home',
        'nav.career': 'Career',
        'nav.credit': 'Credit',
        'nav.jobs': 'Jobs',
        'nav.settings': 'Settings',
        'dashboard.welcome': 'Welcome back,',
        'dashboard.combatPower': 'Combat Power',
        'dashboard.creditScore': 'Credit Score',
        'career.title': 'Career History',
        'career.resume': 'Generate Resume',
        'credit.title': 'Credit & Housing',
        'credit.paymentHistory': 'Housing Payment History',
        'jobs.title': 'Job Search',
        'jobs.searchPlaceholder': 'Search for jobs...',
        'settings.title': 'Settings',
        'settings.language': 'Language',
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.career': '経歴',
        'nav.credit': '信用',
        'nav.jobs': '求人',
        'nav.settings': '設定',
        'dashboard.welcome': 'お帰りなさい、',
        'dashboard.combatPower': '戦闘力',
        'dashboard.creditScore': '信用スコア',
        'career.title': '職務経歴',
        'career.resume': '職務経歴書作成',
        'credit.title': '信用・住居',
        'credit.paymentHistory': '家賃支払い履歴',
        'jobs.title': '求人検索',
        'jobs.searchPlaceholder': '求人を検索...',
        'settings.title': '設定',
        'settings.language': '言語',
    },
    vi: {
        'nav.home': 'Trang chủ',
        'nav.career': 'Sự nghiệp',
        'nav.credit': 'Tín dụng',
        'nav.jobs': 'Việc làm',
        'nav.settings': 'Cài đặt',
        'dashboard.welcome': 'Chào mừng trở lại,',
        'dashboard.combatPower': 'Sức chiến đấu',
        'dashboard.creditScore': 'Điểm tín dụng',
        'career.title': 'Lịch sử nghề nghiệp',
        'career.resume': 'Tạo sơ yếu lý lịch',
        'credit.title': 'Tín dụng & Nhà ở',
        'credit.paymentHistory': 'Lịch sử thanh toán tiền nhà',
        'jobs.title': 'Tìm việc',
        'jobs.searchPlaceholder': 'Tìm kiếm việc làm...',
        'settings.title': 'Cài đặt',
        'settings.language': 'Ngôn ngữ',
    },
    zh: {
        'nav.home': '首页',
        'nav.career': '职业',
        'nav.credit': '信用',
        'nav.jobs': '工作',
        'nav.settings': '设置',
        'dashboard.welcome': '欢迎回来，',
        'dashboard.combatPower': '战斗力',
        'dashboard.creditScore': '信用评分',
        'career.title': '职业历史',
        'career.resume': '生成简历',
        'credit.title': '信用与住房',
        'credit.paymentHistory': '房租支付记录',
        'jobs.title': '职位搜索',
        'jobs.searchPlaceholder': '搜索职位...',
        'settings.title': '设置',
        'settings.language': '语言',
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ja');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
