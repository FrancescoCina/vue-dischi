console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  methods: {},
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
      let risp = res.data.response;
      for (let i = 0; i < 10; i++) {
        this.albums.push(risp[i]);
      }
      console.log(this.albums);
    })
  }
});
