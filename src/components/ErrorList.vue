<template>
    <div v-if="errorslist.length > 0">
      <h2>There was an error fetching weather data.</h2>
      <ul class="errors">
        <li v-for="error in errorslist">{{ error }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ErrorList',
  data () {
    return {
    }
  },
  props: {
      errorslist: []
  }
}
</script>

<style scoped>
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
}
</style>