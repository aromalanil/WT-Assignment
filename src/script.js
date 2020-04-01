function navVisible(){
    let nav = document.getElementById('nav');
    if(nav.classList.contains('visible-nav')){
        nav.classList.remove('visible-nav')        
    }
    else{
        nav.classList.add('visible-nav')
    }
}