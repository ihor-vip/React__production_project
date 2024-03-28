import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // DO NOT DO IN REAL PROJECTS!!!!!
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))

