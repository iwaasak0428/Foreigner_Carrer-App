import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Language } from '../lib/types';

type Translations = {
    [key in Language]: {
        nav: {
            home: string;
            career: string;
            finance: string;
            life: string;
            menu: string;
            jobs: string;
            credit: string;
            settings: string;
        };
        dashboard: {
            title: string;
            welcome: string;
            combatPower: string;
            creditScore: string;
            recentActivity: string;
        };
        career: {
            title: string;
            resume: string;
        };
        credit: {
            title: string;
            paymentHistory: string;
        };
        jobs: {
            title: string;
            searchPlaceholder: string;
        };
        settings: {
            title: string;
            language: string;
        };
        finance: {
            title: string;
            bank: string;
            visa: string;
            remittance: string;
            credit: string;
        };
        life: {
            title: string;
            municipality: string;
            services: string;
        };
        menu: {
            title: string;
            profile: string;
            settings: string;
            logout: string;
        };
    };
};

const translations: Translations = {
    en: {
        nav: {
            home: 'Home',
            career: 'Career',
            finance: 'Finance',
            life: 'Life',
            menu: 'Menu',
            jobs: 'Jobs',
            credit: 'Credit',
            settings: 'Settings',
        },
        dashboard: {
            title: 'Dashboard',
            welcome: 'Welcome back,',
            combatPower: 'Combat Power',
            creditScore: 'Credit Score',
            recentActivity: 'Recent Activity',
        },
        career: {
            title: 'Career History',
            resume: 'Generate Resume',
        },
        credit: {
            title: 'Credit & Housing',
            paymentHistory: 'Housing Payment History',
        },
        jobs: {
            title: 'Job Search',
            searchPlaceholder: 'Search for jobs...',
        },
        settings: {
            title: 'Settings',
            language: 'Language',
        },
        finance: {
            title: 'Finance',
            bank: 'Bank',
            visa: 'Visa',
            remittance: 'Remittance',
            credit: 'Credit',
        },
        life: {
            title: 'Life Support',
            municipality: 'Municipality',
            services: 'Services',
        },
        menu: {
            title: 'Menu',
            profile: 'Profile',
            settings: 'Settings',
            logout: 'Logout',
        },
    },
    ja: {
        nav: {
            home: 'ホーム',
            career: '経歴',
            finance: '金融',
            life: '生活',
            menu: 'メニュー',
            jobs: '求人',
            credit: '信用',
            settings: '設定',
        },
        dashboard: {
            title: 'ダッシュボード',
            welcome: 'お帰りなさい、',
            combatPower: '戦闘力',
            creditScore: '信用スコア',
            recentActivity: '最近のアクティビティ',
        },
        career: {
            title: '職務経歴',
            resume: '職務経歴書作成',
        },
        credit: {
            title: '信用・住居',
            paymentHistory: '家賃支払い履歴',
        },
        jobs: {
            title: '求人検索',
            searchPlaceholder: '求人を検索...',
        },
        settings: {
            title: '設定',
            language: '言語',
        },
        finance: {
            title: 'ファイナンス',
            bank: '銀行',
            visa: 'ビザ',
            remittance: '送金',
            credit: '信用',
        },
        life: {
            title: '生活サポート',
            municipality: '自治体',
            services: 'サービス',
        },
        menu: {
            title: 'メニュー',
            profile: 'プロフィール',
            settings: '設定',
            logout: 'ログアウト',
        },
    },
    vi: {
        nav: {
            home: 'Trang chủ',
            career: 'Sự nghiệp',
            finance: 'Tài chính',
            life: 'Cuộc sống',
            menu: 'Menu',
            jobs: 'Việc làm',
            credit: 'Tín dụng',
            settings: 'Cài đặt',
        },
        dashboard: {
            title: 'Bảng điều khiển',
            welcome: 'Chào mừng trở lại,',
            combatPower: 'Sức chiến đấu',
            creditScore: 'Điểm tín dụng',
            recentActivity: 'Hoạt động gần đây',
        },
        career: {
            title: 'Lịch sử nghề nghiệp',
            resume: 'Tạo sơ yếu lý lịch',
        },
        credit: {
            title: 'Tín dụng & Nhà ở',
            paymentHistory: 'Lịch sử thanh toán tiền nhà',
        },
        jobs: {
            title: 'Tìm việc',
            searchPlaceholder: 'Tìm kiếm việc làm...',
        },
        settings: {
            title: 'Cài đặt',
            language: 'Ngôn ngữ',
        },
        finance: {
            title: 'Tài chính',
            bank: 'Ngân hàng',
            visa: 'Visa',
            remittance: 'Chuyển tiền',
            credit: 'Tín dụng',
        },
        life: {
            title: 'Hỗ trợ cuộc sống',
            municipality: 'Chính quyền',
            services: 'Dịch vụ',
        },
        menu: {
            title: 'Menu',
            profile: 'Hồ sơ',
            settings: 'Cài đặt',
            logout: 'Đăng xuất',
        },
    },
    zh: {
        nav: {
            home: '首页',
            career: '职业',
            finance: '金融',
            life: '生活',
            menu: '菜单',
            jobs: '工作',
            credit: '信用',
            settings: '设置',
        },
        dashboard: {
            title: '仪表盘',
            welcome: '欢迎回来，',
            combatPower: '战斗力',
            creditScore: '信用评分',
            recentActivity: '最近活动',
        },
        career: {
            title: '职业历史',
            resume: '生成简历',
        },
        credit: {
            title: '信用与住房',
            paymentHistory: '房租支付记录',
        },
        jobs: {
            title: '职位搜索',
            searchPlaceholder: '搜索职位...',
        },
        settings: {
            title: '设置',
            language: '语言',
        },
        finance: {
            title: '金融',
            bank: '银行',
            visa: '签证',
            remittance: '汇款',
            credit: '信用',
        },
        life: {
            title: '生活支持',
            municipality: '市政',
            services: '服务',
        },
        menu: {
            title: '菜单',
            profile: '个人资料',
            settings: '设置',
            logout: '登出',
        },
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
        const keys = key.split('.');
        let value: any = translations[language];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
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
