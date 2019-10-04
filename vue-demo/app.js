new Vue({
  el:"#vue-app",
  data:{
    name:"Amankumar",
    lname:"Shrivastava",
    available:true,
    nearby:true,
    age:20,
    x:0,
    y:0,
    web:'https://www.Google.com',
    websitetag:'<a href="https://www.youtube.com">youtube</a>'
  },
  methods:{
    greet: function(time){
      return 'Good '+time+this.name;
    },
    add: function (inc){
      this.age+=inc;
    },
    subtract: function (dec){
      this.age-=dec;
    },
    updatexy: function(event){
        console.log(event);
        this.x = event.offsetX;
        this.y = event.offsetY;
    }
  },
  computed: {
      compClasses: function(){
          return {
              available:this.available,
              nearby:this.nearby
          }
      }
  }
//   el:"#canvas",
//   data: {
//       X=0,
//       Y=0
//   },
//   methods: {
//       updatexy:function(event){
//           this.X = event.offsetX;
//           this.Y = event.offsetY;
//       }
//   }
});
