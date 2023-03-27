const floatingButton = document.querySelector('.floating-button');
floatingButton.addEventListener('click', () => {
    floatingButton.classList.toggle('floating-window');
    if (floatingButton.classList.contains('floating-window')) {
        floatingButton.innerHTML += `
<section class="floating-button-content">
<h1>Vision</h1>
<p>Ste. Anne de Beaupré School envisions a world of proactive Filipino leaders that make the
     world a better place both in the eyes of God and man.</p
</section>
<section class="floating-button-content">
<h1>Mission</h1>
<p>Ste. Anne de Beaupré School provides a well-balanced educational program for the formation of individuals with 
moral virtues, high-level intelligence and functional skills.</p
</section>`;
    } else {
        floatingButton.innerHTML = '<img src="icons/vision.png" alt="vision">';
    }
});



window.addEventListener('load', () => {
    const floatingButton = document.querySelector('.floating-button');
    floatingButton.click();
});



if (window.innerWidth < 1080) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}


var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0px";
}
function hideMenu() {
    navLinks.style.right = "-210px";
}
