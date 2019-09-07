<template>
  <div class="container">
            <div class="light" id='light'>
                <div v-bind:class="{ 'light-red__lightning': isActive1 && !changeColor}" class="light-red">
                <div class="light-timer light-red-timer">{{redTimer}}</div>
                </div>
                <div v-bind:class="{ 'light-yellow__lightning': isActive2  && !changeColor}" class="light-yellow">
                  <div class="light-timer light-yellow-timer">{{yellowTimer}}</div>
                </div>
                <div v-bind:class="{ 'light-green__lightning': isActive3  && !changeColor}" class="light-green">
                  <div class="light-timer light-green-timer">{{greenTimer}}</div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  computed: {
    
    isActive1: function () {
      return this.$route.params.id == '1';
    },
    
    isActive2: function () {
      return this.$route.params.id == '2';
    },
    
    isActive3: function () {
      return this.$route.params.id == '3';
    }
  },
data: function(){
  return {
    redTimer: 0,
    yellowTimer: 0,
    greenTimer: 0 ,
    changeColor: false
  }
},
methods:{
  redirectByTimeout: function(){

    if(this.$route.params.id== 1){
      this.start = 1
    }

    if(this.$route.params.id == 3){
      this.start=3
    }

    const t = this;
      if(t.timerId !=undefined && t.timerId != null){
        clearTimeout(t.timerId)
        t.timerId  = null;
      }
      
      if(this.$route.params.id == '1' && this.start == 1){
        t.timerId = setTimeout(function(){
      t.$router.push({ name: 'slide1', params: { id: 2 }});
    }, 10000);
        
      }

      if(this.$route.params.id == '2' && this.start == 1){
        t.timerId = setTimeout(function(){
      t.$router.push({ name: 'slide1', params: { id: 3 }});
    }, 3000);


      }

      if(this.$route.params.id == '2' && this.start ==3){
        t.timerId = setTimeout(function(){
      t.$router.push({ name: 'slide1', params: { id: 1 }});
    }, 3000);
      }

      if(this.$route.params.id == '3' && this.start == 3){
        t.timerId = setTimeout(function(){
      t.$router.push({ name: 'slide1', params: { id: 2 }});
    }, 15000);
      }
    },

    changeTimers: function(){
      var t = this;
      
      
      
      clearInterval(this.intervalId);
      if(this.isActive1 ){
        this.redTimer = 10;
        this.intervalId = setInterval(function(){
          
          t.redTimer -= 1;
        },1000) 
      } else{
        this.redTimer = ' ';
      }

      if(this.isActive2 ){
        this.yellowTimer = 3;
        this.intervalId = setInterval(function(){
          
          t.yellowTimer -= 1;
        },1000)
      }else{
        this.yellowTimer = ' ';
      }


      if(this.isActive3 ){
        this.greenTimer = 15;
        this.intervalId = setInterval(function(){
          
          t.greenTimer -= 1;
        },1000)
      }else{
        this.greenTimer = ' ';
      }

    },

    changeColorsTiming: function(){
      var t = this;
      let timeForInterval = null;
      clearTimeout(t.changeColorTimeout);
      clearInterval(t.changeColorInterval);

      if(this.$route.params.id == '1'){
        timeForInterval = 7000;
      }

      if(this.$route.params.id == '2'){
        timeForInterval = 0;
      }
      if(this.$route.params.id == '3'){
        timeForInterval = 12000;
      }

      t.changeColorTimeout = setTimeout(function(){
        t.changeColor = true;

        t.changeColorInterval = setInterval(function(){
          
          if(t.changeColor == true){
            t.changeColor = false
          } else{
            t.changeColor = true
          }
        },500)
      },timeForInterval)
    }

  }
,

created:function(){

  if(this.$route.params.id == 2){
    this.start  = 1
  }

  this.redirectByTimeout();
  this.changeTimers();
  this.changeColorsTiming();
}
,
  watch: {
    '$route' () {
      this.redirectByTimeout();
      this.changeTimers();
      this.changeColorsTiming();
    }
  }

}
</script>

<style lang="less" scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.light{
    width: 300px;
    height: 600px;
    background-color: grey; 

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.light-no{
  background-color: pink;
}

.light-container{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}


.light-red{
    .light-container;
    background-color: red;
    opacity: 0.3;

    &__lightning {
      opacity: 1
    }
}

.light-yellow{
    .light-container;
    background-color: yellow;
    opacity: 0.3;

    &__lightning {
      opacity: 1
    }
}

.light-green{
    .light-container;
    background-color: green;
    opacity: 0.3;

    &__lightning {
      opacity: 1
    }
}

.light-timer{
  font-size: 60px;
}

</style>