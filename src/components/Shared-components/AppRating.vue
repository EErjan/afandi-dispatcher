<template>
    <div class="star-rating">
        <label class="star-rating__star"
               v-for="(rating, index) in ratings"
               :key="index"
               :class="{'is-selected':
               ((valueData >= rating) && valueData != null), 'is-disabled': disabled}"
               v-on:click="set(rating)"
               v-on:mouseover="star_over(rating)"
               v-on:mouseout="star_out"
        >
            <input class="star-rating star-rating__checkbox"
                   type="radio"
                   :value="rating"
                   :name="name"
                   v-model="valueData"
                   :disabled="disabled"
            >
            ★
        </label>
    </div>
</template>

<script>
    export default {
        name: "AppRating",

        data: function () {
            return {
                temp_value: null,
                ratings: [1, 2, 3, 4, 5],
                valueData: null,
            };
        },

        props: {
            name: String,
            value: null,
            id: String,
            disabled: Boolean,
            required: Boolean
        },

        methods: {
            /*
             * Behaviour of the stars on mouseover.
             */
            star_over: function (index) {
                // var self = this;

                if (!this.disabled) {
                    this.temp_value = this.value;
                    return this.valueData = index;
                }

            },

            /*
             * Behaviour of the stars on mouseout.
             */
            star_out: function () {
                // var self = this;

                if (!this.disabled) {
                    return this.valueData = this.temp_value;
                }
            },

            /*
             * Set the rating.
             */
            set: function (value) {
                // var self = this;

                if (!this.disabled) {
                    this.temp_value = value;
                    return this.valueData = value;
                }
            }
        },
        mounted() {
            this.valueData = this.value;
        },
        watch: {
            value() {
                this.valueData = this.value;
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/styles/variables";

    %visually-hidden {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }

    .star-rating {

        &__star {
            display: inline-block;
            padding: 3px;
            vertical-align: middle;
            line-height: 1;
            font-size: 1.5em;
            color: rgba(171, 171, 171, 0.20);
            transition: color .2s ease-out;

            &:hover {
                cursor: pointer;
            }

            &.is-selected {
                color: white;
            }

            &.is-disabled:hover {
                cursor: default;
            }
        }

        &__checkbox {
            @extend %visually-hidden;
        }
    }

</style>
