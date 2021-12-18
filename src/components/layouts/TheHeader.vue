<template>
    <header class="header">

        <AppButton theme="main" sides="20" font-size="15" height="40" flex class="mr-5 hamburger"
                   @click="toggleMenu"
        >
            <img src="/assets/icons/settings-2.svg" style="width: 20px; margin-right: 8px;" alt="">
            Menu
        </AppButton>

        <div class="header__left header__details">

            <h3 class="header__title">
                {{ title }}
            </h3>

            <div class="header__search">
                <AppButton theme="main"
                           sides="10"
                           height="40"
                           font-size="16"
                >
                    <img src="/assets/icons/search.svg" style="width: 20px;" alt="">
                </AppButton>

            </div>

            <div class="header__settings header__dropdown" v-on-click-outside:excludedClass="close">
                <AppButton theme="main" sides="15" height="40" font-size="16"
                           @click="searchActive = !searchActive"
                >
                    <img src="/assets/icons/settings-2.svg" style="width: 20px;" alt="">
                </AppButton>
                <transition name="ease-out">
                    <div class="header__dropdown-wrap"
                         v-if="searchActive"
                    >
                        <div class="header__dropdown-wrap-inner">
                            <div class="header__dropdown-wrap-container">
                                <div class="header__dropdown-item" v-for="(item, idx) in locations" :key="idx">
                                    <router-link :to="item.path" class="header__dropdown-link">{{ item.title }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

        </div>

        <div class="header__right">

            <div class="header__right-inner">

                <div class="header__details" v-if="cars">
                    <h3 class="header__title">
                        {{ secondaryTitle }}
                    </h3>

                    <div class="header__search">
                        <AppButton theme="main"
                                   sides="10"
                                   height="40"
                                   font-size="16"
                        >
                            <img src="/assets/icons/search.svg" style="width: 20px;" alt="">
                        </AppButton>
                    </div>

                    <div class="header__settings header__dropdown" v-on-click-outside:excludedClass="close2">
                        <AppButton theme="main" sides="15" height="40" font-size="16"
                                   @click="searchActive2 = !searchActive2"
                        >
                            <img src="/assets/icons/settings-2.svg" style="width: 20px;" alt="">
                        </AppButton>
                        <transition name="ease-out">
                            <div class="header__dropdown-wrap"
                                 v-if="searchActive2"
                            >
                                <div class="header__dropdown-wrap-inner">
                                    <div class="header__dropdown-wrap-container">
                                        <div class="header__dropdown-item" v-for="(item, idx) in locations" :key="idx">
                                            <router-link :to="item.path" class="header__dropdown-link">{{ item.title }}</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>

                <div class="header__date">
                    Жума, 12 ноябр 2021
                </div>

                <div class="header__logo">
                    <img src="/assets/icons/logo.svg" alt="">
                </div>
            </div>

        </div>

    </header>
</template>

<script>
    import AppButton from "../Shared-components/AppButton";
    import {mapMutations} from "vuex"

    export default {
        name: "TheHeader",
        components: {AppButton},
        props: {
            title: {
                type: String,
                default: ""
            },
            secondaryTitle: {
                type: String,
                default: ""
            },

            cars: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                searchActive: false,
                searchActive2: false,
                close() {
                    this.searchActive = false;
                },
                close2() {
                    this.searchActive2 = false;
                },
                locations: new Array(15).fill(
                    {
                        title: "Тошкент-Бухоро",
                        path: "#!"
                    }
                )
            }
        },

        methods: {
            ...mapMutations({toggleMenu: 'toggleMenu'}),
        }
    }
</script>

