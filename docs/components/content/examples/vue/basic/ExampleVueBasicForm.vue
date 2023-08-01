<template>
  <form class="flex flex-col gap-y-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <NFormGroup label="Firstname">
        <NInput placeholder="Phojie" />
      </NFormGroup>

      <NFormGroup label="Lastname">
        <NInput placeholder="Rengel" />
      </NFormGroup>
    </div>

    <div class="flex flex-col flex-col-reverse gap-4 sm:flex-row sm:justify-end">
      <NButton label="Cancel" btn="solid-white" />
      <NButton label="Submit" btn="solid" />
    </div>
  </form>
</template>
