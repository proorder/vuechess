<template>
  <div class="container py-5">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 order-1 order-sm-0 trainer-profile"
      >
        <img
          v-if="trainer.trainers.image[0] !== undefined"
          :src="path(trainer.trainers.image[0].image)"
          :class="{ 'opacity-0': opacity }"
          class="trainer-avatar container-fluid p-0 d-none d-sm-block"
        />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85 100"
          :class="{ 'opacity-0': opacity }"
          class="trainer-avatar container-fluid p-0"
        >
          <rect fill="#6300BF" class="cls-1" width="85" height="100" />
        </svg>
        <div class="button mt-3">Оставить заявку</div>
        <div
          class="d-flex justify-content-between align-items-baseline text-left mt-5"
        >
          <div class="font-weight-bold">
            Город:
          </div>
          <div class="font-weight-light">{{ trainer.trainers.city }}</div>
        </div>
        <div class="row mt-3">
          <div class="col-auto font-weight-bold">
            Разряд:
          </div>
          <div class="col-auto ml-auto font-weight-light">
            {{ trainer.trainers.sportsCategory }}
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-baseline text-left mt-3"
        >
          <div class="font-weight-bold">
            Возможность дистанционных занятий:
          </div>
          <div class="font-weight-light">
            {{ trainer.trainers.remotely ? "Да" : "Нет" }}
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-baseline text-left mt-3"
        >
          <div class="font-weight-bold">
            С кем занимается:
          </div>
          <div class="font-weight-light">
            {{ trainer.trainers.whoStudents }}
          </div>
        </div>
      </div>
      <div
        class="col-12 col-sm-6 col-md-8 col-lg-9 order-0 order-sm-1 text-left base-block"
      >
        <h4
          class="trainer-name font-weight-bold"
          :class="{ 'opacity-0': opacity }"
        >
          {{ trainer.fullName }}
        </h4>
        <img
          v-if="trainer.trainers.image[0] !== undefined"
          :src="path(trainer.trainers.image[0].image)"
          :class="{ 'opacity-0': opacity }"
          class="trainer-avatar container-fluid p-0 d-sm-none mb-3"
        />
        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 85 100"
            :class="{ 'opacity-0': opacity }"
            class="trainer-avatar container-fluid p-0 d-sm-none"
        >
          <rect fill="#6300BF" class="cls-1" width="85" height="100" />
        </svg>
        <h6 class="font-weight-bold">Тренер о себе:</h6>
        <p class="font-weight-light">{{ trainer.trainers.about }}</p>
        <h6 class="font-weight-bold">Достижения:</h6>
        <p class="font-weight-light">{{ trainer.trainers.achievements }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import anime from "animejs";
import { MODEL } from "../queries";
import errorProcessing from "../utils/errorProcessing";

export default {
  name: "trainer",
  data: () => ({
    trainer: {
      fullName: "[][][][][][][]",
      trainers: {
        about: "[][][][][][][]",
        image: [],
        sportsCategory: "[][][][][][][]",
        remotely: "",
        city: "",
        achievements: ""
      }
    },
    opacity: true
  }),
  mounted() {
    // TODO:
    // Создать класс, по которому будет производиться поиск и содержимого, которое стоит заменить.
    // Класс будет активен в случае если перменная прелоад === тру.
    // Интервал будет удаляться перед дейстройдом.
    axios
      .post(MODEL, {
        query: `
        query {
          trainer(id: ${this.$route.query.user_id || 1}) {
            id
            fullName
            trainers {
              about
              image {
                image
              }
              sportsCategory
              remotely
              whoStudents
              city
              achievements
            }
          }
        }
      `
      })
      .then(res => {
        this.trainer = res.data.data.trainer;
      })
      .catch(err => {
        if (err.response === undefined) {
          this.$store.commit("connectionRefused", {
            refused: this.mounted
          });
        }
        errorProcessing(err);
      });
    if (this.$store.getters.trainerName) {
      const { x, y } = document
        .querySelector(".trainer-name")
        .getBoundingClientRect();
      const avatarSource =
        window.innerWidth < 576
          ? document.querySelectorAll(".trainer-avatar")[1]
          : document.querySelector(".trainer-avatar");
      const { x: x1, y: y1 } = avatarSource.getBoundingClientRect();
      anime({
        targets: this.$store.getters.trainerName,
        left: x + "px",
        top: y + window.scrollY + "px"
      });
      this.$store.getters.trainerAvatar.style.height = "auto";
      anime({
        targets: this.$store.getters.trainerAvatar,
        left: x1 + "px",
        top: y1 + window.scrollY + "px",
        width: avatarSource.clientWidth + "px",
        borderRadius: "15px"
      });
    } else {
      this.opacity = false;
    }
  },
  methods: {
    path(path) {
      return process.env.VUE_APP_HOST + path;
    }
  },
  beforeDestroy() {
    if (this.$store.getters.trainerName) {
      document.body.removeChild(this.$store.getters.trainerAvatar);
      document.body.removeChild(this.$store.getters.trainerName);
      this.$store.commit("trainerDetermine", { avatar: null, name: null });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.opacity-0 {
  opacity: 0;
}

.trainer-avatar {
  border-radius: 15px;
}

.button {
  cursor: pointer;
  border-radius: 50px;
  background-color: #fff;
  color: $violet;
  padding: 8px 15px;
  font-weight: bold;
  -webkit-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
  transition: box-shadow 500ms;
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }
}

.trainer-name {
}

p {
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
}
</style>
