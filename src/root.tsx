import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Main } from './routes/main.tsx';
import { ModifyCalories } from './routes/modifycalories.tsx';
import { ErrorRoute } from './routes/errorroute.tsx';
import '../stories/_nongula.scss';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path={'*'} element={<ErrorRoute />} />
            <Route path={'/'} element={<Main />} />
            <Route path={'/modifycalories'} element={<ModifyCalories />} />
        </Routes>
    </BrowserRouter>
);
