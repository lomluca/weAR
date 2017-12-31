// This little library should simulate remote API calls and return data to user

const MODEL = [
  // Those are women clothing items
  { id: 1, name: 'Floral Midi Wrap Dress', assets: [ '/assets/items/0001/1.jpg', '/assets/items/0001/2.jpg'  ], brand: 'VIMABEL WRAP DRESS', sizes: [ 'S', 'M', 'L' ], colors: [ 'Black', 'White' ], price: 29.99 },
  { id: 2, name: 'VMCELEB - Blouse', assets: [ '/assets/items/0002/1.jpg', '/assets/items/0002/2.jpg'  ], brand: 'VMCELEB', sizes: [ 'S', 'M', 'L' ], colors: [ 'Black', 'White' ],price: 29.99 },
  { id: 3, name: 'mint&berry - Shirt', assets: [ '/assets/items/0003/1.jpg', '/assets/items/0003/2.jpg' ], brand: 'mint&berry', sizes: [ 'S', 'M', 'L' ], colors: [ 'Black', 'White' ], price: 39.99 },
  { id: 4, name: 'ONLMANDY CHOKER DRESS', assets: [ '/assets/items/0004/1.jpg', '/assets/items/0004/2.jpg'  ], brand: 'ONLMANDY', sizes: [ 'S', 'M', 'L' ], colors: [ 'Black', 'White' ], price: 31.49 },
  { id: 5, name: 'Summer Dress', assets: [ '/assets/items/0005/1.jpg', '/assets/items/0005/2.jpg'  ], brand: 'VIMABEL WRAP DRESS', sizes: [ 'S', 'M' ], colors: [ 'Pink'], price: 32.49 },
  { id: 6, name: 'Long Sleeved Shirt', assets: [ '/assets/items/0006/1.jpg', '/assets/items/0006/2.jpg'  ], brand: 'VIMABEL WRAP DRESS', sizes: [ 'M', 'L' ], colors: [ 'Grey', 'Brown' ], price: 14.99 },
  { id: 7, name: 'JDYASH - Jacket', assets: [ '/assets/items/0007/1.jpg', '/assets/items/0007/2.jpg'  ], brand: 'JDYASH', sizes: [ 'S', 'M', 'L' ], colors: [ 'Blue', 'Violet'], price: 20.00 },
  { id: 8, name: 'Blue T-shirt', assets: [ '/assets/items/0008/1.jpg', '/assets/items/0008/2.jpg'  ], brand: 'VIMABEL WRAP DRESS', sizes: [ 'S' ], colors: [ 'Blue' ],price: 12.99 },
  { id: 9, name: 'BOW BACK - Skirt', assets: [ '/assets/items/0009/1.jpg', '/assets/items/0009/2.jpg'  ], brand: 'BOW BACK', sizes: [ 'S' ], colors: ['Black', 'White' ], price: 21.59 },
  { id: 10, name: 'VIMABEL WRAP DRESS - Summer Dress', assets: [ '/assets/items/0010/1.jpg', '/assets/items/0010/2.jpg'  ], brand: 'VIMABEL WRAP DRESS', sizes: [ 'S' ], colors: [ 'Black', 'White' ], price: 49.99 },
  // Those are men clothing items
  { id: 11, name: 'JUST DO IT FULL ZIP', assets: [ '/assets/items/0011/1.jpg', '/assets/items/0011/2.jpg'  ], brand: 'Nike', sizes: [ 'S', 'M', 'L', 'XL' ], colors: [ 'Black' ], price: 59.99 },
  { id: 12, name: 'ONSVANCE SKINNY', assets: [ '/assets/items/0012/1.jpg', '/assets/items/0012/2.jpg'  ], brand: 'Only & Sons', sizes: [ 'M', 'L' ], colors: [ 'Black', 'White', 'Brown', 'Grey' ], price: 59.99 },
  // Those are the popular items
  { id: 21, name: 'WATCH HAT', assets: [ '/assets/items/0021/1.jpg', '/assets/items/0021/2.jpg'  ], brand: 'Carhartt', sizes: [ 'M' ], colors: [ 'Black', 'Red', 'Grey' ], price: 18.99 },
  { id: 22, name: 'Jacket', assets: [ '/assets/items/0022/1.jpg', '/assets/items/0022/2.jpg'  ], brand: 'Zalando Essentials', sizes: [ 'S', 'M', 'L', 'XL' ], colors: [ 'Black' ], price: 35.99 },
  { id: 23, name: 'CHARLINE - Sneakers', assets: [ '/assets/items/0023/1.jpg', '/assets/items/0023/2.jpg'  ], brand: 'le coq sportif', sizes: [ '37', '38', '39', '40' ], colors: [ 'Pink' ], price: 74.99 },
  { id: 24, name: 'EXPLORATEUR MID SPORT ', assets: [ '/assets/items/0024/1.jpg', '/assets/items/0024/2.jpg'  ], brand: 'Lacoste', sizes: [ '42', '43' ], colors: [ 'Kaki' ], price: 129.95 },
  { id: 25, name: 'LOIS FRILL', assets: [ '/assets/items/0025/1.jpg', '/assets/items/0025/2.jpg'  ], brand: 'French Connection', sizes: [ 'M', 'L' ], colors: [ 'Black', 'White', 'Red' ], price: 84.99 },
  { id: 26, name: 'SPRINTYLL SCARF', assets: [ '/assets/items/0026/1.jpg', '/assets/items/0026/2.jpg'  ], brand: 'Diesel', sizes: [  ], colors: [ 'Black', 'White', 'Red' ], price: 84.99 },
  { id: 27, name: 'Sandals with Heels', assets: [ '/assets/items/0027/1.jpg', '/assets/items/0027/2.jpg'  ], brand: 'Anna Field', sizes: [ '38', '39', '40' ], colors: [ 'Pink', 'White', 'Silver' ], price: 29.99 },

]

