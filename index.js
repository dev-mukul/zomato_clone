let isOrderAccepted = false;
let isValetFound = false;
let hasRestaurantSeenYourOrder = false;
let restaurantTimer = null;


// Zomato App - Boot up/ Power Up/ Start
window.addEventListener('load', function(){
    document.getElementById('acceptOrder').addEventListener('click', function(){
        askRestaurantToAcceptOrReject();
       })

    checkIfOrderAcceptedFromRestaurant()
        .then(isOrderAccepted => {
            console.log('updated from retaurant - ', isOrderAccepted);
            // step - Start preparing
            if(isOrderAccepted) alert('Your order has been accepted');
            //step 3  order rejected
            else alert('Sorry restaurant couldnt accpet your order! Returning your amount with zomato shares');
        })
        .catch(err => {
            console.log(err);
            alert('Something went wrong! Please try again later');
    });  
})


//Step 1 : Check whether restaurant accepted order or not
function askRestaurantToAcceptOrReject(){
    //callback
    setTimeout(()=> {
        isOrderAccepted = confirm('should restaurant accept order?');
        hasRestaurantSeenYourOrder = true;
    }, 1000);


}
// Step 2 - Check if Restaurant has accepted order
function checkIfOrderAcceptedFromRestaurant() {
        //Promise - resolve/accept or reject
        return new  Promise((resolve, reject)=> {
        restaurantTimer = setInterval(()=> {
            console.log('checking if order accepted or not');
            if(!hasRestaurantSeenYourOrder) return;

            if(isOrderAccepted) resolve(true);
            else resolve(flase);

            clearInterval(restaurantTimer);
        },2000);
    });
    
    }