window.addEventListener("load",function(){
    var menu = document.getElementById("menu");
    var navMenuText = document.getElementById("nav-menu-text");
    var navNavigation = document.getElementById("navigation");
    $( window ).scroll(function(){
        if(window.scrollY==0){
            menu.setAttribute("style","background-color:rgba(128,0,0,0.0);");
            navMenuText.setAttribute("style","color:rgba(148,117,117,0.15);");
        }
        else{
            menu.setAttribute("style","background-color:rgba(128,0,0,1.0);");
            navMenuText.setAttribute("style","color:rgba(148,117,117,1.0);");
        } 
    });
    menu.addEventListener("click",function(e){
        navNavigation.setAttribute("style","display:block;");
    });
});