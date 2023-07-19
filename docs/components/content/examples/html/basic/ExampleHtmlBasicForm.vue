<template>
  <form class="flex flex-col gap-y-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div form-group="wrapper">
        <label for="_firstname" form-group="label-base">Firstname </label>
        <input id="_firstname" input="outline" placeholder="Firstname">
      </div>

      <div form-group="wrapper">
        <label for="_lastname" form-group="label-base">Lastname </label>
        <input id="_lastname" input="outline" placeholder="Lastname">
      </div>
    </div>

    <div class="flex flex-col flex-col-reverse gap-4 sm:flex-row sm:justify-end">
      <button type="button" btn="~ solid-white">
        Cancel
      </button>
      <button type="button" btn="~ solid">
        Submit
      </button>
    </div>
  </form>
</template>
