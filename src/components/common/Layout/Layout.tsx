import { Suspense, type FC, type ReactNode } from "react";
import Header from "../Header/Header";  
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import ScrollToComponent from "../../../router/ScrollToComponent";

interface LayoutProps{
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return(
    <Suspense fallback={<Loader/>}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <ScrollToComponent/>
    </Suspense>
  )
}

export default Layout