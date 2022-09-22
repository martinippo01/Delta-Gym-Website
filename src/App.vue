<template>
  <div>
    <sing-up> </sing-up>
  </div>
</template>

<script lang="ts">

  import Vue from "vue";
  import LogIn from "@/components/logIn/LogIn.vue";
  import singUp from "@/components/logIn/SingUp.vue"
  export default Vue.extend({
    name: "App",
    components: { singUp},
    data: () => ({
    }),
  });
</script>

<style>
html {
  overflow-y: hidden !important;
}
</style>
