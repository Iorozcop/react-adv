import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { Lazypage1, Lazypage2, Lazypage3 } from '../01-lazyload/pages'

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
              <img  src= { logo } alt="react-logo" />
              <ul>
                <li>
                  <NavLink to="/lazy1" className={ ({isActive}) => isActive ? 'nav-active' : '' }> Lazy 1 </NavLink>
                </li>
                <li>
                  <NavLink to="/lazy2" className={ ({isActive}) => isActive ? 'nav-active' : '' }> Lazy 2 </NavLink>
                </li>
                <li>
                  <NavLink to="/lazy3" className={ ({isActive}) => isActive ? 'nav-active' : '' }> Lazy 3 </NavLink>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="lazy1" element={ <Lazypage1 /> } />
              <Route path="lazy2" element={ <Lazypage2 /> } />
              <Route path="lazy3" element={<Lazypage3 />} />

              <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />

            </Routes>

        </div>
    </BrowserRouter>
  )
}
