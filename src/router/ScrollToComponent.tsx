import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToComponent(){
  const {pathname, hash, key} = useLocation()
  useEffect(() => {
    if(hash === ""){
      scrollTo({left: 0, top: 0, behavior: "smooth"})
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "")
        const el = document.getElementById(id)
        if(el){
          el.scrollIntoView({ block: "center", behavior: "smooth"})
        }
      }, 0)
    }
  }, [pathname, hash, key])
  return null
}

export default ScrollToComponent