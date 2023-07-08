---
title: Input 🔴
description: 
---

# Input 🔴

:::warning
Work in progress - this component is not yet ready for use.
:::

## Basic
`input="outline"` - add basic outline to the input.

<AppExemplar>
  <NVInput
    type="email"
    input="outline"
    placeholder="Enter your email address"
  />
</AppExemplar>

::: details Preview the code
  <<< @/.vitepress/theme/components/examples/vue/input/Basic.vue [Vue]
:::

## Color
`input="outline-{color}"` - change the color of the input outline.

::: info
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) color palette, the default is `primary`. You can also add your own colors to the palette through the [Unocss CSS configuration file](https://unocss.dev/guide/config-file).
:::

<AppExemplar>
  <ExampleVueInputColor/>
</AppExemplar>

::: details Preview the code
  <<< @/.vitepress/theme/components/examples/vue/input/Color.vue [Vue]
:::

## Variant
`input="{variant}"` - change the variant of the input outline.

`input="{variant}-{color}"` - change the variant and color of the input outline.

<AppExemplar>
  <ExampleVueInputVariant/>
</AppExemplar>

::: details Preview the code
  <<< @/.vitepress/theme/components/examples/vue/input/Variant.vue [Vue]
:::

## Size
`input="solid-lime {size}"` - change the size of the input outline.

<AppExemplar>
  <ExampleVueInputSize/>
</AppExemplar>

::: details Preview the code
  <<< @/.vitepress/theme/components/examples/vue/input/Size.vue [Vue]
:::

## Icon
`trailing="{icon}"` - add a trailing icon to the input outline.

`leading="{icon}"` - add a leading icon to the input outline.

<AppExemplar>
  <ExampleVueInputIcon/>
</AppExemplar>

::: details Preview the code
  <<< @/.vitepress/theme/components/examples/vue/input/Icon.vue [Vue]
:::


## Status
`status="{status}"` - change the status of the input outline.

<AppExemplar>
  <ExampleVueInputStatus/>
</AppExemplar>

::: details Preview the code
  <<< @/.vitepress/theme/components/examples/vue/input/Status.vue [Vue]
:::