<style lang="scss" scoped>

    .hamburger {
        display: none;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;

        &__details {
            display: flex;
            align-items: center;
            grid-gap: 20px;
        }

        &__left {
            max-width: 340px;
            width: 100%;

        }

        &__right {
            max-width: calc(100% - 400px);
            width: 100%;

            &-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                grid-gap: 20px;
                width: 100%;
            }
        }

        &__title {
            color: var(--color-secondary);
            font-size: 30px;
            font-weight: 600;
        }

        &__date {
            color: white;
            background-color: var(--color-secondary);
            padding: 10px 30px;
            font-size: 14px;
            border-radius: 8px;
            margin-left: auto;
        }

        &__logo {
            max-width: 58px;
            width: 100%;
            margin-left: 96px;

            img {
                width: 100%;
                object-fit: contain;
            }
        }

        &__dropdown {
            position: relative;

            &-wrap {
                position: absolute;
                z-index: 10;
                top: calc(100% + 10px);
                width: 220px;
                max-height: 150px;

                &-container {
                    max-height: 150px;
                    height: 100%;
                    overflow: auto;
                    padding: 10px 15px;

                    /* width */
                    &::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                    }

                    /* Track */
                    &::-webkit-scrollbar-track {
                        background: #fff;
                        border-radius: 16px;
                    }

                    /* Handle */
                    &::-webkit-scrollbar-thumb {
                        background: var(--color-secondary);
                        border-radius: 16px;
                    }
                }

                &-inner {
                    border: 1px solid var(--color-secondary);
                    background-color: var(--color-bg);
                    border-radius: 16px;
                    overflow: hidden;
                }
            }

            &-item {


                &:last-child {
                    .header__dropdown-link {
                        border-bottom: none;
                    }
                }
            }

            &-link {
                display: flex;
                align-items: center;
                padding: 6px 0;
                font-size: 16px;
                line-height: normal;
                color: #6D6D6D;
                border-bottom: 1px solid #80808052;

                &.active {
                    color: var(--color-secondary);
                }

                &:hover {
                    color: var(--color-secondary);
                }
            }

        }
    }

    @media (max-width: 1540px) {

        .header__title {
            font-size: 24px;
        }

        .header__details {
            grid-gap: 15px;
        }

        .header__logo[data-v-f465db50] {
            max-width: 40px;
        }

        .header__left {
            max-width: 280px;
            margin-right: 20px;
        }

        .header__right {
            max-width: calc(100% - 300px);
        }

        .header__logo {
            margin-left: 50px;

        }
    }

    @media (max-width: 1410px) {
        .header__title {
            font-size: 22px;
        }

        .header__date {
            padding: 10px 15px;
        }

        .header {
            .a-btn {
                font-size: 12px;

                img {
                    width: 15px !important;
                }
            }

            &__logo {
                max-width: 30px !important;
                margin-left: 0;
            }
        }
    }

    @media (max-width: 1240px) {

        .hamburger {
            display: flex;
        }

        .navigation-drawer {
            z-index: 100;
        }

        .header__logo {
            margin-left: 20px;
        }

        .header__title {
            font-size: 20px;
        }

        .header__left {
            margin-right: 0;
        }
    }

    @media (max-width: 991px) {
        .header {
            flex-wrap: wrap;
            justify-content: flex-start;
            width: 100%;
            grid-gap: 10px;

            &__right {
                max-width: unset;
                width: unset;

                &-inner {
                    flex-wrap: wrap;
                    grid-gap: 15px;
                }
            }

        }

    }

    @media (max-width: 600px) {

        .header__right-inner {
            justify-content: flex-start;
        }

        .header__date {
            margin-left: 0;
            padding: 5px 10px;
        }

        .header__left {
            max-width: unset;
            width: unset;
        }

        .header__right {
            max-width: unset;
            width: unset;
        }

        .header__details {
            max-width: unset;
            width: unset;
        }

        .header__title {
            font-size: 18px;
        }

        .header {
            .a-btn {
                height: 30px;
                font-size: 12px;
                padding: 0 10px;

                img {
                    width: 14px !important;
                }
            }

            &__logo {
                max-width: 30px !important;
                margin-left: 0;
            }
        }

    }

</style>