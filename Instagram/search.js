const myMovies =[
    {
      id: 1,
      name: "Oppenheimer",
      url: "Home/bothisweek/oppenheimer.html", // Added 'url' property
    },
  ];
  
  const search3 = document.getElementsByClassName('search3')[0];
  const search_bar2 = document.getElementById('search_bar2');
  
  // Function to show search3
  function showSearch3() {
      search3.style.display = "block";
  }
  
  // Function to hide search3
  function hideSearch3() {
      search3.style.display = "none";
  }
  
  // Add a click event listener to search_bar2 to show search3
  search_bar2.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the click event from reaching the document click event
      showSearch3();
  });
  
  // Add a focus event listener to search_bar2 to show search3
  search_bar2.addEventListener('focus', () => {
      showSearch3();
  });
  
  // Add a click event listener to the document to hide search3 when clicking outside
  document.addEventListener('click', () => {
      hideSearch3();
  });
  
  window.addEventListener("load", () => {
    myMovies.forEach((element) => {
        const { img, name, url } = element;
  
        let card = document.createElement("a");
        card.href = url;
        card.innerHTML = `
            <div class="movie1"> 
            
            <div class="column">
            <div class="text">${name}</div>
            </div>
            </div>`;
        search3.appendChild(card);
    });
  });
  
  search_bar2.addEventListener('keyup', () => {
    let filter = search_bar2.value.toUpperCase();
    let a = search3.getElementsByTagName('a');
  
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('column')[0];
        let c = b.getElementsByClassName('text')[0];
  
        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = ''; // Show the element if it matches the filter
        } else {
            a[i].style.display = 'none'; // Hide the element if it doesn't match the filter
        }
    }
  });
  
  
  