import { useLanguage } from '../context/LanguageContext';
import { MOCK_MUNICIPALITY, MOCK_SERVICES } from '../lib/mockData';
import { InfoCard } from '../components/features/municipality/InfoCard';
import { ServiceCard } from '../components/features/services/ServiceCard';

export default function LifePage() {
    const { t } = useLanguage();
    const municipalityInfo = MOCK_MUNICIPALITY;
    const services = MOCK_SERVICES;

    return (
        <div className="p-6 pb-24 space-y-8">
            <div className="space-y-4">
                <h2 className="text-xl font-bold">{t('life.municipality')}</h2>
                <div className="grid gap-4">
                    {municipalityInfo.map((info) => (
                        <InfoCard key={info.id} info={info} />
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold">{t('life.services')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
