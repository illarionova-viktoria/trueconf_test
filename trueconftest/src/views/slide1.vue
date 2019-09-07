<template>
  <div class="container">
            <div class="light">
                <div class="light-red-opacity"></div>
                <div v-bind:class="{ 'light-yellow': $route.params.id == 2 }" class="light-yellow-opacity"></div>
                <div v-bind:class="{ 'light-green': $route.params.id == 3 }" class="light-green-opacity"></div>
            </div>
        </div>
</template>


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

.light-container{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.light-red{
  .light-container;
    background-color: red;
}

.light-yellow{
    .light-container;
    background-color: yellow;
}

.light-green{
  .light-container;
    background-color: green;
}

.light-red-opacity{
    .light-container;
    background-color: red;
    opacity: 0.3;
}

.light-yellow-opacity{
    .light-container;
    background-color: yellow;
    opacity: 0.3;
}

.light-green-opacity{
    .light-container;
    background-color: green;
    opacity: 0.3;
}

</style>