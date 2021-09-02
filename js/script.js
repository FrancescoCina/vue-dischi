console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
    genSelect: "all",
    filteredAlbums: [],
  },
  computed: {
    albumsSortByYear() {
      return this.albums.sort(function (a, b) {
        return a.year - b.year;
      });
    },
    gensArray() {
      let duplicatedArray = [];
      this.albums.forEach(album => {
        duplicatedArray.push(album.genre);
      });
      const allString = "all";
      let singleArray = [];
      duplicatedArray.forEach(element => {
        if (!singleArray.includes(element)) {
          singleArray.push(element);
        }
      });
      singleArray.unshift(allString);
      return singleArray;
    },
  },
  methods: {
    filterByGenres() {
      if (this.genSelect === "all") {
        return this.filteredAlbums = this.albumsSortByYear;

      }
      this.filteredAlbums = this.albumsSortByYear.filter((album) => {
        return album.genre === this.genSelect;
      });
      console.log(this.filteredAlbums);
      return this.filteredAlbums;
    },

  },
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
      let risp = res.data.response;
      this.albums = risp;

    })
  }
});
