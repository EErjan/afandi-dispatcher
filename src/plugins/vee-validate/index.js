import Vue from "vue";
import {
  extend,
  localize,
  ValidationProvider,
  ValidationObserver,
} from "vee-validate";
import {
  required,
  alpha,
  alpha_dash,
  email,
  min,
  min_value,
  confirmed,
  max,
  digits,
} from "vee-validate/dist/rules";
import ru from "./ru.json";

localize("ru", ru);

extend("alpha", alpha);
extend("email", email);
extend("alpha_dash", alpha_dash);
extend("required", required);
extend("min_value", min_value);
extend("min", min);
extend("confirmed", confirmed);
extend("max", max);
extend("digits", digits);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
