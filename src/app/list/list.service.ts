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

  factsList = [
    { transition_icon: '../../assets/img/check-box.svg', title: '218', description: 'completed projects' },
    { transition_icon: '../../assets/img/hourglass.svg', title: '360', description: 'hours of work/month' },
    { transition_icon: '../../assets/img/price-ticket.svg', title: '135', description: 'solved tickets' },
    { transition_icon: '../../assets/img/fingerup.svg', title: '174', description: 'satisfied clients' }
  ];

  membersList = [
    { img: 'http://via.placeholder.com/272x272', social: [
        { icon: '../assets/img/facebook-logo.svg', link: './', link_title: 'facebook' },
        { icon: '../assets/img/twitter-logo.svg', link: './', link_title: 'twitter' },
        { icon: '../assets/img/google-plus-logo.svg', link: './', link_title: 'google' },
        { icon: '../assets/img/vimeo-logo.svg', link: './', link_title: 'vimeo' },
        { icon: '../assets/img/dribble-logo.svg', link: './', link_title: 'dribble' }
      ],
      button_title: 'alexis_simpson', title: 'CEO & Developer',
      contacts: [{ email: 'a.simpson@unique.com'}, { phone: '38(066)22-32-314' }]},
    { img: 'http://via.placeholder.com/272x272', social: [
        { icon: '../assets/img/facebook-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/twitter-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/google-plus-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/vimeo-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/dribble-logo.svg', link: './', link_title: '' }
      ],
      button_title: 'alexis_simpson', title: 'CEO & Developer',
      contacts: [{ email: 'a.simpson@unique.com'}, { phone: '38(066)22-32-314' }]},
    { img: 'http://via.placeholder.com/272x272', social: [
        { icon: '../assets/img/facebook-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/twitter-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/google-plus-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/vimeo-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/dribble-logo.svg', link: './', link_title: '' }
      ],
      button_title: 'alexis_simpson', title: 'CEO & Developer',
      contacts: [{ email: 'a.simpson@unique.com'}, { phone: '38(066)22-32-314' }]},
    { img: 'http://via.placeholder.com/272x272', social: [
        { icon: '../assets/img/facebook-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/twitter-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/google-plus-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/vimeo-logo.svg', link: './', link_title: '' },
        { icon: '../assets/img/dribble-logo.svg', link: './', link_title: '' }
      ],
      button_title: 'alexis_simpson', title: 'CEO & Developer',
      contacts: [{ email: 'a.simpson@unique.com'}, { phone: '38(066)22-32-314' }]}

  ];

  quotesList = [
    { person: { name: 'Alex Simpson', post: 'CEO & Developer'}, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta dolorem eius eligendi enim error esse expedita, explicabo fugiat hic illo itaque nobis quae, quam qui ratione sit? Dolorem, mollitia!', carousel: true },
    { person: { name: 'Alex Simpson', post: 'CEO & Developer'}, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta dolorem eius eligendi enim error esse expedita, explicabo fugiat hic illo itaque nobis quae, quam qui ratione sit? Dolorem, mollitia!', carousel: true },
    { person: { name: 'Alex Simpson', post: 'CEO & Developer'}, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta dolorem eius eligendi enim error esse expedita, explicabo fugiat hic illo itaque nobis quae, quam qui ratione sit? Dolorem, mollitia!', carousel: true },
    { person: { name: 'Alex Simpson', post: 'CEO & Developer'}, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta dolorem eius eligendi enim error esse expedita, explicabo fugiat hic illo itaque nobis quae, quam qui ratione sit? Dolorem, mollitia!', carousel: true }
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

  getFactsList(){
    return this.factsList;
  }

  getMembersList(){
    return this.membersList;
  }

  getQuotesList(){
    return this.quotesList;
  }
}
