function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "DEVELOPER"
    
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter
document.addEventListener('DOMContentLoaded', (event) =>{
     // Function to toggle the dropdown menu
    function toggleDropdown(){
        const dropdownMenu = document.getElementById('dropdownMenu');
        const isVisible = dropdownMenu.style.display === 'block';
         // Toggle menu visibility
         dropdownMenu.style.display = isVisible ? 'none' : 'block';
    }
      // Event listener for the dropdown toggle button
      const dropdownToggle = document.getElementById('dropdownToggle');
      dropdownToggle.addEventListener('click', toggleDropdown);
  
      // Optional: Close dropdown when clicking outside of it
      document.addEventListener('click', (event) => {
          const dropdownMenu = document.getElementById('dropdownMenu');
          const dropdownToggle = document.getElementById('dropdownToggle');
          
          // Check if the click was outside the dropdown menu and the button
          if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
              dropdownMenu.style.display = 'none';
          }
        });
    });