<template>
  <div class="h-28 flex items-center justify-around">
    <NTooltip
      tooltip="primary"
      content="The color is primary"
    >
      <NButton>
        Hover
      </NButton>
    </NTooltip>

    <NTooltip
      tooltip="gray"
      content="The color is gray"
    >
      <NButton btn="solid-gray">
        Hover
      </NButton>
    </NTooltip>

    <NTooltip
      tooltip="green"
      content="The color is green"
    >
      <NButton btn="ghost-green">
        Hover
      </NButton>
    </NTooltip>
  </div>
</template>
