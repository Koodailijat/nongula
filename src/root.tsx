import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorRoute } from './routes/errorroute/errorroute.tsx';
import { ModifyRoute } from './routes/modifyroute/modifyroute.tsx';
import { DashboardRoute } from './routes/dashboardroute/dashboardroute.tsx';
import '../stories/_nongula.scss';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path={'*'} element={<ErrorRoute />} />
            <Route path={'/'} element={<DashboardRoute />} />
            <Route path={'/modify'} element={<ModifyRoute />} />
        </Routes>
    </BrowserRouter>
);
