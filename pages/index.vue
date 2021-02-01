<template>
  <div>
    <!-- Page Header -->
    <header
      class="masthead"
      style="background-image: url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>work out</h1>
              <span class="subheading">Strength training management</span>
            </div>
          </div>
        </div>
      </div>
      <img src="~assets/images/tre.jpg" alt="" />
    </header>

    <!-- Main Content -->
    
      <div class="abs">
        <img src="~assets/images/abs.jpg" alt="" />
      </div>

      <div class="spine">
        <img src="~assets/images/spine.jpg" alt="" />
      </div>

      <div class="leg">
        <img src="~assets/images/sample1.png" alt="" />
      </div>
    </div>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
}

a {
  color: #212529;
  transition: all 0.2s;
}

#mainNav {
  position: absolute;
  border-bottom: 1px solid #e9ecef;
  background-color: white;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

header.masthead {
  margin-bottom: 50px;
  background: no-repeat center center;
  background-color: red;
  background-attachment: scroll;
  position: relative;
  background-size: cover;
  text-align: center;
  padding: 200px 0 150px;
  color: white;
}

header.masthead .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #212529;
  opacity: 0.5;
}

.abs {
  padding: 50px 50px;
  height: 100%;
  width: 100%;
  background-color: red;
}

.spine {
  padding: 50px 50px;
  background-color: blue;
}

.leg {
  padding: 50px 50px;
  background-color: green;
}
</style>
