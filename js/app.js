
import Router from './router.js'

const app = document.querySelector("#app");

//Class: Instatiate router
const router = new Router("routers", [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/about',
        name: 'About us'
    },
    {
        path: '/contact',
        name: 'Contact us'
    },
]);

    //Event: Default router
    document.addEventListener("DOMContentLoaded", () => {
    router.defaultRouter(app)
    });

    //Event: Navigate to router
    const el = document.querySelectorAll("a");
    el.forEach((a) => {
        a.addEventListener("click", (e) => {
        e.preventDefault();
        router.navigateTo(a, app);
        }
        )
    });

    //back in history
    window.addEventListener("popstate",() => {
       router.backHistory(app);
    })
        
      
    