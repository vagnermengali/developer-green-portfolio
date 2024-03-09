import { Jost } from 'next/font/google'

import Nav from '@/components/Other/Nav/Nav'
import Header from '@/components/Other/Header/Header'

import { ChildrenInterface } from '@/interfaces/ChildrenInterface';

const jost = Jost({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }: ChildrenInterface) => {

  return (
    <div className={`page bg-gradient bg-[length:86.125rem_86.125rem] bg-repeat bg-bottom text-white relative h-screen ${jost.className} max-h-dvh`}>
      <div className={`page bg-cube text-white relative h-screen`}>
        <Nav />
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
