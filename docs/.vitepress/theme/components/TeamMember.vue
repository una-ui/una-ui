<script setup lang="ts">
import {
  VPTeamMembers,
  VPTeamPage,
  VPTeamPageSection,
  VPTeamPageTitle,
} from 'vitepress/theme'
import { sponsorMembers, teamMembers } from '../../contributors'
</script>

<template>
  <VPTeamPage class="mt-20 vp">
    <VPTeamPageTitle>
      <template #title>
        <span class="text-3xl md:px-30 border-solid border-t border-$vp-c-brand-light py-20">
          Meet The Team
        </span>
      </template>
      <template #lead>
        NexveltUI is a community-driven project with people from all over the world.
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" class="vp-doc" :members="teamMembers" />
    <VPTeamPageSection>
      <template #title>
        Partners
      </template>
      <template #lead>
        NexveltUI is free and open source, made possible by wonderful sponsors.
      </template>
      <template #members>
        <VPTeamMembers size="medium" class="vp-doc" :members="sponsorMembers" />
      </template>
    </VPTeamPageSection>
  </VPTeamPage>
</template>
