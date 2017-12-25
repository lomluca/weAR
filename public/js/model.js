// This little library should simulate remote API calls and return data to user

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

function getImageBlockData() {
  return {
    data: [
      { id: 1, asset: '/assets/imageBlock/sweather.jpg', alt: 'Ad Banner 1', href: '#', position: '0', description: 'Sweather 1'  , price: '22,50 €' },
      { id: 2, asset: '/assets/imageBlock/sweather2.jpg', alt: 'Ad Banner 2', href: '#', position: '1', description: 'Sweather 2' , price: '12,00 €'},
      { id: 3, asset: '/assets/imageBlock/skirt.jpg', alt: 'Ad Banner 3', href: '#', position: '0', description: 'Skirt', price: '32,50 €' }
    ]
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
      { id: 1, name: 'Man', subcategories: [ { id: 11, name: 'Shirts' }, { id: 12, name: 'Pants' } ] },
      { id: 2, name: 'Woman', subcategories: [ { id: 21, name: 'Skirts' }, { id: 22, name: 'Trousers' } ] },
      { id: 3, name: 'Winter Collection' },
      { id: 4, name: 'Promos' }
    ]
  }
}

function query(params) {
  return {
    data: [
      { id: 1, name: 'Floral Midi Wrap Dress', assets: [ '/assets/items/0001/1.jpg', '/assets/items/0001/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 29.99 },
      { id: 2, name: 'VMCELEB - Blouse', assets: [ '/assets/items/0002/1.jpg', '/assets/items/0002/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 29.99 },
      { id: 3, name: 'mint&berry - Shirt', assets: [ '/assets/items/0003/1.jpg', '/assets/items/0003/2.jpg'  ], sizes: [ 'S', 'M', 'L' ], price: 39.99 }
    ]
  }
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
