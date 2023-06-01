import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        // eslint-disable-next-line i18next/no-literal-string
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
