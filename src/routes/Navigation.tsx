import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    // Suspense sirve para envolver todo el browserRouter y 
    // fallback es para decirle al ususario que espere que esta cargando, podemos meter ahí un componente, spiner...
    <Suspense fallback={<span>Loading...</span>} >
      <BrowserRouter>
          <div className="main-layout">
              <nav>
                <img  src= { logo } alt="react-logo" />
                <ul>
                {routes.map(e => 
                    <li key={e.to}>
                      <NavLink 
                        to={e.to} 
                        className={ ({isActive}) => isActive ? 'nav-active' : '' }> {e.name} 
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>

              <Routes>
                {/* en el .map hemos destructurado de cada element lo que necesitamos */}
                {routes.map(({to, path, Component}) => 
                  <Route
                    key={to} 
                    path={path} 
                    element={ <Component /> } 
                  />
                )}
                <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
              </Routes>

          </div>
      </BrowserRouter>
    </Suspense>
  )
}
