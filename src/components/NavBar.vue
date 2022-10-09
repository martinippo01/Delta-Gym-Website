<template>
  <div>
    <NavBarLanding v-if="!isLoggedIn" select="select" />
    <NavBarLoggedIn v-else select="select" />
  </div>
</template>

<script>
import NavBarLoggedIn from "./NavBarLoggedIn.vue";
import NavBarLanding from "./NavBarLanding.vue";

import { mapGetters, mapState } from "pinia";
import { useSecurityStore } from "../store/securityStore";

export default {
  name: "NavBar",
  components: { NavBarLoggedIn, NavBarLanding },
  props: {
    select: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useSecurityStore, ["isLoggedIn"]),
  },
};
</script>
