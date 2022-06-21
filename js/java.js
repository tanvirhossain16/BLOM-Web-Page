var navigation = document.querySelector('#navigation');
var down_to_up = document.querySelector('.down_to_up');
var bars = document.querySelector('.bars');
var side_menu = document.querySelector('.side_menu');
var right = document.querySelector('remove')



window.addEventListener("scroll", function(){
    var anything = this.window.scrollY;
    if(anything > 300){
        navigation.classList.add("sticky")
        down_to_up.classList.add('hide')
    } 
    else{
        navigation.classList.remove("sticky")
        down_to_up.classList.remove('hide')
    }
})

window.addEventListener("click",function(){
    this.window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );
})

window.addEventListener("click",function(){
    side_menu.classList.toggle('side_menu_show')
})

window.addEventListener("click",function(){
    right.classList.remove('side_menu')
})