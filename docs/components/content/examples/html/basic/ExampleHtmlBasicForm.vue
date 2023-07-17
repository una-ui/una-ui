<template>
  <form class="flex flex-col gap-y-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div form-group="wrapper">
        <label for="firstname" from-group="label-base">Firstname </label>

        <input id="firstname" input="outline" placeholder="Firstname">
      </div>

      <div form-group="wrapper">
        <label for="lastname" from-group="label-base">Lastname </label>

        <input id="lastname" input="outline" placeholder="Lastname">
      </div>
    </div>

    <div class="flex flex-col justify-end gap-4 sm:flex-row">
      <button type="button" btn="solid-white">
        Cancel
      </button>

      <button type="button" btn="solid">
        Submit
      </button>
    </div>
  </form>
</template>
