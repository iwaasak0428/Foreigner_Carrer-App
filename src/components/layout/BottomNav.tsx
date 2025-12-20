import { Home, Briefcase, Wallet, Heart, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

export function BottomNav() {
    const location = useLocation();
    const { t } = useLanguage();

    const navItems = [
        { path: '/', icon: Home, label: t('nav.home') },
        { path: '/career', icon: Briefcase, label: t('nav.career') },
        { path: '/finance', icon: Wallet, label: t('nav.finance') },
        { path: '/life', icon: Heart, label: t('nav.life') },
        { path: '/menu', icon: Menu, label: t('nav.menu') },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border pb-safe">
            <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200",
                                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <item.icon className={cn("w-6 h-6", isActive && "fill-current/20")} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
