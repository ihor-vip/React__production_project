import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // DO NOT DO IN REAL PROJECTS!!!!!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))
