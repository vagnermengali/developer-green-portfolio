import Nav from '@/components/Other/Nav/Nav'
import Header from '@/components/Other/Header/Header'

import { ChildrenInterface } from '@/interfaces/ChildrenInterface';

const Layout = ({ children }: ChildrenInterface) => {
  
  return (
    <div className={`page bg-gradient bg-[length:86.125rem_86.125rem] bg-repeat bg-bottom text-white relative h-screen`}>
      <div className={`page bg-cube text-white relative h-screen`}>
      <Nav />
      <Header />
      {children}
      </div>
    </div>
  );
};

export default Layout;
