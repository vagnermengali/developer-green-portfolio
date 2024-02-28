import Nav from '@/components/Other/Nav/Nav'
import Header from '@/components/Other/Header/Header'

import { ChildrenInterface } from '@/interfaces/ChildrenInterface';

const Layout = ({ children }: ChildrenInterface) => {
  
  return (
    <div className={`page bg-gradient text-white bg-cover bg-no-repeat relative h-screen`}>
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
