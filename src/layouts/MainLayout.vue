<template>
  <div>
    <TheNavigationDrawer
        @toggleMenu="toggleMenu"
    />

    <div class="backdrop"
         @click="toggleMenu"
         :class="{hide : !mainActive }"
    >
    </div>

    <main class="main"
          :class="{active : mainActive }">
      <router-view/>
    </main>
  </div>
</template>

<script>
import TheNavigationDrawer from "../components/layouts/TheNavigationDrawer";
import {mapState, mapMutations} from "vuex"

export default {
  name: "MainLayout",
  components: {TheNavigationDrawer},
  data() {
    return {}
  },
  computed: {
    ...mapState({mainActive: 'mainActive'})
  },
  methods: {
    ...mapMutations({toggleMenu: 'toggleMenu'}),
  }
}

</script>

<style lang="scss" scoped>

.main {
  margin-left: 110px;
  padding: 26px 28px 0;
  transition: .5s cubic-bezier(.4, 0, .2, 1);

  &.active {
    display: flex;
    flex: 1 0 auto;
    max-width: 100%;
    margin-left: 330px;
  }
}


.backdrop {
  display: none;
  transition: .3s;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.40);
  z-index: 99;

  &.hide {
    left: -100%;
  }
}

@media (max-width: 1240px) {
  .main {
    padding: 20px 20px 0;
    margin-left: 0;

    &.active {
      margin-left: 0;
      padding: 20px 20px 0;
    }
  }

  .backdrop {
    display: block;
  }
}

@media (max-width: 991px) {
  .main {
    padding-left: 0;
    padding-right: 0;

    &.active {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

</style>