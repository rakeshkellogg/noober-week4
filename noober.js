// Week 4 lab – Similar to last week's lab – but without the help!

// The provided code now goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should call a function called renderProduct, which accepts an object representing
// a single product object as input, and appends HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// 🔥 define your renderProduct function here


function renderProduct(product, levelOfService) {
  console.log("product", product);
  document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>
  `)

  for (let i = 0; i < product.length; i++) {
    const element = product[i];
    let passenger = element.passengerDetails;
    let border = element.purpleRequested ? "border-purple-500" : "border-gray-900";
    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    <div class="border-4 ${border} p-4 my-4 text-left">

      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passenger.first} ${passenger.last}</h2>
          <p class="font-bold text-gray-600">${passenger.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${element.numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex"> 
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${element.pickupLocation.address}</p>
          <p>${element.pickupLocation.city + '' +element.pickupLocation.state + ''+element.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${element.dropoffLocation.address}</p>
          <p>${element.dropoffLocation.city+ ''+ element.dropoffLocation.state +''+element.dropoffLocation.zip}</p>
        </div>
      </div>
      </div>
  `)
  }


}



async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)

  // 🔥 start here: write code to loop through the products; each
  // iteration of the loop should call your renderProduct function
  // make it work first; then extract to the separate renderProduct
  // function after it's 100% working without it

  for (let i = 0; i < json.length; i++) {
    //  console.log(json[i])
    for (let j = 0; j < json[i].length; j++) {
      // console.log(json[i][j])
      // console.log(json[i][j])
      console.log(json[i][j].passengerDetails)

      if (json[i].length > 1) {
        levelOfService = 'Noober Pool'
      } else if (json[i][0].purpleRequested) {
        levelOfService = 'Noober Purple'
      } else if (json[i][0].numberOfPassengers > 3) {
        levelOfService = 'Noober XL'
      } else {
        levelOfService = 'Noober X'
      }

    }
    let eachProduct = json[i]
    renderProduct(eachProduct, levelOfService)
    console.log(levelOfService)
  }


  // for (let i = 0; i < json.length; i++) {
  //   let eachProduct = json[i]
  //   renderProduct(eachProduct, levelOfService)
  //   console.log(eachProduct)

  // }
}

window.addEventListener('DOMContentLoaded', pageLoaded)

