<template>
  <form class="flex flex-col gap-y-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div form-group>
        <label for="firstname" form-group="label-base">Firstname </label>
        <input id="firstname" input="outline" placeholder="Firstname">
      </div>

      <div form-group>
        <label for="lastname" form-group="label-base">Lastname </label>
        <input id="lastname" input="outline" placeholder="Lastname">
      </div>
    </div>

    <div class="flex flex-col flex-col-reverse gap-4 sm:flex-row sm:justify-end">
      <button type="button" btn="solid-white">
        Cancel
      </button>
      <button type="button" btn="solid">
        Submit
      </button>
    </div>
  </form>
</template>
