<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { teamMembers } from '../../contributors'
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <div class="text-center">
            <h2 id="meet-the-team" op70 font-normal p="t-10 b-2" class="!text-3xl">
              Meet The Team
            </h2>
            <div bg-red>
              <VPTeamMembers :members="teamMembers" />
            </div>
          </div>

          <h2 id="sponsored-by" op70 font-normal pt-5 pb-2 class="!text-3xl">
            Sponsored by
          </h2>
          <div w-full grid="~ cols-1" place-items-center mt-10>
            <a href="https://github.com/nexvelt" target="_bl" class="flex flex-col items-center space-y-3">
              <img
                crossorigin="anonymous"
                loading="lazy"
                src="https://avatars.githubusercontent.com/u/128097013?v=4"
                class="w-50 h-50 rounded-full "
                alt="Sponsor Logo: Nexvelt Technologies"
              >

              <div class="text-gray-9">
                Nexvelt Technologies
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
