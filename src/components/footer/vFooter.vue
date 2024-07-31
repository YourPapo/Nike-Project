<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__aside">
        <aside>
          <ul>
            <li>
              <router-link :to="{ name: 'Products' }">Resourses</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Products' }">Gift Cards</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Products' }"
                >Become a member</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Products' }">Nike x NBA</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Products' }">Nike Journal</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Products' }"
                >Site Feedback</router-link
              >
            </li>
          </ul>
        </aside>
      </div>
      <div class="footer__main">
        <div class="footer__links">
          <div class="footer__column">
            <h5>Help</h5>
            <ul>
              <li>
                <router-link :to="{ name: 'Help' }">Get Help</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Order Status</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }"
                  >Shipping and Delivery</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Help' }"
                  >Payment Options</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Help' }"
                  >Gift Card Balance</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Contact us</router-link>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <h5>Company</h5>
            <ul>
              <li>
                <router-link :to="{ name: 'Help' }">About Nike</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Careers</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Investors</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Purpose</router-link>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <h5>Promotions & Discounts</h5>
            <ul>
              <li>
                <router-link :to="{ name: 'Help' }">Students</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Teacher</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Birthday</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }">Professionals</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Help' }"
                  >First Responder & Medical</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__social">
          <ul>
            <li>
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            </li>
            <li>
              <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            </li>
            <li>
              <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            </li>
            <li>
              <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2024 Nike, Inc, All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
import "./Footter.scss";

export default {};
</script>

<style></style>
