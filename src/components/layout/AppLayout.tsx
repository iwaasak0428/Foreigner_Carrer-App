import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export function AppLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20">
            <div className="max-w-md mx-auto min-h-screen bg-background relative shadow-2xl overflow-hidden border-x border-border/50">
                <main className="pb-20 min-h-screen overflow-y-auto scrollbar-hide">
                    <Outlet />
                </main>
                <BottomNav />
            </div>
        </div>
    );
}
