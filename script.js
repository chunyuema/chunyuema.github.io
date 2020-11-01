const navLinks = document.querySelectorAll('.nav-link');

function activate(){
    for (var i=0; i<navLinks.length;i++){
        navLinks[i].classList.remove('active');
    }
    this.classList.add('active')
}
s
for (var i=0 ; i<navLinks.length;i++){
    navLinks[i].onclick = activate;
}