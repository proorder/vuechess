<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-6">
        На этой неделе вами заинтересовались: 0 пользователей
      </div>
      <div class="col-6">
        Информацию о себе вы можете изменить на этой странице:
        <router-link :to="{ name: 'Информация о тренере' }" class="button"
          >Изменить данные</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  metaInfo: {
    title: process.env.VUE_APP_TITLE + " | Персональный профиль пользователя"
  }
};
</script>
