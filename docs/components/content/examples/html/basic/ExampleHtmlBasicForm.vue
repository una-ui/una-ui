<template>
  <form class="flex flex-col gap-y-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div form-field>
        <label for="firstname" form-field="label">Firstname </label>
        <input id="firstname" input="~ input outline" placeholder="Firstname">
      </div>

      <div form-field>
        <label for="lastname" form-field="label">Lastname </label>
        <input id="lastname" input="~ input outline" placeholder="Lastname">
      </div>
    </div>

    <div class="flex flex-col flex-col-reverse gap-4 sm:flex-row sm:justify-end">
      <button type="button" btn="~ solid-white" size="sm">
        Cancel
      </button>
      <button type="button" btn="~ solid" size="sm">
        Submit
      </button>
    </div>
  </form>
</template>
