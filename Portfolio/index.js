let overAllContainer = document.getElementById("main-container")
let cvButton = document.getElementById("cvbutton")
let aboutMe = document.getElementById("home2")
let resume = document.getElementById("home3")
let portfolio = document.getElementById("home4")
let testimonial = document.getElementById("home5")
let contact = document.getElementById("home6")
let aboutMeSection = document.getElementById("aboutme-section")
let reumeSection = document.getElementById("resume")
let portFolio = document.getElementById("portfolio")
let testimonials = document.getElementById("testimonials")
let contacts = document.getElementById("contacts")
let knowMoreButton = document.getElementById("know-more")
let contactMeButton = document.getElementById("contactme")

aboutMe.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "aboutMeSection" 
    }
  })

resume.addEventListener("keyup", function(event){
    if (event.key === "Enter") { 
        window.location.hash = "resumeSection" 
    }
  })

portFolio.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "portfolio" 
    }
  })

testimonial.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "testimonials" 
    }
  })

contacts.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "contacts" 
    }    
  })

cvButton.addEventListener("click", function(){
    window.location.href = "https://www.figma.com/design/LySKx0zxE2EbTLJ8ZO1AEU/Linda-Resume-(Copy)?node-id=0-1&node-type=CANVAS&t=BSr9sXenvATQH10F-0"
})

contactMeButton.addEventListener("click", function(){
  window.location.hash = "contacts"
})

knowMoreButton.addEventListener("click", function(){
  window.location.hash = "aboutMeSection"
})