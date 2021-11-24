<template>
  <div class="kc-subscribe">
    <div class="kc-subscribe__cell">
      <h3 class="kc-subscribe__hdg">Subscribe to new episodes</h3>
    </div>
    <div class="kc-subscribe__cell"><label
        class="ko-label ku-show-sr ko-label--error ko-label--required">First name</label><input
        type="text" placeholder="First name" required="required" class="ko-input ko-input--error">
    </div>
    <div class="kc-subscribe__cell"><label class="ko-label ku-show-sr ko-label--required">Email
        address</label><input type="email" placeholder="Email address" required="required"
        class="ko-input"></div>
    <div class="kc-subscribe__cell"><button type="button"
        class="ko-button ko-button--form">Subscribe</button></div>
  </div>
</template>

<script>
  export default {
    name: "SubscribeForm",
  };

</script>
