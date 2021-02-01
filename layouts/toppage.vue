<template>
    <section class="container">
    <div>
      <h1 class="title">
        firebaseでログイン実装しました!
      </h1>
      <section class="ex__box" v-if="!isLogin">
        <h5>新規登録</h5>
        <p><input type="text" v-model="mailAddress" placeholder="メールアドレス"></p>
        <p><input type="password" v-model="password" placeholder="パスワード"></p>
        <p class="errMessage" v-if="authError">{{authError}}</p>
        <div class="links">
        <a @click="regist()" class="button--green">新規登録</a>
        </div>
      </section>
      <section class="ex__box" v-if="!isLogin">
        <h5>ログイン</h5>
        <p><input type="text" v-model="mailAddress" placeholder="メールアドレス"></p>
        <p><input type="password" v-model="password" placeholder="パスワード"></p>
        <p class="errMessage" v-if="authError">{{authError}}</p>
        <div class="links">
          <a @click="login()" class="button--green">ログイン</a>
        </div>
      </section>
      <section class="ex__box" v-if="isLogin">
        <h5>ログイン中です</h5>
        <p>メールアドレス：{{$store.state.user.emailAddress}}</p>
        <div class="links">
          <a @click="logout()" class="button--grey">ログアウト</a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>