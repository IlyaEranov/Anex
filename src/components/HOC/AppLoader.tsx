import type { FC, ReactNode } from "react";
import Loader from "../common/Loader/Loader";

interface AppLoaderProps{
  children: ReactNode
}

const AppLoader: FC<AppLoaderProps> = ({children}) => {
  
  const isLoading = false

  if(isLoading){
    return <Loader/>
  } else {
    return children
  }
}

export default AppLoader