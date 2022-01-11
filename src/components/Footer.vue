<template>
  <div id="footer">
    <div class="bg-light border-top border-dark">
      <div class="social">
        <div class="social-links mt-3 pb-3">
          <div class="container">
          <p class="text-center">Follow Us On Social</p>
            <div class="d-flex align-items-center justify-content-center">
              <router-link to="/"><i class="fab fa-facebook mx-2"></i></router-link>
              <router-link to="/"><i class="fab fa-instagram mx-2"></i></router-link>
              <router-link to="/"><i class="fab fa-twitter mx-2"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="container copyright border-top border-dark w-50">
          <p class="text-center mt-2">copyright | Signs 2022 All right reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.fab {
    font-size: 25px;
    color: #000000;
}
</style>