// Creating some usefull events
var lsEvents = {
  shoppingCartInsert: null,
  shoppingCartRemove: null
}
function registerLsEvent(name, callback, overwrite = false) {
  if(overwrite || lsEvents[name] == null) lsEvents[name] = callback
  else throw 'Event handler for event \'' + name + '\' already set'
}
function unregisterLsEvent(name) {
  lsEvents[name] = null
}

//Used to check if an item with id (id) is contained into the array
function contains(array, item) {
  for(var i = 0; i < array.length; i++) {
    if(array[i].id == item.id)
      return true;
  }
  return false;
}

function indexOf(array, id) {
  for(var i = 0; i < array.length; i++) {
    if(array[i].id == id)
      return i;
  }
  return -1;
}

// add new item to shopcart, if it doesn't exist, create it!
// add also quantity count to localStorage
function addToCart(newItem) {
  var cart;
  //check if shopcart exist in localStorage, otherwise create it
  if(localStorage.shopcart) {
    cart = JSON.parse(localStorage.shopcart);
    if(!contains(cart, newItem))
      cart.push(newItem);
  }
  else {
    cart = [newItem];
  }

  //quantity count for each element in the shopcart
  localStorage[newItem.id] = (localStorage[newItem.id]) ? parseInt(localStorage[newItem.id]) + 1 : 1;
  localStorage.shopcart = JSON.stringify(cart);

  // Emit event
  if(lsEvents['shoppingCartInsert'] != null) {
    lsEvents['shoppingCartInsert']()
  }
}

//delete shopping cart element by id (each elem has an id)
//return new shopping cart
function deleteCartItem(id) {
  var cart = JSON.parse(localStorage.shopcart);
  const index = indexOf(cart, id);

  //delete item from cart
  cart.splice(index, 1);
  localStorage.shopcart = JSON.stringify(cart);

  //delete quantity from localStorage
  localStorage.removeItem(id);

  // Emit event
  if(lsEvents['shoppingCartRemove'] != null) {
    lsEvents['shoppingCartRemove']()
  }
}


function getShopCart() {
  if(localStorage.shopcart)
    return JSON.parse(localStorage.shopcart);
  else {
    return [];
  }
}

