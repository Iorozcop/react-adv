
import { lazy, LazyExoticComponent } from 'react';

type JSXElement = () => JSX.Element;

// El componente lo hemos puesto que pueda ser de dos tipos distintos para poder cargarlos de manera
// perezosa o de manera tradicional.
interface Route {
    to: string,
    path: string,
    Component: JSXElement | LazyExoticComponent<JSXElement>
    name: string
}

// lazy es una función propia de react para cargar los componentes de manera perezosa
// el comentario webpackChunkName: es para cambiar el nombre al chunk (podemos verlo en la pestaña network)
const Lazy1 = lazy(()=> import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/Lazypage1'));
const Lazy2 = lazy(()=> import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/Lazypage2'));
const Lazy3 = lazy(()=> import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/Lazypage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }

];