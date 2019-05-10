<template>
  <div>
    <header>
      <div class="parallax__content">
        <div class="container">
          <div class="row head">
            <span class="toggleNav d-block d-sm-none">
              <svg
                class="svg-hamburger"
                viewBox="0 0 1536 1280"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="svg-hamburger-path"
                  d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45z"
                />
              </svg>
            </span>
            <div class="d-flex align-items-center">
              <social-icons class="d-none d-md-flex "></social-icons>
              <h3 class="font-weight-bold m-0 p-0">Шах и Мат</h3>
            </div>
            <div
              v-if="full_name !== null"
              class="col-aut ml-auto d-flex align-items-center profile-info"
            >
              {{ full_name }}
              <ul class="profile-info__menu">
                <li>
                  <router-link :to="{ name: 'Профиль' }">Профиль</router-link>
                </li>
                <li>
                  <a href="#getout" v-on:click="getOut">Выход</a>
                </li>
              </ul>
            </div>
            <div v-else class="col-auto ml-auto d-flex align-items-center">
              Для репетиторов:
              <a
                to="/registration"
                class="button-registr ml-2"
                v-on:click="auth_popup = true"
              >
                Войти
              </a>
              <div
                class="profile-info__card card"
                style="width: 18rem;"
                v-if="auth_popup"
              >
                <div class="substrate" v-on:click="auth_popup = false"></div>
                <div class="card-body">
                  <h5 class="card-title text-dark font-weight-bold">
                    Авторизация на сайте
                  </h5>
                  <p class="card-text">
                    <input
                      type="text"
                      placeholder="email@address.com"
                      v-model="auth_email"
                    />
                    <input
                      type="password"
                      placeholder="••••••"
                      class="mt-2"
                      v-model="auth_password"
                    />
                  </p>
                  <a href="#enter" class="card-link" v-on:click="enter"
                    >Войти</a
                  >
                  <a
                    href="#"
                    class="card-link"
                    v-on:click="
                      e => {
                        e.preventDefault();
                        auth_popup = false;
                        $router.push({ name: 'Регистрация' });
                      }
                    "
                    >Регистрация</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row my-5">
            <div
              class="col-12 col-lg-7 d-flex align-items-center justify-content-center"
            >
              <h1 class="font-weight-bold">
                Обучение шахматам<br />по всей России<br />- шахматная школа<br />"Шах и Мат"
              </h1>
            </div>
            <div class="mt-5 mt-md-0 col-12 col-lg-5 d-flex align-items-center">
              <div class="pl-lg-5 pb-lg-5 pr-lg-5 w-100 text-left">
                <span class="font-weight-bold">Подберем тренера:</span>
                <div
                  class="block__for-student mt-3 pt-3 pb-3 d-block d-sm-flex d-lg-block align-items-center"
                >
                  <div class="title d-block d-sm-none d-lg-block">
                    <span class="font-weight-bold">Для этого оставьте:</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ваш телефон"
                    class="mt-3 mt-sm-0 mt-lg-3 ml-1 ml-lg-0"
                    v-on:focus="formFocus"
                    v-model="contact"
                  />
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    class="mt-3 mt-sm-0 mt-lg-3 ml-1 ml-lg-0"
                    v-on:focus="formFocus"
                    v-model="contact_name"
                  />
                  <div class="text-center">
                    <div
                      v-on:click="formSend"
                      class="button mt-3 mt-sm-0 mt-lg-3 btn ml-1 ml-lg-0"
                      :class="{ disabled: button_disabled }"
                    >
                      Оставить заявку <span class="decor" />
                      <svg
                        id="airplane-svg"
                        width="34"
                        height="34"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M.5,249.5l213-87.5,213-87.5L338.5,287l-88,212.5c0-30-35.4-117.4-88-170C110.92,277.92,30.5,250.5.5,249.5Z"
                        />
                      </svg>
                      <svg
                        id="ellipse"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse cx="250" cy="250" rx="250" ry="250" />
                      </svg>
                      <svg
                        class="path"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 800"
                      >
                        <path
                          id="path"
                          d="M-.5,796.5c168.56,11.79,229.51-46.7,248-68C354.7,605,278.36,299.52-.5-.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="text-after-plane d-sm-none d-lg-block text-center"
                  >
                    <span v-if="error === ''">{{ text_after_plane }}</span>
                    <span v-else>{{ error }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="parallax__background" />
    </header>
    <div
      class="toast"
      v-if="toast_message !== ''"
      :class="{ show: toast_message !== '' }"
      style="position: fixed; top: 10px; right: 10px; z-index: 2;"
    >
      <div class="toast-header">
        <strong class="mr-auto ">Информация</strong>
        <button
          type="button"
          v-on:click="toast_message = ''"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body font-weight-bold text-white">
        {{ toast_message }}
      </div>
    </div>
    <nav class="menu nav active d-none d-sm-flex" role="navigation">
      <ul class="nav__list" id="sideNav">
        <div class="nav__list-left container">
          <a class="closeBtn d-md-none">
            <svg
              class="svg-close"
              viewBox="0 0 1188 1188"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="svg-close-path"
                d="M1188 956q0 40-28 68l-136 136q-28 28-68 28t-68-28L594 866l-294 294q-28 28-68 28t-68-28L28 1024Q0 996 0 956t28-68l294-294L28 300Q0 272 0 232t28-68L164 28q28-28 68-28t68 28l294 294L888 28q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L866 594l294 294q28 28 28 68z"
              />
            </svg>
          </a>
          <li>
            <router-link class="menu-item" to="/" exact>
              Главная
            </router-link>
          </li>
          <li>
            <router-link class="menu-item" :to="{ name: 'Тренеры' }" exact>
              Тренеры
            </router-link>
          </li>
          <li>
            <router-link class="menu-item" :to="{ name: 'Отзывы' }" exact>
              Отзывы
            </router-link>
          </li>
          <li>
            <router-link class="menu-item" :to="{ name: 'Новости' }" exact>
              Новости
            </router-link>
          </li>
          <li>
            <router-link class="menu-item" :to="{ name: 'Инвентарь' }" exact>
              Инвентарь
            </router-link>
          </li>
          <li>
            <router-link class="menu-item" :to="{ name: 'Книги' }" exact>
              Книги
            </router-link>
          </li>
        </div>
        <div class="nav__list-right">
          <div class="page__overlay" />
        </div>
      </ul>
    </nav>
    <router-view></router-view>
    <div class="pre-footer"></div>
    <div class="footer py-3 py-md-5">
      <div class="container">
        <div class="row">
          <div
            class="col-auto mr-auto ml-auto ml-md-0 order-2 order-md-1 my-3 my-md-0"
          >
            Подпишись:
            <social-icons class="mt-2"></social-icons>
          </div>
          <div
            class="col-auto ml-auto mr-auto mr-md-0 order-1 order-md-2 my-3 my-md-0"
          >
            <div class="d-flex">
              <div class="footer__contacts text-right">
                <h2 class="footer__tel">8 967 866 51 23</h2>
                <a href="#sendemail" class="footer__email">
                  shnaider.violetta98@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import axios from "axios";
import SocialIcons from "../components/SocialIcons";
import { AUTH, REQUEST } from "../queries";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import errorProcessing from "../utils/errorProcessing";

export default {
  name: "basic",
  created() {
    this.full_name = localStorage.getItem("name");
    this.synchronous_timeline = anime.timeline();
  },
  data: () => ({
    full_name: "",
    contact: "",
    contact_name: "",
    error: "",
    text_after_plane: "",
    button_disabled: false,
    toast_message: "",
    auth_popup: false,
    auth_email: "",
    auth_password: ""
  }),
  methods: {
    enter() {
      axios
        .post(AUTH, {
          email: this.auth_email,
          password: this.auth_password
        })
        .then(res => {
          localStorage.setItem("jwtToken", res.data.token);
          localStorage.setItem("name", res.data.full_name);
          this.full_name = res.data.full_name;
          setAuthorizationToken(res.data.token);
          if (res.data.information) {
            this.$router.push({ name: "Профиль" });
          } else {
            this.$router.push({
              name: "Информация о тренере",
              query: { blank: "true" }
            });
          }
        });
    },
    getOut(event) {
      event.preventDefault();
      setAuthorizationToken(false);
    },
    plane() {
      document.querySelector(".button").style.color = "transparent";
      let anim = anime.timeline({ duration: 800 });
      anim
        .add({
          targets: document.querySelector(".button"),
          width: "38px",
          delay: 300
        })
        .add({
          targets: "#airplane-svg",
          easing: "linear",
          opacity: 1
        });
      setTimeout(() => {
        document.querySelector(".button").style.background = "transparent";
      }, 1900);
      document.querySelector(".button").classList.add("active");
      anim
        .add({
          targets: "#ellipse > ellipse",
          cy: 400,
          cx: 150,
          ry: 100,
          rx: 150,
          easing: "easeOutCirc"
        })
        .add({
          targets: "#ellipse > ellipse",
          cy: 250,
          cx: 250,
          ry: 250,
          rx: 250,
          easing: "easeOutQuart",
          duration: 250
        });
      setTimeout(() => {
        const airplane = document.querySelector("#airplane-svg");
        document.querySelector("#path").style.top =
          airplane.getBoundingClientRect().y - 800 + 19 + "px";
        document.querySelector("#path").style.left =
          airplane.getBoundingClientRect().x - 300 + 19 + "px";
        airplane.style.top = "-800px";
        let path = anime.path("#path");
        anime.timeline().add({
          targets: "#airplane-svg",
          translateX: path("x"),
          translateY: path("y"),
          rotate: path("angle"),
          duration: 5000
        });
      }, 2700);
      setTimeout(() => {
        this.synchronous_timeline.add({
          targets: "#ellipse",
          opacity: 0
        });
        this.showAfterPlane();
      }, 3100);
    },
    showAfterPlane() {
      if (this.answer) {
        if (window.innerWidth > 575 && window.innerWidth < 992) {
          this.toast_message = this.text_after_plane;
          document.querySelector(".button").style.width = "auto";
          document.querySelector(".button").style.backgroundColor = "#6300BF";
          document.querySelector(".button").style.color = "#fff";
          document.querySelector(".button").innerHTML = "Заявка отправлена";
          this.button_disabled = true;
        } else {
          this.synchronous_timeline.add({
            targets: ".text-after-plane",
            opacity: 1
          });
        }
      } else {
        this.answer = true;
      }
    },
    formFocus() {
      if (this.error === "") {
        return;
      }

      this.error = "";

      anime
        .timeline({
          easing: "linear",
          duration: 300
        })
        .add({
          targets: ".text-after-plane",
          opacity: 0
        })
        .add({
          targets: document.querySelector(".button"),
          opacity: 1
        });
      setTimeout(() => {
        document.querySelector(".text-after-plane").style.display = "none";
      }, 600);
    },
    formSend() {
      if (this.button_disabled) {
        return;
      }
      if (this.contact.trim() === "" || this.contact_name.trim() === "") {
        if (this.contact.trim() === "") {
          this.error = "Вы не оставили нам свои контакты";
        }
        if (this.contact_name.trim() === "") {
          this.error = "Вы не указали как вас назвать";
        }

        document.querySelector(".text-after-plane").style.display = "flex";
        const errorTimeline = anime.timeline({
          easing: "linear",
          duration: 300
        });
        errorTimeline.add({
          targets: document.querySelector(".button"),
          opacity: 0
        });
        if (window.innerWidth > 575 && window.innerWidth < 992) {
          setTimeout(() => {
            document.querySelector(".button").innerHTML = "Заполните поля";
          }, 300);
          errorTimeline.add({
            targets: document.querySelector(".button"),
            opacity: 1
          });
        } else {
          errorTimeline.add({
            targets: ".text-after-plane",
            opacity: 1
          });
        }

        return;
      }

      axios
        .post(REQUEST, {
          contact: this.contact,
          name: this.contact_name
        })
        .then(res => {
          if (res.data.message === "success") {
            this.text_after_plane = "Ваша заявка отправлена!";
          } else {
            this.text_after_plane = res.data.message;
          }
          this.showAfterPlane();
        })
        .catch(err => {
          if (err.response === undefined) {
            this.$store.commit("connectionRefused", {
              refused: this.formSend
            });
          }
          errorProcessing(err);
        });

      this.plane();
    }
  },
  components: {
    SocialIcons
  }
};
</script>

<style lang="scss">
@import "../assets/scss/vars";
@import "../../node_modules/bootstrap/scss/bootstrap";

.container.py-5 {
  min-height: 400px;
}

body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif !important;
  font-size: 16px;
  background-color: $beige-color !important;
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}