function getShopCartItemsCount() {
  var count = 0
  var cart = JSON.parse(localStorage.shopcart)
  for(var item in cart) {
    count += parseInt(localStorage[cart[item].id])
  }
  return count
}

function addCard(newCard) {
  var cards;
  if(localStorage.cards) {
    cards = JSON.parse(localStorage.cards);
    cards.push(newCard);
  }
  else {
    cards = [newCard];
  }
  localStorage.cards = JSON.stringify(cards);
}

//delete card by index
//return new card set
function deleteCard(index) {
  var cards = JSON.parse(localStorage.cards)
  cards.splice(index, 1)
  localStorage.setItem("cards", JSON.stringify(cards))
}

function getCards() {
  if(localStorage.cards)
    return JSON.parse(localStorage.cards);
  else {
    return [];
  }
}

function addAddress(newAddress) {
  var address;
  if(localStorage.address) {
    address = JSON.parse(localStorage.address);
    address.push(newAddress);
  }
  else {
    address = [newAddress];
  }
  localStorage.address = JSON.stringify(address);
}

//delete address by index
//return new address set
function deleteAddress(index) {
  var addresses = JSON.parse(localStorage.addresses)
  addresses.splice(index, 1)
  localStorage.setItem("addresses", JSON.stringify(addresses))
}

function getAddresses() {
  if(localStorage.addresses)
    return JSON.parse(localStorage.addresses);
  else {
    return [];
  }
}

function getGeoAddress(self){
  var currgeocoder;
  var gStreet, gCity, gProvince, gZip, gCountry;
  

  navigator.geolocation.getCurrentPosition(
    function( position ){ // success cb

      /* Current Coordinate */
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var google_map_pos = new google.maps.LatLng( lat, lng );

      /* Use Geocoder to get address */
      var google_maps_geocoder = new google.maps.Geocoder();
      google_maps_geocoder.geocode(
          { 'latLng': google_map_pos },
          function( results, status ) {
              if ( status == google.maps.GeocoderStatus.OK && results[0] ) {
                  console.log( results[0]);
                  for(var i=0;i<results[0].address_components.length;i++){
                    var types = results[0].address_components[i].types;
                    if(types=="street_number"){
                       gStreet = results[0].address_components[i].short_name;
                     }
                  }
                  for(var i=0;i<results[0].address_components.length;i++){
                    var types = results[0].address_components[i].types;
                    if(types=="route"){
                       gStreet += " " + results[0].address_components[i].short_name;
                     }
                  }
                  for(var i=0;i<results[0].address_components.length;i++){
                    var types = results[0].address_components[i].types;
                    if(types=="administrative_area_level_3,political"){
                       gCity = results[0].address_components[i].short_name;
                     }
                  }for(var i=0;i<results[0].address_components.length;i++){
                    var types = results[0].address_components[i].types;
                    if(types=="administrative_area_level_2,political"){
                       gProvince = results[0].address_components[i].short_name;
                     }
                  }
                  for(var i=0;i<results[0].address_components.length;i++){
                    var types = results[0].address_components[i].types;
                    if(types=="postal_code"){
                       gZip = results[0].address_components[i].short_name;
                     }
                  }
                  for(var i=0;i<results[0].address_components.length;i++){
                    var types = results[0].address_components[i].types;
                    if(types=="country,political"){
                       gCountry = results[0].address_components[i].long_name;
                     }
                  }
                  
                  self.geoAddress = { street: gStreet, city: gCity, province: gProvince, zip: gZip, country: gCountry };
                  //console.log(gStreet); console.log(gCity); console.log(gProvince); console.log(gZip);
              }
          }
      );
    }
  );
}

function getCarouselData() {
  return {
    data: [
      { id: 1, asset: '/assets/carousel/1.jpg', alt: 'Ad Banner 1', href: '#'  },
      { id: 2, asset: '/assets/carousel/2.jpg', alt: 'Ad Banner 2', href: '#'  },
      { id: 3, asset: '/assets/carousel/3.jpg', alt: 'Ad Banner 3', href: '#'  },
      { id: 4, asset: '/assets/carousel/4.jpg', alt: 'Ad Banner 4', href: '#'  }
    ]
  }
}

