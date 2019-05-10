<template>
  <div class="container py-5">
    <div className="col-12 p-5">
      <h3 className="display-5">Ждите новости скоро</h3>
      <hr className="my-4" />
      <p className="lead">
        Какие они будут - зависит от вас
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  metaInfo: {
    title: process.env.VUE_APP_TITLE + " | Актуальные новости портала"
  }
};
</script>
