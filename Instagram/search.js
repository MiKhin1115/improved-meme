const myMovies =[
    {
      id: 1,
      name: "Ash Ketchum",
      url: "Home/bothisweek/oppenheimer.html", 
    },
    {
      id: 2,
      name: "Team Flare",
      url: "Home/bothisweek/barbie.html", 
    },
    { 
      id: 3,
      name: "Brock",
      url: "Home/bothisweek/elemental.html", 
    },
    {
      id: 4,
      name: "May",
      url: "Home/bothisweek/hauntedmansion.html", 
    },
    {
      id: 5,
      name: "Hilbert",
      url: "Home/bothisweek/indianaJones.html", 
    },
  ];
    const PopupSearchbox = document.getElementsByClassName('PopupSearchbox')[0];
    const searchBar = document.getElementById('searchBar');
    
    
    function showPopupSearchbox() {
        PopupSearchbox.style.display = "block";
    }
    
    function hidePopupSearchbox() {
        PopupSearchbox.style.display = "none";
    }
 
    searchBar.addEventListener('click', (event) => {
        event.stopPropagation(); 
        showPopupSearchbox();
    });

    searchBar.addEventListener('focus', () => {
        showPopupSearchbox();
    });

    document.addEventListener('click', () => {
        hidePopupSearchbox();
    });

window.addEventListener("load", () => {
  myMovies.forEach((element) => {
      const { name, url } = element;

      let card = document.createElement("a");
      card.href = url;
      card.innerHTML = `
          <div class="column">
          <div class="text">${name}</div>
          </div>`;
          PopupSearchbox.appendChild(card);
  });
});

searchBar.addEventListener('keyup', () => {
    let filter = searchBar.value.toUpperCase();
    let a = PopupSearchbox.getElementsByTagName('a');
    let noMatches = true;

    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('column')[0];
        let c = b.getElementsByClassName('text')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = ''; // Show the element if it matches the filter
            noMatches = false;
        } else {
            a[i].style.display = 'none'; // Hide the element if it doesn't match the filter
        }
    }

    // If no matches were found in the list, redirect to Google search
    if (noMatches && filter.trim() !== '') {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(filter)}`;
        window.location.href = googleSearchURL;
    }
});
