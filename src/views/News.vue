<template>
  <div class="container py-5">
    <!--
    <div className="col-12 p-5">
      <h3 className="display-5">Ждите новости скоро</h3>
      <hr className="my-4" />
      <p className="lead">
        Какие они будут - зависит от вас
      </p>
    </div>
    -->

    <div class="news-item">
      <h3>Бесплатное пробное занятие!</h3>
      <h6>Для начинающих - научим играть в шахматы, а для практикующих шахматистов - повысим уровень игры!</h6>
      <h5><span class="badge badge-pill badge-success">Запишись по промо-коду: "Май"</span></h5>
      <hr>
      <p>В связи с открытием сайта у первых посетителей есть прекрасная возможность воспользоваться специальным предложением и абсолютно бесплатно получить 1 занятие с консультацией профессионального тренера. Для этого необходимо лишь оставить заявку на одного из тренеров с кодовым словом <b><i>"май"</i></b> или написать в соцсетях по ссылкам, указанным на сайте. Успевайте!
      </p>
      <router-link :to="{name: 'Тренеры'}" class="button">Выбрать тренера -></router-link>
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

<style lang="scss">
@import "../assets/scss/vars";
.badge-success {
  background-color: $violet;
}
.news-item {
  background-color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 15px;
  text-align: left;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(20,0,63,1);
  -moz-box-shadow: 0px 3px 6px 0px rgba(20,0,63,1);
  box-shadow: 0px 3px 6px 0px rgba(20,0,63,1);
  & > h3 {
    padding: 0px;
    margin: 5px 0;
  }
  & > h6 {
    padding: 0px;
    margin: 10px 0;
  }
  & > p {
    font-weight: 100;
    padding: 0px;
    margin: 5px 0;
  }
}
</style>
