let isOrderAccepted = false;
let isValetFound = false;
let hasRestaurantSeenYourOrder = false;
let restaurantTimer = null;


// Zomato App - Boot up/ Power Up/ Start
window.addEventListener('load', function(){
    document.getElementById('acceptOrder').addEventListener('click', function(){
        askRestaurantToAcceptOrReject();

        checkIfOrderAcceptedFromRestaurant()
        .then(res=>{
            console.log( 'updated from retaurant -' ,res);
        })
       .catch(err=>{
           console.log(err);
       })
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
            else reject(flase);

            clearInterval(restaurantTimer);
        },2000);
    });
    
    }