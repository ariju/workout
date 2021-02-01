<template>
  <section class="container">
    <div>
      <h1 class="title">
        firebaseでログイン実装しました!
      </h1>
      <!-- 新規登録に v-if="!isLogin" を追加 -->
      <section class="ex__box" v-if="!isLogin">
        <h5>新規登録</h5>
        <p>
          <input
            type="text"
            v-model="mailAddress"
            placeholder="メールアドレス"
          />
        </p>
        <p>
          <input type="password" v-model="password" placeholder="パスワード" />
        </p>
        <!-- エラーメッセージ表示部分を追加 -->
        <p class="errMessage" v-if="authError">{{ authError }}</p>
        <div class="links">
          <!-- クリックイベントを追加 -->
          <a @click="regist()" class="button--green">新規登録</a>
        </div>
      </section>

      <!-- ログインに v-if="!isLogin" を追加 -->
      <section class="ex__box" v-if="!isLogin">
        <h5>ログイン</h5>
        <p>
          <input
            type="text"
            v-model="mailAddress"
            placeholder="メールアドレス"
          />
        </p>
        <p>
          <input type="password" v-model="password" placeholder="パスワード" />
        </p>
        <!-- エラーメッセージ表示部分を追加 -->
        <p class="errMessage" v-if="authError">{{ authError }}</p>
        <div class="links">
          <!-- クリックイベントを追加 -->
          <a @click="login()" class="button--green">ログイン</a>
        </div>
      </section>

      <!-- ログアウトに v-if="isLogin" を追加 -->
      <section class="ex__box" v-if="isLogin">
        <h5>ログイン中です</h5>
        <!-- ログイン中ユーザーのメールアドレスを表示 -->
        <p>メールアドレス：{{ $store.state.user.emailAddress }}</p>
        <div class="links">
          <!-- クリックイベントを追加 -->
          <a @click="logout()" class="button--grey">ログアウト</a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      mailAddress: "",
      password: ""
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin;
    },
    authError() {
      return this.$store.state.user.authError;
    }
  },
  methods: {
    init: function() {
      this.password = "";
      this.mailAddress = "";
    },
    regist: function() {
      this.$store.dispatch("user/regist", {
        mailAddress: this.mailAddress,
        password: this.password
      });
      this.init();
    },
    login: function() {
      this.$store.dispatch("user/login", {
        mailAddress: this.mailAddress,
        password: this.password
      });
      this.init();
    },
    logout: function() {
      this.$store.dispatch("user/logout");
    }
  }
};
</script>

<script>
export default {
  layout: "toppage"
};
</script>
