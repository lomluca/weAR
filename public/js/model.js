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

function addToCart(newItem) {
  var cart;
  if(localStorage.shopcart) {
    cart = JSON.parse(localStorage.shopcart);
    cart.push(newItem);
  }
  else {
    cart = [newItem];
  }
  if(localStorage[newItem.id]) {
    localStorage[newItem.id]++;
  }
  else {
    localStorage[newItem.id] = 1;
  }
  localStorage.shopcart = JSON.stringify(cart);
}


function getShopCart() {
  if(localStorage.shopcart)
    return JSON.parse(localStorage.shopcart);
  else {
    return [];
  }
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

function getAddresses() {
  if(localStorage.address)
    return JSON.parse(localStorage.address);
  else {
    return [];
  }
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

function getTryOnSample() {
  return {
     id: 1, asset: '/assets/try-on_sample.jpg', alt: 'Wear Logo', href: '#'
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

function getFilters() {
  return {
    data: [
      { id: 1, name: 'Size', subfilters: [ { id: 11, name: 'S' }, { id: 12, name: 'M' }, { id: 13, name: 'L' }, { id: 14, name: 'XL' } ] },
      { id: 2, name: 'Color', subfilters: [ { id: 21, name: 'Black' }, { id: 22, name: 'Brown' }, { id: 23, name: 'Blue' } ] }
    ]
  }
}

function getClothes() {
  return {
    data: [
      { id: 1, asset: '/assets/try-on_items/shirt.jpg', href: '#' },
      { id: 2, asset: '/assets/try-on_items/trousers.jpg', href: '#' }
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

function getColorCode(color) {
  color = color.toLowerCase()
  if(color == 'black')
    return '#000'
  else if(color == 'white')
    return '#fff'
  else if(color == 'red')
    return '#ff4000'
  else if(color == 'grey')
    return '#848484'
}

function getColors() {
  return {
    data: [
      { id: 1, name: 'Black', value: '#000000' },
      { id: 2, name: 'Red', value: '#FF4000' },
      { id: 3, name: 'White', value: '#FFFFFF' },
      { id: 4, name: 'Grey', value: '#848484' },
      { id: 5, name: 'Green', value: '#04B404' }
    ]
  }
}

function getBrands() {
  return {
    data: [
      { id: 11, name: 'D&G' },
      { id: 12, name: 'Armani' },
      { id: 13, name: 'Gucci' },
      { id: 14, name: 'Valentino' },
      { id: 15, name: 'Calvin Klein' }
    ]
  }
}
