function toggleNavbar() {
	var navbar = document.getElementById("navbar");
	// var li1 = document.getElementById("li1");
	// var li2 = document.getElementById("li2");
	// var li3 = document.getElementById("li3");
	// var li4 = document.getElementById("li4");
	// var li5 = document.getElementById("li5");
	// var li6 = document.getElementById("li6");
	  navbar.style.visibility = "visible"; // Show the navbar if it's hidden
	  navbar.classList.toggle("show");
	  	// li1.classList.toggle("li1");
		// li2.classList.toggle("li2");
		// li3.classList.toggle("li3");
		// li4.classList.toggle("li4");
		// li5.classList.toggle("li5");
		// li6.classList.toggle("li6");

  }

  function closeNavbar() {
	var navbar = document.getElementById("navbar");
	navbar.style.visibility = "hidden"; 
	navbar.classList.remove("show");
  }
  