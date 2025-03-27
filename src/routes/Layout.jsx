import { Outlet, useLocation } from 'react-router-dom'; 
import Header from '../components/Header/Header';
import { cards } from '../mocks/mock-data';

const Layout = () => {
  const location = useLocation().pathname 
  let pageTitle
  console.log(cards.forEach(card => {
    if (card.path === location) {
      pageTitle = card.title
    }
  }))
  console.log(pageTitle)
  return (
    <div className='layout'>
      <Header />
      <main>
        <div className="page-title">{pageTitle}</div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;