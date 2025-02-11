import './_nongula.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorRoute } from './routes/errorroute/errorroute.tsx';
import { ModifyRoute } from './routes/modifyroute/modifyroute.tsx';
import { DashboardRoute } from './routes/dashboardroute/dashboardroute.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queries/queryClient.ts';

import { AuthGuard } from './utils/AuthGuard.tsx';
import { RootRoute } from './routes/RootRoute/RootRoute.tsx';
import { SignUpRoute } from './routes/SignUpRoute/SignUpRoute.tsx';
import { LoginRoute } from './routes/LoginRoute/LoginRoute.tsx';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path={'*'} element={<ErrorRoute />} />
                <Route path={'/'} element={<RootRoute />} />
                <Route path={'/signup'} element={<SignUpRoute />} />
                <Route path={'/login'} element={<LoginRoute />} />
                <Route path="/" element={<AuthGuard />}>
                    <Route path={'/dashboard'} element={<DashboardRoute />} />
                    <Route path={'/modify/:date'} element={<ModifyRoute />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
