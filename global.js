if (!sessionStorage.getItem('refreshed')) {
  // Set a timeout to refresh the page after 2 seconds
  setTimeout(() => {
    // Set a flag in session storage to indicate the page has been refreshed
    sessionStorage.setItem('refreshed', 'true');
    // Refresh the page
    location.reload();
  }, 2000); // 2000 milliseconds = 2 seconds
}
// =====================TYPEWRITE =====================

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 2px solid #121212}";
    document.body.appendChild(css);

    var elements = document.getElementsByClassName('terminal');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".terminal > .wrap { border-right: 2px solid #ffffff}";
    document.body.appendChild(css);
};

// ===================== INTERCHANGING TEXT =====================




// ========================AUDIO =================

const playCheckbox = document.getElementById('checkbox');
const audioPlayer = document.getElementById('audioPlayer');

playCheckbox.addEventListener('change', function() {
    if (this.checked) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset audio playback to the beginning
    }
});

// =========================Terminal =========================




// 
window.onscroll = function() {
    stickyFunction();
  };
  
  function stickyFunction() {
    var navbar = document.querySelector(".navbar-2");
    var sticky = navbar.offsetTop;
  
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
      document.querySelector(".navbar-2 .logo2").style.display = "flex";
    } else {
      navbar.classList.remove("sticky");
      document.querySelector(".navbar-2 .logo2").style.display = "none";
    }
  }

  // =====================PORTFOLIO =========================
  const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);