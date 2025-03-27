<template>
  <form class="flex flex-col gap-y-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <NFormField name="firstname" label="Firstname">
        <NInput placeholder="Phojie" />
      </NFormField>

      <NFormField name="lastname" label="Lastname">
        <NInput placeholder="Rengel" />
      </NFormField>
    </div>

    <div class="flex flex-col flex-col-reverse gap-4 sm:flex-row sm:justify-end">
      <NButton label="Cancel" btn="solid-white" />
      <NButton label="Submit" btn="solid" />
    </div>
  </form>
</template>
