import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return <div>{t('Главная страница', { ns: 'translation' })}</div>;
};

export default MainPage;
