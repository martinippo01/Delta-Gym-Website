<template>
  <div>
    <MainTopBar v-if="!isLoggedIn" select="select" />
    <TopBar v-if="isLoggedIn" select="select" />
  </div>
</template>

<script>
import MainTopBar from "./MainTopBar.vue";
import TopBar from "./TopBar.vue";

import { mapGetters } from "pinia";
import { useSecurityStore } from "../store/securityStore";

export default {
  name: "NavBar",
  components: { MainTopBar, TopBar },
  props: {
    select: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  ...mapGetters(useSecurityStore, ["isLoggedIn"]),
};
</script>
