// let h1 = document.getElementById("page_title");
// console.log(h1)

let h1 = document.querySelector("h1");
h1.style.color = "green"


// One way to get a "p" and change the text!
// let p1 = document.querySelector("p")
// p1.innerHTML = "innerHTML"

// Another way to change the innerHTML of th
//textContent is the preffered method 
let p1 = document.querySelector("p")
p1.textContent = "textContentExample"

//we have to make elements do something and attach them to the DOM
// we can use createElement

// const li = document.createElement('li');
let ol = document.querySelector('ol');
//now we need to append the new li to the ol
//first lets use appendChild


//lets add text. It could be before or after the appending of said element
// li.textContent = "This is the first list item"
// ol.appendChild(li)

//we want to add 5! so lets make a for loop

// we used a for loop to count the 5 variables
// we created a li within the loop, which makes sense because we need to create 5
// we assign the text content via li.textContent = 
// 
for (let i = 0 ; i < 5 ; i++) {
    const li = document.createElement('li')
    li.textContent = i + 1
    ol.appendChild(li)
}


//if you have an array of names, you could iterate through it
//we used .foreach attached to the array name, and then named a variable in the parameter
//

//to remove, we need to grab the element first
let p_last = document.querySelector('.removable')
//we can console log this to check if we got the right tag
//in dev toools 
p_last.remove() ;

