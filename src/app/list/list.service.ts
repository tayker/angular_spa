import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  offerList = [
    { icon: '../../assets/img/computer-screen.svg', title: 'responsive & multipurpose', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.', link_title: 'read more' },
    { icon: '../../assets/img/puzzle.svg', title: 'easy customisation', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.', link_title: 'read more' },
    { icon: '../../assets/img/wheel.svg', title: 'awesome friendly support', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.', link_title: 'read more' }
  ];

  navList = [
    { title: 'home', link: '#home' },
    { title: 'portfolio', link: '#portfolio' },
    { title: 'blog', link: '#blog' },
    { title: 'pages', link: '#pages' },
    { title: 'features', link: '#features' },
    { title: 'mega menu', link: '#megamenu' },
    { title: 'contact', link: '#contact' }
  ];

  featuresList = [
    { icon: '../../assets/img/computer-screen.svg', title: 'responsive & multipurpose', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
    { icon: '../../assets/img/puzzle.svg', title: 'easy customisation', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
    { icon: '../../assets/img/wheel.svg', title: 'awesome friendly support', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' }
  ];

  markerList = [
    { icon: '../../assets/img/computer-screen.svg', title: 'responsive & multipurpose', subtitle: 'Desktops, Tablets & Phones', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
    { icon: '../../assets/img/puzzle.svg', title: 'easy customization', subtitle: 'One Click Demo Content Installation', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
    { icon: '../../assets/img/option.svg', title: 'unlimited features', subtitle: 'Shortcodes, Typography & Different Layouts', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
    { icon: '../../assets/img/wheel.svg', title: 'clean & modular coding', subtitle: '100% Clean, Valid & Well-Commented Coding', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
    { icon: '../../assets/img/shopping-cart.svg', title: 'the best e-commerce solutions', subtitle: 'WooCommerce Fully Integration', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
    { icon: '../../assets/img/star.svg', title: 'awesome friendly support', subtitle: 'Free Lifetime Support & Updates', description: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.' },
  ];

  skillsList = [
    { percent: 75, title: 'web design' },
    { percent: 92, title: 'web development' },
    { percent: 68, title: 'speed optimization' },
    { percent: 100, title: 'customer support' },
    { percent: 83, title: 'marketing' },
    { percent: 50, title: 'advertisement' }
  ];

  worksList = [
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Corporate Brochure', description: 'Illustrator/Print', likescount: 136 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Market', description: 'WEB', likescount: 12 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Social Network', description: 'WEB/Photoshop', likescount: 244 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Analytics Center', description: 'SEO', likescount: 132 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Online Shop', description: 'WEB(Back-end)', likescount: 113 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Corporate Brochure', description: 'Illustrator/Print', likescount: 136 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Market', description: 'WEB', likescount: 12 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Social Network', description: 'WEB/Photoshop', likescount: 244 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Analytics Center', description: 'SEO', likescount: 132 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Online Shop', description: 'WEB(Back-end)', likescount: 113 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Online Shop', description: 'WEB(Back-end)', likescount: 113 },
    { icons: [{ icon1: '../../assets/img/clip.svg' }, { icon2: '../../assets/img/search.svg' }, { icon3: '../../assets/img/like.svg' }], title: 'Online Shop', description: 'WEB(Back-end)', likescount: 113 }
  ];
  getOfferList(){
    return this.offerList;
  }

  getNavList(){
    return this.navList;
  }

  getFeaturesList(){
    return this.featuresList;
  }

  getMarkerList(){
    return this.markerList;
  }

  getSlillsList(){
    return this.skillsList;
  }

  getWorksList(){
    return this.worksList;
  }
}
