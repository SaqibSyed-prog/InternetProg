// Declaring variable array of images. You can put as many as you want.
const myimages = ["VIVID_VICE", "Koe", "KSUKE-Contradiction"]; 
    
const prevBtn = document.getElementById("p-10-s-i-s-prev-btn");  // assigning variable for previous button
const nextBtn = document.getElementById("p-10-s-i-s-next-btn");  // assigning variable for next button
const imageContainer = document.getElementById("p-10-s-i-s-image-container"); // assigning variable for image container div
var myimage = "Koe"; // Assigning initial value for the varibale to show on page loading

var counter = 0;
prevBtn.addEventListener("click", function(){
    if (counter > 0 && counter < myimages.length){
            counter--;
            myimage = myimages[counter];
            imageContainer.innerHTML = '<img src="'+myimage+'.jpg" />';
        }
    });

nextBtn.addEventListener("click", function(){
    if (counter < myimages.length-1){
        counter++;
        myimage = myimages[counter];
        imageContainer.innerHTML = '<img src="'+myimage+'.jpg" />';
    }
});