function getPopularItems() {
  return {
    data: MODEL.filter(function(item) { return item.id > 20 && item.id <= 30  })
  }
}

function getLogo() {
  return {
     id: 1, asset: '/assets/logo_wear.png', alt: 'Wear Logo', href: '#'
  }
}

function getCategories() {
  return {
    data: [
      { id: 1, name: 'Man', subcategories: [ { id: 11, name: 'Shirts', href: '/search.html?q=man' }, { id: 12, name: 'Pants', href: '/search.html?q=man' } ], href: '/search.html?q=man' },
      { id: 2, name: 'Woman', subcategories: [ { id: 21, name: 'Skirts', href: '/search.html?q=woman' }, { id: 22, name: 'Trousers', href: '/search.html?q=woman' } ], href: '/search.html?q=woman' },
      { id: 3, name: 'Winter Collection', href: '/search.html?q=man' },
      { id: 4, name: 'Promos', href: '/search.html?q=man' }
    ]
  }
}

function query(params, items = MODEL) {
  var q = params.get ? params.get('q') : params['q']
  if(q) {
    q = q.toLowerCase()
    if(q == 'woman')
      return {
        data: items.filter(function(item) { return item.id <= 10 })
      }
    else if(q == 'man')
      return {
        data: items.filter(function(item) { return item.id > 10 && item.id <= 20 })
      }
    else
      return {
        data: items.filter(function(item) { return item.name.toLowerCase().indexOf(q) > -1 })
      }
  }

  var data = []

  var priceRange = params['priceRange']
  if(priceRange.length == 2)
    data = items.filter(function(item) {
      return item.price >= priceRange[0] && item.price <= priceRange[1]
    })

  var colors = params.get ? params.get('colors') : params['colors']
  if(colors) colors = colors.map(function(item) { item.toLowerCase() })
  if(colors.length > 0)
    data = data.filter(function(item) {
      for(var i = 0; i < colors.length; i++)
        for(var j = 0; j < item.colors.length; j++)
          if(colors[i] == item.colors[j]) return true
      return false
    })

  var brands = params.get ? params.get('brands') : params['brands']
  if(brands.length > 0)
    data = data.filter(function(item) {
      for(var i = 0; i < brands.length; i++)
          if(brands[i] == item.brand) return true
      return false
    })

  var sizes = params.get ? params.get('sizes') : params['sizes']
  if(sizes.length > 0)
    data = data.filter(function(item) {
      for(var i = 0; i < sizes.length; i++)
        for(var j = 0; j < item.sizes.length; j++)
          if(sizes[i] == item.sizes[j]) return true
      return false
    })

  return {
    data
  }
}

function getItem(id) {
  return {
    data: MODEL.filter(function(item) { return item.id == id } )[0]
  }
}

function getReleatedItems(item) {
  if(item.id <= 10) {
    return {
      data: MODEL.filter(function(item) { return item.id <= 10 } )
    }
  }
  else if(item.id > 10 && item.id <= 20) {
    return {
      data: MODEL.filter(function(item) { return item.id > 10 && item.id <= 20 } )
    }
  }
  else {
    return {
      data: MODEL.filter(function(item) { return item.id > 20 } )
    }
  }
}

// Return an object containing all distinct colors, brands and sizes for a given model subset
function distinctQueryValues(items) {
  var brands = []
  var colors = []
  var sizes = []
  var minPrice = items[0].price
  var maxPrice = minPrice

  for(var n = 0; n < items.length; n++) {
    var i = items[n]
    if(brands.indexOf(i.brand) == -1) brands.push(i.brand)
    for(var j = 0; j < i.colors.length; j++) {
      if(colors.indexOf(i.colors[j]) == -1) colors.push(i.colors[j])
    }
    for(var j = 0; j < i.sizes.length; j++) {
      if(sizes.indexOf(i.sizes[j]) == -1) sizes.push(i.sizes[j])
    }
    if(i.price < minPrice) minPrice = i.price
    if(i.price > maxPrice) maxPrice = i.price
  }

  return {
    brands,
    colors,
    sizes,
    minPrice,
    maxPrice
  }
}
