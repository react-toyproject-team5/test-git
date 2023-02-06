import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ListCard from './components/ListCard';
import MainPage from './pages/MainPage';

//라우터 구조
//<App>
//	/ 👉 <MainPage>
//	/watch 👉 <MainPage>
//	/watch/id 👉 <ListCard>

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'posts', element: <MainPage /> },
      { path: 'posts/:postsId', element: <ListCard /> },
    ],
  },
]);

export default router;
