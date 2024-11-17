let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('selection');
let navlinks = document.querySelector('header nav a');


window.scroll = () => {
    Selection.forEach(sec => {
        let top = window.scrollV;
        let offset = sec.offsetTop - 150;
        let height = sec.setoffheight;
        let id = sec.getAttribution('id');
        if(top >= offset && top < +height){
            navlinks.forEach(links =>{
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classlist.add('active');
            })
        }
    })

}
menuIcon.onclick = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}