<template>
    <div class="navigation-drawer"
         :class="{hide : !mainActive}"
    >
        <div class="navigation-drawer__details">
            <button class="navigation-drawer__toggler" @click="toggleMenu">
                <img src="/assets/icons/menu-toggler.svg" alt="">
                <span>Меню</span>

                <img src="/assets/icons/angle-back-round.svg" class="navigation-drawer__toggler-icon" alt="">
            </button>

            <ul class="navigation-drawer__menu">
                <li class="navigation-drawer__menu-item"
                    v-for="(item, index) in menu" :key="index">
                    <router-link :to="item.path" class="" exact="">
                        <img :src="item.icon" alt="">
                        <span class=""> {{ item.title }}</span>
                    </router-link>
                </li>

            </ul>

            <div class="navigation-drawer__bottom">
                <div class="navigation-drawer__bottom-item">
                    <router-link to="#!">
                        <img src="/assets/icons/user.svg" alt="">

                        <span class=""></span>

                    </router-link>
                </div>

                <div class="navigation-drawer__bottom-item ">
                    <router-link to="#!">
                        <img src="/assets/icons/log-out.svg" alt="">
                        <span class=""></span>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import {mapState, mapMutations} from "vuex"

    export default {
        name: "TheNavigationDrawer",
        data() {
            return {
                menu: [
                    {
                        icon: "/assets/icons/routes.svg",
                        title: "Маршуртлар",
                        path: "/"
                    },
                    {
                        icon: "/assets/icons/drivers.svg",
                        title: "Хайдовчилар",
                        path: "/drivers"
                    },
                    {
                        icon: "/assets/icons/bus.svg",
                        title: "Автобус",
                        path: "/bus"
                    },
                    {
                        icon: "/assets/icons/monitoring.svg",
                        title: "Мониторинг",
                        path: "/monitoring"
                    },
                    {
                        icon: "/assets/icons/routes-cars.svg",
                        title: "Маршуртлар-машиналар",
                        path: "/routes-cars"
                    },
                    {
                        icon: "/assets/icons/location.svg",
                        title: "Манзиллар",
                        path: "/addresses"
                    },
                    {
                        icon: "/assets/icons/settings.svg",
                        title: "Созламалар",
                        path: "/settings"
                    },

                ],
            }
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

    .navigation-drawer {
        max-width: 330px;
        width: 100%;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--color-main);
        transition: .5s;

        &.hide {
            .navigation-drawer__menu-item {
                a {
                    img {
                        margin-right: 50px;
                        transition: .5s !important;
                    }

                    span {
                        white-space: nowrap;
                        opacity: 0;
                        transition: 5s !important;
                    }
                }
            }

            .navigation-drawer__toggler {
                span {
                    opacity: 0;
                }
            }

            .navigation-drawer__toggler-icon {
                right: -15px;
                transform: rotate(180deg) translateY(50%) !important;
            }

            max-width: 110px;
        }

        &__details {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 52px 0;
        }

        &__toggler {
            position: relative;
            width: calc(100% - 40px);
            padding: 0 44px;
            padding-left: 0;
            margin-left: 40px;
            display: flex;
            align-items: center;
            color: white;
            cursor: pointer;
            margin-bottom: 30px;
            font-weight: 600;
            min-height: 25px;

            span {
                display: flex;
                min-width: 350px;
                transition: .2s;
                overflow: hidden;
            }

            &-icon {
                position: absolute;
                top: 50%;
                right: 25px;
                transform: translateY(-50%);
                transition: .2s;
            }

            img {
                max-width: 20px;
                margin-right: 20px;
            }
        }

        &__menu {
            width: 100%;
            padding-right: 20px;
            margin-bottom: 20px;

            &-item {


                a {
                    display: flex;
                    align-items: center;
                    color: white;
                    padding: 20px 25px 20px 40px;
                    transition: .1s;
                    border: 1px solid transparent;
                    border-left: 4px solid transparent;
                    font-size: 16px;
                    font-weight: 600;
                    overflow: hidden;
                    min-height: 66px;

                    &.router-link-active {
                        border-color: white;
                        background: rgba(34, 55, 108, 0.2);
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }

                    span {
                        overflow: hidden;
                        display: flex;
                        min-width: 350px;
                        width: 100%;
                    }


                    &:hover {
                        border-color: white;
                        background: rgba(34, 55, 108, 0.2);
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }


                    img {
                        max-width: 20px;
                        margin-right: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

            }
        }

        &__bottom {

            margin-top: auto;

            &-item {

                a {
                    display: inline-flex;
                    color: white;
                    padding: 20px 25px 20px 40px;
                    transition: .1s;
                    border: 1px solid transparent;
                    border-left: 4px solid transparent;
                    font-size: 16px;
                    font-weight: 600;
                    overflow: hidden;
                    min-height: 66px;

                    span {
                        overflow: hidden;
                        display: flex;
                    }


                    &:hover {
                        border-color: white;
                        background: rgba(34, 55, 108, 0.2);
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }


                    img {
                        max-width: 20px;
                        margin-right: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

            }
        }
    }

    @media (max-width: 1540px) {

    }

    @media (max-width: 1240px) {

        .navigation-drawer {
            max-width: 280px;

            &.hide {
                max-width: 280px;
                left: -100%;
            }
        }

        .navigation-drawer__menu-item a {
            padding: 20px 25px 20px 20px;
        }

        .navigation-drawer__menu-item a span {
            font-size: 14px;
        }

        .navigation-drawer__toggler {
            margin-left: 20px;
            width: calc(100% - 20px);
        }

        .navigation-drawer__menu {
            margin-right: 10px;
        }

        .navigation-drawer__details {
            padding: 30px 0;
        }

    }

</style>