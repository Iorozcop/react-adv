
import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

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
// El que cargaremos como módulo
const LazyLayout = lazy(()=> import(/*webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    },
    {
        to: '/lazyload/', 
        path: '/lazyload/*', // Todo lo que venga después de /lazyload
        Component: LazyLayout,
        name: 'LazyLayout'
    },
];