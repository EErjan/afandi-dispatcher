<template>
  <div class="login__page">
    <div class="login__content">
      <div class="login__logo">
        <img src="/assets/icons/logo.svg" alt="">
      </div>

      <div>
        <ValidationObserver
                ref="form"
                v-slot="{ handleSubmit }"
                style="width: 100%"
        >
          <form @submit.prevent="handleSubmit()">
            <validation-provider
                    rules="required"
                    name="login"
                    vid="login"
                    v-slot="{ errors }"
            >
              <div class="form__input">
                <input type="text"
                       placeholder="Login"
                       :error-messages="errors[0]"
                >
              </div>
            </validation-provider>


            <validation-provider
                    rules="required"
                    name="Password"
                    vid="Password"
                    v-slot="{ errors }"
            >
              <div class="form__input">
                <input type="text"
                       placeholder="Password"
                       :error-messages="errors[0]"
                >
              </div>
            </validation-provider>

            <button type="submit">submit</button>
          </form>
        </ValidationObserver>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style lang="scss" scoped>

  .login {
    &__page {
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      button {
        background-color: var(--color-secondary);
        color: white;
        border-radius: 16px;
        padding: 10px 20px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
      }

      max-width: 500px;

      .form__input {
        max-width: 220px;
        width: 100%;
        margin-bottom: 20px;

        input {
          border: 1px solid var(--color-secondary)!important;
          height: 48px;
          border-radius: 8px;
          padding: 10px 15px;
          outline: none!important;
          &::placeholder {
            color: var(--color-secondary);
            text-align: center;
            font-weight: 600;
          }
        }
      }

    }

    &__logo {
      max-width: 160px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;

      img {
        width: 100%;
        object-fit: contain;

      }
    }
  }

</style>