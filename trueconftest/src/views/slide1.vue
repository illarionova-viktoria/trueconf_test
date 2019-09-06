<template>
  <div class="container">
            <div class="light">
                <div class="light-red light-red-opacity"></div>
                <div class="light-yellow light-yellow-opacity"></div>
                <div class="light-green light-green-opacity"></div>
            </div>
        </div>
</template>

<style scoped>
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

.light-red{
    width: 150px;
    height: 150px;
    background-color: red;
    border-radius: 50%;
}

.light-yellow{
    width: 150px;
    height: 150px;
    background-color: yellow;
    border-radius: 50%;
}

.light-green{
    width: 150px;
    height: 150px;
    background-color: green;
    border-radius: 50%;
}

.light-red-opacity{
    background-color: red;
    opacity: 0.3;
}

/* .light-yellow-opacity{
    background-color: yellow;
    opacity: 0.3;
} */

.light-green-opacity{
    background-color: green;
    opacity: 0.3;
}

</style>