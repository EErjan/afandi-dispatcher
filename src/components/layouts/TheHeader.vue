<template>
    <header class="header">

        <div class="header__left header__details">

            <h3 class="header__title">
                {{ title }}
            </h3>

            <div class="header__search">
                <AppButton theme="main" sides="10" height="40" font-size="16">
                    <img src="/assets/icons/search.svg" style="width: 20px;" alt="">
                </AppButton>
            </div>

            <div class="header__settings">
                <AppButton theme="main" sides="15" height="40" font-size="16">
                    <img src="/assets/icons/settings-2.svg" style="width: 20px;" alt="">
                </AppButton>
            </div>

        </div>

        <div class="header__right">

            <div class="header__right-inner">

                <div class="header__details" v-if="cars">
                    <h3 class="header__title">
                        {{ title }}
                    </h3>

                    <div class="header__search">
                        <AppButton theme="main" sides="10" height="40" font-size="16">
                            <img src="/assets/icons/search.svg" style="width: 20px;" alt="">
                        </AppButton>
                    </div>

                    <div class="header__settings">
                        <AppButton theme="main" sides="15" height="40" font-size="16">
                            <img src="/assets/icons/settings-2.svg" style="width: 20px;" alt="">
                        </AppButton>
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

    export default {
        name: "TheHeader",
        components: {AppButton},
        props: {
            title: {
                type: String,
                default: ""
            },

            cars: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 40px;

        &__details {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            grid-gap: 20px;
            margin-right: 60px;
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
    }

</style>