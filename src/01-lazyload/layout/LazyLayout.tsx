import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import {Lazypage2, Lazypage3} from '../pages';

// Este es el módulo que carga todo lo demás
export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout (carga por módulo)</h1>
        <ul>
          <li>
            <NavLink to={"lazy2"}> Lazy2 </NavLink>
          </li>
          <li>
            <NavLink to={"lazy3"}> Lazy3 </NavLink>
          </li>
        </ul>

        <Routes>
          <Route
            path="lazy2"
            element= { <Lazypage2 /> }
          ></Route>
          <Route
            path="lazy3"
            element= { <Lazypage3 /> }
          ></Route>
          
          <Route path="*" element={ <Navigate to="lazy2" replace /> } />
        </Routes>
    </div>
  )
}

export default  LazyLayout;
