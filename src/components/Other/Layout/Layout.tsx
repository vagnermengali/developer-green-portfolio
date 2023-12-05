import { Sora } from "@next/font/google"
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

import Nav from '@/components/Other/Nav/Nav'
import Header from '@/components/Other/Header/Header'
import PaintTwo from '@/components/Other/Paints/PaintTwo/PaintTwo'

import { ChildrenInterface } from '@/interfaces/ChildrenInterface';

const Layout = ({ children }: ChildrenInterface) => {
  return (
    <div className={`page bg-gradient text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <PaintTwo />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
