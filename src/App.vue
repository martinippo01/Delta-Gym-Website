<template>
  <router-view />
</template>

<script>
import { useSecurityStore } from "@/store/securityStore";
export default {
  name: "App",
  components: {},
  async created() {
    const securityStore = useSecurityStore();
    await securityStore.initialize();
  },
};
</script>
