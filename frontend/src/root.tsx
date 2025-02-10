import './_nongula.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorRoute } from './routes/errorroute/errorroute.tsx';
import { ModifyRoute } from './routes/modifyroute/modifyroute.tsx';
import { DashboardRoute } from './routes/dashboardroute/dashboardroute.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queries/queryClient.ts';
import { SignUpRoute } from './routes/signuproute/signuproute.tsx';
import { LoginRoute } from './routes/loginroute/loginroute.tsx';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path={'*'} element={<ErrorRoute />} />
                <Route path={'/'} element={<DashboardRoute />} />
                <Route path={'/signup'} element={<SignUpRoute />} />
                <Route path={'/login'} element={<LoginRoute />} />
                <Route path={'/modify/:date'} element={<ModifyRoute />} />
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
