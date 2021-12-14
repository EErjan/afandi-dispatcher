<template>
    <div>
        <TheNavigationDrawer
                @toggle="toggleMenu"
        />

        <main class="main"
              :class="{active : mainActive }">
            <router-view/>
        </main>
    </div>
</template>

<script>
    import TheNavigationDrawer from "../components/layouts/TheNavigationDrawer";

    export default {
        name: "MainLayout",
        components: {TheNavigationDrawer},
        data() {
            return {
                mainActive: true
            }
        },
        methods: {
            toggleMenu() {
                this.mainActive = !this.mainActive
            }
        }
    }

</script>

<style lang="scss" scoped>

    .main {
        margin-left: 110px;
        padding: 50px;
        transition: .5s cubic-bezier(.4, 0, .2, 1);

        &.active {
            display: flex;
            flex: 1 0 auto;
            max-width: 100%;
            margin-left: 330px;
            padding: 50px 50px 0;
        }

    }

</style>