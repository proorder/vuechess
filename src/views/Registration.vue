<template>
  <div class="registration-page container py-5">
    <div class="row">
      <div class="col-6 text-left">
        <h4 class="font-weight-bold text-center">Вступай в наши ряды</h4>
        <label class="mt-3">
          Ваш Email-адрес:
          <br />
          <input
            class="form-control mt-2"
            type="email"
            placeholder="email@address.com"
            v-model="email"
          />
          <span
            :class="{ 'd-block': errors.email !== '' }"
            class="invalid-feedback"
          >
            {{ errors.email }}
          </span>
        </label>
        <label class="mt-3">
          Фамилия Имя Отчество
          <br />
          <input
            class="form-control mt-2"
            type="text"
            placeholder="Ф.И.О."
            v-model="full_name"
          />
          <span
            :class="{ 'd-block': errors.full_name !== '' }"
            class="invalid-feedback"
          >
            {{ errors.full_name }}
          </span>
        </label>
        <label class="mt-3">
          Придумайте пароль:
          <br />
          <input
            class="form-control mt-2"
            type="password"
            placeholder="******"
            v-model="password"
          />
          <span
            :class="{ 'd-block': errors.password !== '' }"
            class="invalid-feedback"
          >
            {{ errors.password }}
          </span>
        </label>
        <label class="mt-3">
          Подтвердите пароль:
          <br />
          <input
            class="form-control mt-2"
            type="password"
            placeholder="******"
            v-model="password_confirm"
          />
        </label>
        <div class="text-center mt-3">
          <button
            type="button"
            class="btn btn-primary"
            ref="registration_btn"
            v-on:click="registration"
          >
            Зарегистрироваться
            <svg
              width="24px"
              height="24px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 88.87 88.62"
            >
              <defs>
                <linearGradient
                  id="Безымянный_градиент_16"
                  x1="31.94"
                  y1="102.76"
                  x2="66.49"
                  y2="73.76"
                  gradientTransform="translate(-51.53 1.77) rotate(-15)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbae17" />
                  <stop offset="1" stop-color="#d6242f" />
                </linearGradient>
                <linearGradient
                  id="Безымянный_градиент_16-2"
                  x1="36.32"
                  y1="98.73"
                  x2="64.59"
                  y2="75.01"
                  xlink:href="#Безымянный_градиент_16"
                />
                <linearGradient
                  id="Безымянный_градиент_16-3"
                  x1="39.84"
                  y1="95.21"
                  x2="61.83"
                  y2="76.76"
                  xlink:href="#Безымянный_градиент_16"
                />
                <linearGradient
                  id="Безымянный_градиент_75"
                  x1="76"
                  y1="51.2"
                  x2="35.51"
                  y2="22.84"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ffbfcf" />
                  <stop offset="0.02" stop-color="#ffc3d2" />
                  <stop offset="0.15" stop-color="#ffdde6" />
                  <stop offset="0.29" stop-color="#fff0f4" />
                  <stop offset="0.44" stop-color="#fffbfc" />
                  <stop offset="0.59" stop-color="#fff" />
                </linearGradient>
              </defs>
              <polygon
                class="cls-1"
                points="12.42 42.26 46.36 76.2 0 88.62 12.42 42.26"
              />
              <polygon
                class="cls-2"
                points="14.43 46.42 42.2 74.19 4.27 84.35 14.43 46.42"
              />
              <polygon
                class="cls-3"
                points="15.74 51.28 7.83 80.79 37.34 72.88 15.74 51.28"
              />
              <path
                id="Пешка"
                class="cls-4"
                d="M32.61,67.62c-14.14-14.14-17-17-15.56-18.38a10.46,10.46,0,0,1,3.54-2.12s-.71-.71,2.12-3.54S29.07,40.05,34,40.75s7.78-3.53,7.78-3.53l5.66-1.41c5.66-1.42,11.31-7.08,11.31-7.08a13.42,13.42,0,0,1-2.83-4.24c-.7-2.12,2.13-4.95,4.25-5.66S66.55,21,66.55,21s-4.95-2.13,5-12C80,.45,89.88,10.35,89.88,10.35S99.78,20.25,92,28c-9.9,9.9-12.73,5.65-12.73,5.65s2.83,4.25,2.12,6.37-3.54,5-5.66,4.24a13.42,13.42,0,0,1-4.24-2.83s-5.66,5.66-7.07,11.32L63,58.43s-4.24,2.83-3.53,7.78,0,8.49-2.83,11.31-3.53,2.13-3.53,2.13A10.29,10.29,0,0,1,51,83.18C49.58,84.6,46.75,81.77,32.61,67.62Z"
                transform="translate(-6.12 -5.5)"
              />
            </svg>
          </button>
          <div class="success-message font-weight-bold" ref="success_message">
            {{ success_message }}
          </div>
        </div>
      </div>
      <div class="col-6 position-relative">
        <cosmos></cosmos>
      </div>
    </div>
  </div>
