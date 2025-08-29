<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-6">
    <div class="w-full max-w-sm space-y-6">
      <!-- Header Text -->
      <div class="text-center space-y-0.5">
        <h1 class="text-base font-bold text-black">Create an account</h1>
        <p class="text-sm text-black">Enter your email to sign up for this app</p>
      </div>

      <!-- Email Form -->
      <div class="space-y-4">
        <!-- Email Input -->
        <div class="relative">
          <input
            v-model="email"
            type="email"
            placeholder="email@domain.com"
            class="w-full h-10 px-4 text-sm text-black placeholder-gray-400 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
          />
        </div>

        <!-- Continue Button -->
        <button
          @click="handleContinue"
          class="w-full h-10 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 pl-[140px]"
        >
          Continue
        </button>
      </div>

      <!-- Divider -->
      <div class="flex items-center space-x-2">
        <div class="flex-1 h-px bg-gray-300"></div>
        <span class="text-sm text-gray-400">or</span>
        <div class="flex-1 h-px bg-gray-300"></div>
      </div>

      <!-- Social Login Buttons -->
      <div class="space-y-3">
        <!-- Google Button -->
        <button
          @click="handleGoogleLogin"
          class="w-full h-10 bg-gray-100 text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-center space-x-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9895 10.1871C19.9895 9.36768 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.2211 19.9895 10.1871Z" fill="#4285F4"/>
            <path d="M10.1991 19.9313C12.9526 19.9313 15.2642 19.0454 16.9526 17.5174L13.7345 15.0813C12.8733 15.6682 11.7175 16.0778 10.1991 16.0778C7.50234 16.0778 5.21342 14.3395 4.39749 11.9367L4.27789 11.9466L1.12992 14.3273L1.08877 14.4391C2.76578 17.6945 6.21049 19.9313 10.1991 19.9313Z" fill="#34A853"/>
            <path d="M4.39748 11.9367C4.18219 11.3167 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397568 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397568 13.0882 1.08875 14.4391L4.39748 11.9367Z" fill="#FBBC05"/>
            <path d="M10.1991 3.85336C12.1141 3.85336 13.4058 4.66168 14.1424 5.33718L17.0205 2.59107C15.2529 0.985496 12.9526 0 10.1991 0C6.21049 0 2.76578 2.23672 1.08875 5.49214L4.38614 7.99466C5.21342 5.59183 7.50234 3.85336 10.1991 3.85336Z" fill="#EB4335"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        <!-- Apple Button -->
        <button
          @click="handleAppleLogin"
          class="w-full h-10 bg-gray-100 text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-center space-x-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4844 10.8125C15.4688 8.75 17.125 7.75 17.2188 7.6875C16.2969 6.28125 14.8438 6.09375 14.3438 6.0625C13.0625 5.90625 11.8125 6.78125 11.1562 6.78125C10.4844 6.78125 9.46875 6.09375 8.40625 6.125C7.03125 6.15625 5.75 6.9375 5.03125 8.1875C3.53125 10.75 4.65625 14.6563 6.09375 16.8125C6.8125 17.875 7.65625 19.0625 8.8125 19.0156C9.84375 18.9688 10.25 18.375 11.5 18.375C12.7344 18.375 13.1094 19.0156 14.2031 18.9844C15.3281 18.9688 16.0625 17.9375 16.7656 16.8594C17.5781 15.6563 17.875 14.4844 17.8906 14.4219C17.8594 14.4063 15.5 13.5625 15.4844 10.8125Z" fill="black"/>
            <path d="M12.9687 4.90625C13.5625 4.1875 13.9687 3.1875 13.8437 2.15625C12.9687 2.21875 11.8906 2.8125 11.2656 3.5C10.7187 4.09375 10.2187 5.125 10.375 6.09375C11.3437 6.15625 12.3437 5.5625 12.9687 4.90625Z" fill="black"/>
          </svg>
          <span>Continue with Apple</span>
        </button>
      </div>

      <!-- Terms Text -->
      <p class="text-xs text-gray-400 text-center leading-relaxed">
        By clicking continue, you agree to our 
        <button @click="handleTermsClick" class="text-black underline hover:no-underline">
          Terms of Service
        </button>
        and 
        <button @click="handlePrivacyClick" class="text-black underline hover:no-underline">
          Privacy Policy
        </button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleContinue = () => {
  console.log('Continue with email:', email.value)
  // Add your email signup logic here
}

const handleGoogleLogin = () => {
  console.log('Continue with Google')
  // Add your Google login logic here
}

const handleAppleLogin = () => {
  console.log('Continue with Apple')
  // Add your Apple login logic here
}

const handleTermsClick = () => {
  console.log('Terms of Service clicked')
  // Add navigation to terms page
}

const handlePrivacyClick = () => {
  console.log('Privacy Policy clicked')
  // Add navigation to privacy page
}
</script>
