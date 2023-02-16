let closebtn = document.getElementById('closebtn');
let openbtn = document.getElementById('openbtn');
let navbar = document.getElementById('navbar');

onload = function () {
    navbar.classList.add('hide');
    closebtn.classList.add('hide');

}

closebtn.onclick = function () {
    
    navbar.classList.add('hide');
    closebtn.classList.add('hide');

    openbtn.classList.remove('hide');

}

openbtn.onclick = function () {
    
    navbar.classList.remove('hide');
    closebtn.classList.remove('hide');
    this.classList.add('hide');
    
}
