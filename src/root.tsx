import './_nongula.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorRoute } from './routes/errorroute/errorroute.tsx';
import { ModifyRoute } from './routes/modifyroute/modifyroute.tsx';
import { DashboardRoute } from './routes/dashboardroute/dashboardroute.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path={'*'} element={<ErrorRoute />} />
                <Route path={'/'} element={<DashboardRoute />} />
                <Route path={'/modify/:date'} element={<ModifyRoute />} />
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
