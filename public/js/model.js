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
}
