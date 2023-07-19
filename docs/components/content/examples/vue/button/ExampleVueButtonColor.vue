<template>
  <div flex="~ col" gap-4>
    <div flex="~ col" gap-4>
      <div grid="~ cols-2 lg:cols-3" gap-4>
        <NButton
          label="solid-primary"
          btn="solid-primary"
        />
        <NButton
          label="outline-lime"
          btn="outline-lime"
        />
        <NButton
          label="link-yellow"
          btn="link-yellow"
        />
        <NButton
          label="soft-red"
          btn="soft-red"
        />
        <NButton
          label="ghost-orange"
          btn="ghost-orange"
        />
      </div>

      <div grid="~ cols-2 lg:cols-3" gap-4>
        <NButton
          label="solid-error"
          btn="solid-error"
        />
        <NButton
          label="outline-fuchsia"
          btn="outline-fuchsia"
        />
        <NButton
          label="link-success"
          btn="link-success"
        />
        <NButton
          label="soft-info"
          btn="soft-info"
        />
        <NButton
          label="ghost-warning"
          btn="ghost-warning"
        />
      </div>
    </div>

    <hr border="base">

    <div flex="~ col" gap-4>
      <div grid="~ cols-2 lg:cols-3" gap-2>
        <NButton
          label="solid-gray"
          btn="solid-gray"
        />
        <NButton
          label="ghost-gray"
          btn="ghost-gray"
        />
        <NButton
          label="link-gray"
          btn="link-gray"
        />
      </div>

      <div grid="~ cols-2 lg:cols-3" gap-2>
        <NButton
          label="solid-white"
          btn="solid-white"
        />
        <NButton
          label="ghost-white"
          btn="ghost-white"
        />
      </div>

      <div grid="~ cols-2 lg:cols-3" gap-2>
        <NButton
          label="solid-black"
          btn="solid-black"
        />
        <NButton
          label="link-black"
          btn="link-black"
        />
      </div>
    </div>
  </div>
</template>
