<template>
  <div class="flex flex-col space-y-4">
    <NPagination
      :total="100"
      :items-per-page="5"
    />

    <NPagination
      :total="100"
      :items-per-page="20"
    />
  </div>
</template>
