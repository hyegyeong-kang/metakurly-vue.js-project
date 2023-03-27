<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
      <div class="container">
        <router-link class="navbar-brand" :to="{name: 'Home'}">Meta<span class="text-primary">Kurly.</span></router-link>

        <div class="navbar-collapse collapse" id="navbarContent">
          <ul class="navbar-nav ml-lg-4 pt-3 pt-lg-0">
            <li class="nav-item"><router-link class="nav-link" :to="{name: 'Home'}">홈</router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link" :to="{name: 'ProductsBestList'}">베스트</router-link></li> -->
            <li class="nav-item"><router-link class="nav-link" to="/products/bestList">베스트</router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link" :to="{name: 'ProductsList'}">모든상품</router-link></li> -->
            <li class="nav-item"><router-link class="nav-link" to="/products">모든상품</router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link" :to="{name: 'MemberMyPage'}">마이페이지</router-link></li> -->
            <li class="nav-item"><router-link class="nav-link" to="/myPage">마이페이지</router-link></li>
          </ul>

          <div class="ml-auto" v-if="IsNullMember">
            <router-link class="btn btn-outline rounded-pill" to="/singup">회원가입</router-link>
            <router-link class="btn btn-outline rounded-pill" to="/login">로그인</router-link>
          </div>
          <div class="ml-auto" v-else>
            <!-- <p>환영합니다! {{member.userId}} 님</p> -->
            <p>환영합니다! 000 님</p>
            <router-link class="btn btn-outline rounded-pill" to="/logout">로그아웃</router-link>
          </div>
        </div>
      </div>
  </nav>
  <div class="page-section">
    <div class="container">
      <router-view/>
    </div>
  </div>
  <footer class="page-footer">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 py-3">
          <h3>
            Meta<span class="text-primary">Kurly.</span>
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <p>
            <a href="#">metaKurly.info@mail.com</a>
          </p>
          <p>
            <a href="#">02-1234-5678</a>
          </p>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Quick Links</h5>
          <ul class="footer-menu">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Report a Bug</a></li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>About Us</h5>
          <ul class="footer-menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Our Teams</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">News & Press</a></li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Subscribe</h5>
          <form action="#">
            <input type="text" class="form-control"
              placeholder="Enter your mail..">
          </form>

          <div class="sosmed-button mt-4">
            <a href="#"><span class="mai-logo-facebook-f"></span></a> <a
              href="#"><span class="mai-logo-twitter"></span></a> <a href="#"><span
              class="mai-logo-google"></span></a> <a href="#"><span
              class="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 py-2">
          <p id="copyright">
            &copy; 2020 <a href="https://macodeid.com/">MACode ID</a>. All
            rights reserved
          </p>
        </div>
        <div class="col-sm-6 py-2 text-right">
          <div class="d-inline-block px-3">
            <a href="#">Privacy</a>
          </div>
          <div class="d-inline-block px-3">
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    <!-- .container -->
  </footer>
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
    const member = ref(null);

    const IsNullMember = () => {
      return member == null;
    }

    return{
      member,
      IsNullMember,
    }
  }

}
</script>

<style>
@import "@/assets/css/animate.css";
@import "@/assets/css/bootstrap.css";
@import "@/assets/css/maicons.css";
@import "@/assets/css/owl.carousel.css";
@import "@/assets/css/theme.css";
@import "@/assets/css/login.css";

h5{
  font-size: 1.25rem;
}

</style>
