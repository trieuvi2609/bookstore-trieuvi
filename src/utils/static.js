export const STORE_NAME = 'HCMUT BOOKSTORE'

export const FOOTER_INFO = {
  contact: [
    'PHONE: Toll Free (123) 456-7890',
    'EMAIL: mail@ecommerce.com',
    'ADDRESS: Ho Chi Minh University of Technology, Ho Chi Minh, Vietnam',
    'Mon - Sun / 9:00 AM - 8:00 PM'
  ],
  services: ['Home page', 'List of Books', 'Profile user', 'Login & register'],
  link_services: ['/', '/books', '/profile', '/login'],
  other: ['About Us', 'Returns', 'Custom Service', 'Terms & Condition'],
  linksSocial: {
    facebook: 'http://www.facebook.com/',
    twitter: 'http://www.twitter.com/',
    linkedin: 'http://www.linkedin.com/'
  }
}

export const BANNER_HOME = {
  title: 'Welcome to book store',
  text: 'This is a website we created to serve people who loves books and wants to buy it!',
  searchTitle: 'Search book',
  searchInput: 'Name or type of book ...',
  img: require('assets/images/banner-bg.png').default
}

export const TYPES_BOOK = [
  {
    id: 1,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  },
  {
    id: 2,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  },
  {
    id: 3,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  },
  {
    id: 4,
    count: 12,
    name: 'Romantic',
    path: '/type/romantic'
  }
]

export const ABOUT_US = [
  {
    id: 1,
    img: require('assets/images/ava-2.jpg').default,
    name: 'Pham Gia Nguyen',
    title: 'Leader',
    text: 'Backend Developer',
    url: 'https://www.facebook.com/pham.tsuna'
  },
  {
    id: 2,
    img: require('assets/images/ava-1.jpg').default,

    name: 'Pham Khang Nguyen',
    title: 'Member',

    text: 'Frontend Developer',
    url: 'https://www.facebook.com/giotto.pham'
  },
  {
    id: 3,
    img: require('assets/images/ava-3.jpg').default,

    name: 'Tran Minh Hien',
    title: 'Member',

    text: 'Backend Developer',
    url: 'https://www.facebook.com/cse.minhhientran'
  },
  {
    id: 4,
    img: require('assets/images/avt-about-us.png').default,

    name: 'Tran Long An',
    title: 'Member',

    text: 'Frontend Developer',
    url: 'https://www.facebook.com/2123153an'
  },
  {
    id: 5,
    img: require('assets/images/ava-4.jpg').default,

    name: 'Nguyen Minh Ngoc',
    title: 'Member',

    text: 'Business Analyst',
    url: 'https://www.facebook.com/minhngoc.nguyen.98434'
  }
]
