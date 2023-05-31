<template>
  <div class="alert-wrapper">
    <div class="flex">
      <div class="flex-shrink-0">
        <div class="alert-icon i-carbon-information-filled" aria-hidden="true" />
      </div>
      <div class="flex-1 md:flex md:justify-between">
        <div class="alert-info">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
