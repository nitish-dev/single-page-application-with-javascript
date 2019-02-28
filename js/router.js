
export default class Router {
    constructor(name, routers) {
        this.name = name;
        this.routers = routers;
    }

    //load by default
    defaultRouter(container){
        return this.loadHTML("/default", container);
    }

    //Navigate to router
    navigateTo(event, container){
        const nav = event.attributes.href.value;
        const path = this.routers.filter((r) => {
            return r.path === nav;
        })[0];
       
        if(!path){
            container.innerHTML = "No route exists with this path";
        }else{
            window.history.pushState({}, 'name', path.path);

            if(window.location.pathname ==='/'){
                this.loadHTML("/default", container);
            }else{
                this.loadHTML(path.path, container);
            }
            
        }
    }

   //back 
   backHistory(app){
    if(window.location.pathname ==='/'){
        this.loadHTML("/default", app);
    }else{
        this.loadHTML(window.location.pathname, app);
    }
   }

    //fetching html
    loadHTML(html, container){
        const url = "views" + html+'.html';
        fetch(url)
        .then(response =>{
            return response.text()
        })
        .then(data => {
        
            container.innerHTML = data;
        })
        .catch(err => {
            console.log(err);
        })
    }
}


