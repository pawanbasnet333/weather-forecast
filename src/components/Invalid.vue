<template>
  <div class="app">
    <div class="inv container">
     <div class="text">
     <h1>Invalid Country/City</h1>
     <p>The Country or City you have entered is invalid, pleae enter a valid Country or City</p>
     </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InvalidComp'
};
</script>

<style scoped>
.inv{
  background-color: #212b3b;
  border-radius: 20px;
  text-align: center;
  margin-top: 40px;
  padding: 150px;
}
.text{
  color: #c71e1e;
}
.text:hover{
  color: hsl(0, 94%, 46%);
  transform: scale(1.4);
  transition: transform 0.5s ease;
  z-index: 1;
}
</style>