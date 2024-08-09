// Get slider items
var slilderimages = Array.from(document.querySelectorAll('.slider-container img'));

// Get the number of slides
var slilderCount = slilderimages.length;

// Set current slide
var currentslide = 1;

// Slide number element
var slideNumberElement = document.getElementById('slide-number');


// Previous and next buttons 
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

// Handle click on the next and previous buttons
nextButton.addEventListener('click', () => {
    nextSlide();
})
prevButton.addEventListener('click', () => {
    prevSlide();
})

// Create main ul element 
var paginationElement = document.createElement('ul');

// Set id on Created ul element 
paginationElement.setAttribute('id', 'pagination-ul');

// Create list items based on slides count
for(var i=1;i<=slilderCount;i++){

    // Create the li
    var paginationItem = document.createElement('li');
    
    // Set Custom attribute 
    paginationItem.setAttribute('data-index', i);

    // Set item content
    paginationItem.appendChild(document.createTextNode(i));

    // Append items to the main ul list
    paginationElement.append(paginationItem);


}

// Add teh created ul element to the page
document.getElementById('indicator').appendChild(paginationElement);
//var paginationCreatedUl = document.getElementById('pagination-ul');
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through the pagination bullets
for(var i=0;i<paginationBullets.length;i++){
    paginationBullets[i].onclick = function () {
        currentslide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}


/* for(var i=0;i<paginationBullets.length;i++){
    paginationBullets[i].addEventListener('click', () => {
        currentslide = parseInt(this.getAttribute('data-index'));
        theChecker();
    })
}
 */
theChecker();

// Next slide function
function nextSlide() {
    if (nextButton.classList.contains('disabled')){
        return false;
    }
    else {
        currentslide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')){
        return false;
    }
    else {
        currentslide--;
        theChecker();
    }
}

function theChecker(){
    slideNumberElement.textContent = 'Slide #' + (currentslide ) + ' of ' +(slilderCount);
    removeAllActive();
    slilderimages[currentslide-1].classList.add('active');
    //paginationCreatedUl.children[currentslide].classList.add('active');
    paginationBullets[currentslide-1].classList.add('active');
    if (currentslide === 1){
        prevButton.classList.add('disabled');
    }
    else {
        prevButton.classList.remove('disabled');
    }
    if(currentslide === slilderCount ){
        nextButton.classList.add('disabled');
    }
    else {
        nextButton.classList.remove('disabled');
    }
}

function removeAllActive(){
    // Loop through images
    slilderimages.forEach((img) => {
        img.classList.remove('active')
    })

    //Loop through the 
    paginationBullets.forEach((bullet) => {
        bullet.classList.remove('active')
    })
}