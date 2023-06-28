<script setup lang="ts">
import Divider from './Divider.vue'
</script>

<template>
  <Divider title="Inputs">
    <div class="flex gap2 flex-col">
      <div>
        <label for="email" class="label">Email</label>
        <div class="mt-2">
          <input
            id="email"
            type="email"
            placeholder="phojrengel@ckcm.edu.ph"
            input="outline"
          >
        </div>
      </div>
    </div>
  </Divider>
</template>
