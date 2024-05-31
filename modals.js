function targetModal(element) {
    var modal1 = document.getElementById('target');
    // var modalText = document.getElementById('modalText');
    // modalText.textContent = element.getAttribute('data-modal-content');
    modal1.style.display = 'block';
}
function targetcloseModal(element) {
    var modal1 = document.getElementById('target');
    modal1.style.display = 'none';
}

function vgapModal(element) {
    var modal2 = document.getElementById('vgap');
    modal2.style.display = 'block';
}
function vgapcloseModal(element) {
    var modal2 = document.getElementById('vgap');
    modal2.style.display = 'none';
}

function profileadModal(element) {
    var modal3 = document.getElementById('profilead');
    modal3.style.display = 'block';
}
function profileadcloseModal(element) {
    var modal3 = document.getElementById('profilead');
    modal3.style.display = 'none';
}

function kryscorpModal(element) {
    var modal4 = document.getElementById('kryscorp');
    modal4.style.display = 'block';
}
function kryscorpcloseModal(element) {
    var modal4 = document.getElementById('kryscorp');
    modal4.style.display = 'none';
}

function krysearchModal(element) {
    var modal5 = document.getElementById('krysearch');
    modal5.style.display = 'block';
}
function krysearchcloseModal(element) {
    var modal5 = document.getElementById('krysearch');
    modal5.style.display = 'none';
}



window.onclick = function(event) {
    var modal1 = document.getElementById('target');
    var modal2 = document.getElementById('vgap');
    var modal3 = document.getElementById('profilead');
    var modal4 = document.getElementById('kryscorp');
    var modal5 = document.getElementById('krysearch');
    if (event.target == modal1) {
        modal1.style.display = 'none';
    }else if (event.target == modal2) {
        modal2.style.display = 'none';
    } else if (event.target == modal3) {
        modal3.style.display = 'none';
    }else if (event.target == modal4) {
        modal4.style.display = 'none';
    }else if (event.target == modal5) {
        modal5.style.display = 'none';
    }
}