</template>

<script>
import Cosmos from "../components/SVG/Cosmos";
import anime from "animejs";
import axios from "axios";
import errorProcessing from "../utils/errorProcessing";
import { REGISTRATION } from "../queries";

export default {
  name: "registration",
  data: () => ({
    email: "",
    full_name: "",
    password: "",
    password_confirm: "",
    errors: {
      email: "",
      full_name: "",
      password: ""
    },
    success_message: ""
  }),
  mounted() {
    anime
      .timeline({
        targets: "#Фон > .cls-3",
        easing: "linear",
        loop: true,
        duration: 2000
      })
      .add({
        scale: 0.95,
        translateX: "2.5%",
        translateY: "2.5%"
      })
      .add({
        scale: 1,
        translateX: 0,
        translateY: 0
      });
  },
  methods: {
    registration() {
      if (this.password !== this.password_confirm) {
        this.errors.password = "Пароли не совпадают";
        return;
      }
      this.$refs.registration_btn.classList.add("load");

      axios
        .post(REGISTRATION, {
          full_name: this.full_name,
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.$refs.registration_btn.classList.remove("load");
          anime({
            targets: this.$refs.registration_btn,
            opacity: 0,
            easing: "linear",
            duration: 500
          });
          this.success_message =
            "Вы успешно зарегистрированы, " +
            res.data.full_name +
            "! Теперь можете авторизоваться.";
          setTimeout(() => {
            this.$refs.registration_btn.style.display = "none";
            this.$refs.success_message.style.display = "block";
          }, 1000);
        })
        .catch(err => {
          this.$refs.registration_btn.classList.remove("load");
          if (err.response === undefined) {
            this.$store.commit("connectionRefused", {
              refused: this.registration
            });
          } else {
            for (let key in err.response.data) {
              this.errors[key] = err.response.data[key].join(" ");
            }
          }
          errorProcessing(err);
        });
    }
  },
  components: { Cosmos }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.success-message {
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  display: none;
  animation: appear 500ms;
}

path {
  transform-origin: center;
}

label {
  width: 100%;
  font-weight: 100;
  & > input {
    border: none;
    height: auto !important;
    padding: 10px 20px !important;
    border-radius: 50px;
    background-color: #fff;
  }
}
.btn {
  border-radius: 50px;
  background-color: $violet;
  border: none;
  height: auto !important;
  padding: 10px 20px;
  font-weight: bold;
  & > svg {
    transition: transform 500ms;
    & > polygon {
      opacity: 0;
    }
  }
  @keyframes pawn-animation {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes pawn-rotate {
    from {
      transform: rotate(-90deg);
    }
    50% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-90deg);
    }
  }
  &:hover:not(.load) {
    & > svg {
      transform: rotate(-90deg);
    }
  }
  &.load {
    & > svg {
      animation: pawn-rotate 2000ms infinite;
    }
    & > svg > polygon {
      animation: pawn-animation 500ms infinite;
    }
  }
}
.cls-1,
.cls-2 {
  opacity: 0.15;
}
.cls-1 {
  fill: url(#Безымянный_градиент_16);
}
.cls-2 {
  fill: url(#Безымянный_градиент_16-2);
}
.cls-3 {
  fill: url(#Безымянный_градиент_16-3);
}
.cls-4 {
  fill: url(#Безымянный_градиент_75);
}
</style>
