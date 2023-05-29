<script setup>
import {
  VPTeamMembers,
  VPTeamPage,
  VPTeamPageSection,
  VPTeamPageTitle,
} from 'vitepress/theme'
import { sponsorMembers, teamMembers } from '../../contributors'
</script>

<template>
  <VPTeamPage class="mt-10">
    <VPTeamPageTitle>
      <template #title>
        <span class="text-3xl">
          Meet The Team
        </span>
      </template>
      <template #lead>
        NexveltUI is a community-driven project with people from all over the world.
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="teamMembers" />
    <VPTeamPageSection>
      <template #title>
        Partners
      </template>
      <template #lead>
        NexveltUI is free and open source, made possible by wonderful sponsors.
      </template>
      <template #members>
        <VPTeamMembers size="small" :members="sponsorMembers" />
      </template>
    </VPTeamPageSection>
  </VPTeamPage>
</template>
