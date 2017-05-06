<template>
  <div id="index">
    <p>Home {{ message }}</p>`

Hello, David Remnick!  Seerch for the articles from the web we have pulled up that have been written about you

  <form id="api-form" name="api-search" action="/cgi-bin/newsPuller.py" method="get">
    <input type="text" value="David" id="a1"><br>
    <input type="text" value="Remnick" id="a2" ><br>
    <input type="submit" value="Submit"><br>
  </form>



<!--
      <button v-on:click="submit" text="submit" type="submit"></button>

<form name="search" action="/cgi-bin/test.py" method="get">
Search: <input type="text" name="searchbox">
<input type="submit" value="Submit">
</form>
-->
<!--
<script>
import axios from '~plugins/axios'
export default {
  data() {
    return {
      message: 'Hello, world!'
    }
  },
  method: {
    submit() {
      axios.get('')
    }
  }
}
</script>
-->
<style>


</style>


  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, world!'
    }
  }
}
</script>

<style>


</style>