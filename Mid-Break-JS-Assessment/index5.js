/* Assignment 6:
Create an object literal named book with the following properties:
title (string)
author (string)
pages (number)
isAvailable (boolean)
Add a method summary to the book object that returns a string summarising the book details.
Print the summary of the book to the console using the summary method. */
let book = {
    bookTitle : `Moby Dick`,
    author : `Herman Melville`,
    mainCharacter : `Captain Ahab`,
    villain : `White Whale`,
    narrator : `Ishmael`,
    profession : `Sailor`,
    page : 604,
    isAvailable : true,
    ship: {
       name : `Pequod`,
       mate : `Crew`
    },
    summary : function(){
        let narration = `${this.bookTitle} is a book of about ${this.page} pages that is the story of ${this.mainCharacter}'s self-destructive obsession with the ${this.villain} called ${this.bookTitle}. It is told through the narration of ${this.narrator}, a sailor new to ${this.mainCharacter}'s ship, the ${this.ship.name}. The plot of the novel follows ${this.mainCharacter}'s manic drive to kill the whale, even as it endangers his ${this.ship.mate}.`

        return(narration)
    } 
 }
 console.log(book.summary())