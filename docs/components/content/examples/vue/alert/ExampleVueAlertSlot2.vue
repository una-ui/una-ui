<template>
  <NAlert alert="soft-error" icon>
    <template #title>
      There were some errors with your submission test
    </template>
    <template #description>
      <ul role="list" class="list-disc pl-5 space-y-1">
        <li>The team name must be a string.</li>
        <li>The team name must be at least 1 character.</li>
      </ul>
    </template>
  </NAlert>
</template>
