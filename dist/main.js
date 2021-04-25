var app = new Vue({
  el: '#root',
  data: {
    journal:[
      {
        titolo: 'Food Corner: Top Japanese Restaurants for Sushi',
        immagine: './images/single-post-img3.jpg'
      },
      {
        titolo: "Roundup: My New Favourite Recipes For Healthy Living",
        immagine: './images/fi-roundup-600x395.jpg'
      },
      {
        titolo: "Why These Toasts with Tea are My New Favorite",
        immagine: './images/fi-toasts-600x395.jpg'
      }
    ],

    tableimages:[
      {
        titolo: 'Roundup: My New Favourite Recipes For Healthy Living',
        immagine: './images/fi-roundup-600x395.jpg'
      },
      {
        titolo: 'Meal Prep: Korean Bibimbap with Kimchi',
        immagine: './images/fi-korean-food-600x395.jpg'
      },
      {
        titolo: 'Why These Toasts with Tea are My New Favorite',
        immagine: './images/fi-toasts-600x395.jpg'
      },
      {
        titolo: 'Exploring Street Food in Bangkok',
        immagine: './images/fi-street-food-600x395.jpg'
      },
      {
        titolo: 'Organic Choices For Healthier Living',
        immagine: './images/fi-organic-breakfast-600x395.jpg'
      },
      {
        titolo: '5 Waterside Restaurants in Istanbul for Special Events',
        immagine: './images/fi-water-side-rest-600x395.jpg'
      }
    ]
  },
  methods:{
    data: function () {
      let data = new Date();
      let gg = data.getDate();
      let mm = data.getMonth();
      let aaaa = data.getFullYear();
      let ora = data.getHours();
      let minuti = data.getMinutes();
        if(mm == 0) mm = "Gennaio";
        if(mm == 1) mm = "Febbraio";
        if(mm == 2) mm = "Marzo";
        if(mm == 3) mm = "Aprile";
        if(mm == 4) mm = "Maggio";
        if(mm == 5) mm = "Giugno";
        if(mm == 6) mm = "Luglio";
        if(mm == 7) mm = "Agosto";
        if(mm == 8) mm = "Settembre";
        if(mm == 9) mm = "Ottobre";
        if(mm == 10) mm = "Novembre";
        if(mm == 11) mm = "Dicembre";
        console.log(mm);
        let newd = `${gg} ${mm} ${aaaa}`;
      return newd;
    },
    torna_su: function () {
      console.log(window);
      window.document.scrollingElement.scrollTop = 0;
    }
  }
});
