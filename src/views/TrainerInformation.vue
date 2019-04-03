<template>
  <div class="container py-5">
    <h5 v-if="$route.query.blank !== undefined" class="font-weight-bold mb-4">
      Ваша анкета появится в списке тренеров сразу после того, как вы заполните
      информацию о себе.
    </h5>
    <div class="text-left">
      <label>
        Разряд:
        <br />
        <input
          type="text"
          class="form-control mt-2"
          v-model="trainer.sports_category"
          placeholder="Разряд"
        />
        <span
          :class="{ 'd-block': errors.sports_category !== '' }"
          class="invalid-feedback"
          >{{ errors.sports_category }}</span
        >
      </label>
      <label class="mt-3">
        Рейтинг ФИДЕ:
        <br />
        <input
          type="text"
          class="form-control mt-2"
          v-model="trainer.rating"
          placeholder="1000"
        />
        <span
          :class="{ 'd-block': errors.rating !== '' }"
          class="invalid-feedback"
          >{{ errors.rating }}</span
        >
      </label>
      <label class="mt-3">
        Город:
        <br />
        <input
          type="text"
          class="form-control mt-2"
          v-model="trainer.city"
          placeholder="Город"
        />
        <span
          :class="{ 'd-block': errors.city !== '' }"
          class="invalid-feedback"
          >{{ errors.city }}</span
        >
      </label>
      <label class="mt-3">
        С кем занимаетесь:
        <br />
        <input
          type="text"
          class="form-control mt-2"
          v-model="trainer.who_students"
          placeholder="Со взрослыми | С детьми"
        />
        <span
          :class="{ 'd-block': errors.who_students !== '' }"
          class="invalid-feedback"
          >{{ errors.who_students }}</span
        >
      </label>
      <label class="mt-3">
        Достижения:
        <br />
        <input
          type="text"
          class="form-control mt-2"
          v-model="trainer.achievements"
          placeholder="Достижения"
        />
        <span
          :class="{ 'd-block': errors.achievements !== '' }"
          class="invalid-feedback"
          >{{ errors.achievements }}</span
        >
      </label>
      <label class="mt-3 d-flex">
        Возможность дистанционных занятий:
        <input
          type="checkbox"
          class="form-control w-auto ml-3 mt-1"
          v-model="trainer.remotely"
        />
      </label>
      <span
        :class="{ 'd-block': errors.remotely !== '' }"
        class="invalid-feedback"
        >{{ errors.remotely }}</span
      >
      <label class="mt-3">
        О себе:
        <br />
        <textarea class="form-control mt-2" v-model="trainer.about" />
        <span
          :class="{ 'd-block': errors.about !== '' }"
          class="invalid-feedback"
          >{{ errors.about }}</span
        >
      </label>
      <div class="custom-file mt-3">
        <input
          type="file"
          class="custom-file-input"
          ref="imageField"
          v-on:change="changeImageInput"
        />
        <label class="custom-file-label">Загрузить фотографию</label>
      </div>
      <span
        :class="{ 'd-block': errors.image !== '' }"
        class="invalid-feedback"
        >{{ errors.image }}</span
      >
      <div
        class="image-label mt-3"
        :class="{ 'd-none': !preview_image }"
        v-on:mousedown="drag"
      >
        <img ref="previewImage" alt="" class="container-fluid p-0" />
        <div class="hands">
          <div class="first-hand"></div>
          <div class="second-hand"></div>
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="save-button mt-3" v-on:click="send">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { TRAINERS } from "../queries";
import drag from "../utils/drag";
import errorProcessing from "../utils/errorProcessing";

export default {
  name: "TrainerInformation",
  data: () => ({
    trainer: {
      sports_category: "",
      rating: "",
      city: "",
      who_students: "",
      achievements: "",
      remotely: "",
      about: ""
    },
    errors: {
      sports_category: "",
      rating: "",
      city: "",
      who_students: "",
      achievements: "",
      remotely: "",
      about: "",
      image: ""
    },
    preview_image: null
  }),
  methods: {
    send() {
      let info = {
        ...this.trainer,
        offset_left:
          document.querySelector(".hands").offsetLeft /
          (this.$refs.previewImage.offsetWidth / 100),
        offset_top:
          document.querySelector(".hands").offsetTop /
          (this.$refs.previewImage.offsetHeight / 100),
        offset_height:
          document.querySelector(".hands").offsetHeight /
          (this.$refs.previewImage.offsetHeight / 100)
      };
      let formData = new FormData();
      for (let key in info) {
        formData.append(key, info[key]);
      }
      formData.append("image", this.$refs.imageField.files[0]);
      axios
        .post(TRAINERS, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          this.$router.push({ name: "Профиль" });
        })
        .catch(err => {
          if (err.response === undefined) {
            this.$store.commit("connectionRefused", {
              refused: this.send
            });
          } else {
            for (let key in err.response.data) {
              this.errors[key] = err.response.data[key].join(" ");
            }
          }
          errorProcessing(err);
        });
    },
    changeImageInput() {
      let reader = new FileReader();
      reader.addEventListener("load", event => {
        this.$refs.previewImage.src = event.target.result;
      });
      if (this.$refs.imageField.files[0] !== undefined) {
        this.preview_image = true;
        reader.readAsDataURL(this.$refs.imageField.files[0]);
        document.querySelector(".hands").style.width = "100px";
        document.querySelector(".hands").style.height = (100 / 85) * 100 + "px";
      }
    },
    drag(event) {
      drag.bind(this, event)();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

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
  & > textarea {
    border-radius: 10px;
    border: none;
  }
}
.custom-file-label:after {
  content: "Выбрать" !important;
}
.image-label {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0px auto;
  width: 300px;
  position: relative;
  background-color: #fff;
  & > .hands {
    width: 100px;
    height: 100px;
    border: 1px solid darkgrey;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: transparentize($violet, 0.9);
    cursor: grab;
    & > div {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: $violet;
      &.first-hand {
        top: 0px;
        left: 0px;
      }
      &.second-hand {
        right: 0px;
        bottom: 0px;
      }
    }
  }
}
.save-button {
  border: none;
  border-radius: 50px;
  background-color: $violet;
  color: #fff;
  font-weight: bold;
  padding: 8px 15px;
}
</style>
