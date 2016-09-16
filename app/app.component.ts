import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="loader-container circle-pulse-multiple">
    <div class="loader">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
    </div>
  </div>
  <main role="main">
    <h1>Shh... <span class="title">LukasJokubas.lt</span> grows in silence.</h1>
  </main>
  <div class="share-buttons">
    <span class="st_sharethis_large" displayText="ShareThis"></span>
    <span class="st_googleplus_large" displayText="Google +"></span>
    <span class="st_facebook_large" displayText="Facebook"></span>
    <span class="st_twitter_large" displayText="Tweet"></span>
    <span class="st_linkedin_large" displayText="LinkedIn"></span>
    <span class="st_pinterest_large" displayText="Pinterest"></span>
  </div>
  `
})
export class AppComponent { }