header {
  position: relative;
}

header > .parallax__content {
  color: #fff;
  padding: 0.7em;
}

.head {
  align-items: center;
}

.parallax__content {
  position: relative;
  z-index: 2;
  background-color: rgba(114, 69, 40, 0.8);
  & h1 {
    text-align: right;
  }
}

.parallax__background {
  z-index: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-image: url("../assets/img/parallax.jpg");
  background-size: cover;
  background-position: center bottom;
}

.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}

.page_description {
  background-color: $light-color;
}

@media screen and (max-width: 1199px) {
  .container {
    padding-left: 4em !important;
    padding-right: 4em !important;
    width: auto !important;
    max-width: none !important;
  }
}

@media screen and (max-width: 767px) {
  body {
    font-size: 14px;
  }
  .container {
    padding-left: 2em !important;
    padding-right: 2em !important;
  }
}

.button-registr {
  height: 40px;
  border-radius: 50px;
  border: 1px solid rgb(197, 151, 117);
  background-color: rgba(239, 234, 230, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  &:hover {
    animation: shadow 300ms forwards;
  }
  &:active,
  &:hover {
    text-decoration: none;
    color: #fff;
  }
}

.block__for-student {
  padding: 6em 1em;
  background: -moz-linear-gradient(
    left,
    rgba(134, 183, 188, 0.7) 0%,
    rgba(197, 151, 117, 0.7) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(134, 183, 188, 0.7) 0%,
    rgba(197, 151, 117, 0.7) 100%
  );
  background: linear-gradient(
    to right,
    rgba(134, 183, 188, 0.7) 0%,
    rgba(197, 151, 117, 0.7) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b386b7bc', endColorstr='#b3c59775',GradientType=1 );
  position: relative;
  border-radius: 10px 0px 10px 0px;
  &:before {
    content: "";
    width: 80px;
    height: 80px;
    background-image: url("../assets/img/angleTR.png");
    position: absolute;
    top: -35px;
    right: -35px;
  }
  &:after {
    content: "";
    width: 80px;
    height: 80px;
    background-image: url("../assets/img/angleBL.png");
    position: absolute;
    bottom: -35px;
    left: -35px;
  }
  & > .title {
    text-transform: uppercase;
  }
  & input {
    flex: 1;
    width: 100%;
    padding: 0.3em 0.8em;
    border: none;
    outline: none;
    border-radius: 10px 0px 10px 0px;
    color: rgb(114, 69, 40);
    -webkit-box-shadow: inset 0px 0px 5px 0px rgba(114, 69, 40, 1);
    -moz-box-shadow: inset 0px 0px 5px 0px rgba(114, 69, 40, 1);
    box-shadow: inset 0px 0px 5px 0px rgba(114, 69, 40, 1);
    border: 1px solid transparent;
    &::-webkit-input-placeholder {
      color: rgb(114, 69, 40);
    }
    &::-moz-placeholder {
      color: rgb(114, 69, 40);
    }
    &:-ms-input-placeholder {
      color: rgb(114, 69, 40);
    }
    &:-moz-placeholder {
      color: rgb(114, 69, 40);
    }
  }
  .button {
    outline: none !important;
    font-size: 16px;
    background-color: $violet;
    border-radius: 50px;
    color: $light-color;
    height: 38px;
    position: relative;
    transition: ease-out color, opacity 300ms;
    z-index: 4;
    font-weight: bold;
    &.transparent {
      background-color: transparent;
    }
    & > #airplane-svg {
      position: absolute;
      top: 1px;
      left: 1px;
      opacity: 0;
    }
    & > #ellipse {
      position: absolute;
      top: -1px;
      left: -1px;
      z-index: -1;
      width: 38px;
      height: 38px;
      & > ellipse {
        fill: $violet;
      }
    }
    .path {
      position: absolute;
      pointer-events: none;
    }
    &:focus,
    &:hover,
    &:active {
      outline: none !important;
      outline-offset: 0;
    }
    &:hover {
      &:not(.active):not(.disabled) {
        box-shadow: 0px 10px 10px 1px transparentize(#000, 0.9);
        cursor: pointer;
      }
    }
  }
  .text-after-plane {
    color: #fff;
    padding: 20px 0;
    font-weight: 600;
    opacity: 0;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

#airplane-svg {
  & > path {
    fill: $light-color;
  }
}

.profile-info {
  position: relative;
  & > .profile-info__menu {
    background: $beige-color;
    position: absolute;
    top: 22px;
    right: 0px;
    display: none;
    list-style-type: none;
    margin: 0px;
    padding: 0px 0px 5px 0px;
    border-radius: 5px;
    color: dodgerblue;
    z-index: +1;
    & > li > a {
      display: block;
      color: #fff;
      background-color: $violet;
      cursor: pointer;
      margin: 5px 0px 0px 0px;
      padding: 6px 40px;
      border-radius: 0px;
      &:hover {
        background-color: transparentize($violet, 0.3);
      }
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  &:hover {
    .profile-info__menu {
      display: block;
    }
  }
}

.profile-info__card {
  position: absolute;
  top: 50px;
  right: 0px;
  z-index: 20;
  background-color: $beige-color;
  border: none;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  & > .substrate {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
  }
  .card-text {
    & > input {
      border-radius: 50px;
      width: 100%;
      border: none;
      outline: none;
      padding: 7px 20px;
    }
  }
}

.menu {
  color: $brown-color;
  padding: 0px !important;
  margin: 0px !important;
  font-weight: bold;
  text-align: center;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 transparentize(#000, 0.4);
  display: flex;
  align-items: center;
  & > .nav__list {
    width: 100%;
    margin: 0px;
    padding: 0px;
    & > .nav__list-left {
      display: flex;
      justify-content: space-between;
      & > li {
        list-style-type: none;
        & > .menu-item {
          font-weight: 600;
          text-decoration: none;
          color: $violet;
          cursor: pointer;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          &:before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -3px;
            width: 0px;
            height: 1px;
            border-bottom: 1px solid $violet;
            transition: all 300ms;
          }
          &.router-link-active {
            &:before {
              width: 50px;
              margin-left: -25px;
            }
          }
          &:hover {
            &:before {
              margin-left: -25px;
              width: 50px;
            }
          }
        }
      }
    }
  }
}

.toggleNav {
  position: absolute;
  & > svg {
    fill: $cream-color;
    width: 30px;
    height: 30px;
    transition: fill 300ms;
    cursor: pointer;
    &:hover {
      fill: $light-color;
    }
  }
}

.closeBtn {
  position: absolute;
  top: 10px;
  right: 10px;
  & > svg {
    width: 30px;
    height: 30px;
    fill: $brown-color;
  }
}

.toast-body {
  background-color: $violet;
}

.pre-footer {
  height: 20px;
  background: url('data:image/svg+xml; utf8, <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 57"><path fill="rgb(20,0,63)" d="M2400,3c-151,0-651,30-820,30S986,0,612,0C320.56,0,151.74,37.92,0,45V57H2400Z"/></svg>');
}
.footer {
  background-color: $violet-dark;
  font-weight: bold;
  color: #fff;
  & .footer__tel {
    font-weight: bold;
  }
  & .footer__email {
    color: #fff;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
