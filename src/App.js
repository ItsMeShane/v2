import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/404/PageNotFound';
import Main from './pages/main/Main';

function App() {
   return (
      <>
         <Routes>
            <Route path='/' index element={<Main />} />
            <Route path='*' element={<PageNotFound />} />
         </Routes>
      </>
   );
}

export default App;
