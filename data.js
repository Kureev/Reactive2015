const React = require('react-native');
const {
  ListView,
} = React;

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

module.exports = {
   workshop: ds.cloneWithRows([
      {
         'time': '8:00 – 9:00',
         'title': 'DOORS OPEN & Registration',
      }, {
         'time': '9:00 – 16:00',
         'title': 'WORKSHOPS',
         'speaker': 'React technologies',
      },
   ]),
   day1: ds.cloneWithRows([
      {
         'time': '8:00 – 9:00',
         'title': 'DOORS OPEN & Registration',
      }, {
			'time': '9:00 – 9:15',
			'title': 'Conference opening',
      }, {
			'time': '9:15 – 9:45',
			'title': 'TBD',
         'speaker': 'James Long',
         'company': 'Mozilla',
         'avatar': 'https://reactive2015.com/assets/img/team/james_long.jpg',
		}, {
			'time': '9:45 – 10:45',
			'title': 'BIND TO THE CLOUD WITH FALCOR',
         'speaker': 'Paul Taylor',
         'company': 'Netflix',
         'category': 'rethinking_react',
         'avatar': 'https://reactive2015.com/assets/img/team/paul_taylor.jpg',
		}, {
         'time': '10:45 – 11:15',
         'title': 'VICTORY.JS - A POWERFUL DATA VISUALIZATION LIBRARY FOR REACTJS',
         'speaker': 'Colin Megil',
         'company': 'Formidable Labs',
         'category': 'react_everywhere',
         'avatar': 'https://reactive2015.com/assets/img/team/colin_megill.jpg',
         'excerpt': 'We tried swapped out D3\'s DOM model in favor of React. The result? Love at first iteration. Building a data visualization library as React components means that you can reclaim your SVG as declarative markup, NPM install visualizations directly into your project (can\'t do that with bl.ocks!), fork them, remix them and file issues against them. It also meant completely rethinking how animations are done, since D3\'s animation model relies on its DOM model. Come learn the API, and what it means for the future of interactive data visualization.',
      }, {
			'time': '11:15 – 11:45',
			'title': 'Coffee Break',
		}, {
			'time': '11:45 – 12:15 ',
			'title': 'FUNCTIONAL PROGRAMMING IN JAVASCRIPT. WHAT, WHY, AND HOW.',
         'speaker': 'Daniel Steigerwald',
         'company': 'VacuumLabs',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/daniel_steigerwald.jpg',
		}, {
			'time': '12:15 – 13:00',
			'title': 'DECONSTRUCTING REACT',
         'speaker': 'Nikita Prokopov',
         'company': 'Datascript',
         'category': 'react_general',
         'avatar': 'https://reactive2015.com/assets/img/team/nikita_prokopov.jpg',
		}, {
			'time': '13:00 – 13:45',
			'title': 'THE CASE FOR CSS MODULES',
         'speaker': 'Mark Dalgleish',
         'company': 'SEEK',
         'category': 'react_general',
         'avatar': 'https://reactive2015.com/assets/img/team/mark_dalgleish.jpg',
		}, {
			'time': '13:45 – 14:45',
			'title': 'Lunch Break',
		}, {
			'time': '14:45 – 15:15',
			'title': 'STATE, UI AND THE STUFF IN BETWEEN',
         'speaker': 'Christian Alfoni',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/christian_alfoni.jpg',
		}, {
			'time': '15:15 – 15:45',
			'title': 'FRONT‐END CAN BE MORE FUNCTIONAL',
         'speaker': 'Julia Gao',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/julia_gao.jpg',
		}, {
			'time': '15:45 – 16:15',
			'title': 'TBD',
         'speaker': 'Victor Grishchenko',
         'company': 'Swarm.js',
         'category': 'rethinking_react',
         'avatar': 'https://reactive2015.com/assets/img/team/victor_grishchenko.jpg',
		}, {
			'time': '16:15 – 16:45',
			'title': 'RXJS EVOLVED',
         'speaker': 'Paul Taylor',
         'company': 'Netflix',
         'category': 'data_flow',
         'excerpt': 'Imagine how easy building your web application would be if all of your data was available in-memory on the client. Falcor lets you to code that way.\n\nFalcor is the open-source, JS data access framework that powers Netflix. Falcor lets you represent all of your cloud data sources as one virtual JSON model on the server. On the client, Falcor makes it appear as if the entire JSON model is available locally and allows you to access data the same way you would from an in-memory JSON object. Falcor retrieves the model data you request from the cloud on-demand, transparently handling all the network communication and keeping the server and client in sync.\n\nFalcor is not a replacement for your MVC framework, your database, or your application server. Falcor fits seamlessly into your existing stack and lets the layers communicate more efficiently.\n\nGet an inside look at the innovative data platform that powers the Netflix UIs and the new UI design patterns it enables. Learn more how Falcor powers Netflix, and how you can integrate into your existing stack.',
         'avatar': 'https://reactive2015.com/assets/img/team/paul_taylor.jpg',
		}, {
			'time': '16:45 – 17:15',
			'title': 'Coffee Break',
		}, {
			'time': '17:15 – 17:45',
			'title': 'UNIVERSAL REACT + FLUX AT SCALE',
         'speaker': 'Rajiv Tirumalareddy',
         'company': 'Yahoo',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/rajiv_tirumalareddy.jpg',
		}, {
			'time': '17:45 – 18:30',
			'title': 'INTEGRATING REACT WITH REACTIVE DATABASES',
         'speaker': 'Tomas Kulich',
         'company': 'VacuumLabs',
         'category': 'rethinking_react',
         'avatar': 'https://reactive2015.com/assets/img/team/tomas_kulich.jpg',
		}, {
			'time': '18:30 – 19:30',
			'title': 'LIGHTNING TALKS',
         'speaker': 'Speakers announced soon',
		}, {
			'time': '19:30',
			'title': 'Door Closing',
		},
    ]),

   day2: ds.cloneWithRows([
      {
			'time': '8:30–9:00',
			'title': 'Doors Open',
		}, {
			'time': '9:00–9:30',
			'title': 'REACT, TRANSPARENT REACTIVE PROGRAMMING AND MUTABLE DATA STRUCTURES',
			'speaker': 'Michel Weststrate',
			'company': 'Mendix',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/michel_weststrate.jpg',
		}, {
			'time': '9:30–10:00',
			'title': 'TBD',
			'speaker': 'Mike Grabowski',
			'company': 'Man+Moon',
         'category': 'react_everywhere',
         'avatar': 'https://reactive2015.com/assets/img/team/mike_grabowski.jpg',
		}, {
			'time': '10:00–10:45',
			'title': 'TBD',
			'speaker': 'Guillermo Rauch',
			'company': 'LearnBoost, Automattic',
         'category': 'react_general',
         'avatar': 'https://reactive2015.com/assets/img/team/guillermo_rauch.jpg',
		}, {
			'time': '10:45–11:15',
			'title': 'Coffee Break',
		}, {
			'time': '11:15–11:45',
			'title': 'D3 WITH REACT',
			'speaker': 'Andreas Savvides',
			'company': 'Twitter',
         'category': 'react_everywhere',
         'avatar': 'https://reactive2015.com/assets/img/team/andreas_savvides.jpg',
		}, {
			'time': '11:45–12:15',
			'title': 'WORK AND PLAY IN THE REACT NATIVE PLAYGROUND',
			'speaker': 'Joshua Sierles',
			'company': 'Independent',
         'category': 'react_everywhere',
         'avatar': 'https://reactive2015.com/assets/img/team/joshua_sierles.jpg',
		}, {
			'time': '12:15–13:15',
			'title': 'EFFECTS AS DATA',
			'speaker': 'Richard Feldman',
			'company': 'NoRedInk',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/richard_feldman.jpg',
		}, {
			'time': '13:15–14:15',
			'title': 'Lunch Break',
		}, {
			'time': '14:15–14:45',
			'title': 'GOING REACTIVE WITH REACT.',
			'speaker': 'François de Campredon',
			'company': 'Fadio IT',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/francois_de_campredon.jpg',
		}, {
			'time': '14:45–15:15',
			'title': 'FORM VALIDATION MADE SIMPLE WITH REACT',
			'speaker': 'Marcela Hrda',
			'company': 'VacuumLabs',
         'category': 'react_general',
         'avatar': 'https://reactive2015.com/assets/img/team/marcelka_hrda.jpg',
		}, {
			'time': '15:15–15:45',
			'title': 'FROM REACT WEB TO NATIVE MOBILE: MAPPING OUT THE UNKNOWN UNKNOWNS',
			'speaker': 'Brent Vatne',
			'company': 'Independent',
         'category': 'react_everywhere',
         'avatar': 'https://reactive2015.com/assets/img/team/brent_vatne.jpg',
		}, {
			'time': '15:45–16:15',
			'title': 'TBD',
			'speaker': 'Martin Koníček',
         'company': 'Facebook',
         'category': 'react_everywhere',
         'avatar': 'https://reactive2015.com/assets/img/team/martin_konicek.jpg',
		}, {
			'time': '16:15–16:45',
			'title': 'Coffee Break',
		}, {
			'time': '16:45–17:15',
			'title': 'DATO — A FUNCTIONAL WAY TO BUILD REACTIVE APPLICATIONS',
			'speaker': 'Sean Grove',
			'company': 'Bushido',
         'category': 'rethinking_react',
         'avatar': 'https://reactive2015.com/assets/img/team/sean_grove.jpg',
		}, {
			'time': '17:15–18:00',
			'title': 'CYCLE.JS AND FUNCTIONAL REACTIVE USER INTERFACES',
			'speaker': 'Andre Staltz',
			'company': 'Futurice',
         'category': 'data_flow',
         'avatar': 'https://reactive2015.com/assets/img/team/andre_staltz.jpg',
		}, {
			'time': '18:00–18:30',
			'title': 'TBD',
			'speaker': 'Daniel Hengeveld',
			'company': 'Github',
         'category': 'react_everywhere',
         'avatar': 'https://reactive2015.com/assets/img/team/daniel_hengeveld.jpg',
		}, {
			'time': '18:30–19:00',
			'title': 'Closing ceremony',
		}, {
			'time': '19:00',
			'title': 'Door Closing',
      },
    ]),
};
