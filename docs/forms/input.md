---
title: Input 🟡
description: Inputs are used to collect data from the user.
---

# Input 🟡

Inputs are used to collect data from the user.

:::warning
Work in progress - this component is not yet ready for use.
:::

## Basic

`NVInput` - the basic input

<AppExemplar>
  <ExampleVueInputBasic/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/Basic.vue
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
<<< @/.vitepress/theme/components/examples/vue/input/Color.vue
:::

## Variant

`input="{variant}"` - change the variant of the input outline.

`input="{variant}-{color}"` - change the variant and color of the input outline.

<AppExemplar>
  <ExampleVueInputVariant/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/Variant.vue
:::

## Size

`input="solid-lime {size}"` - change the size of the input outline.

<AppExemplar>
  <ExampleVueInputSize/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/Size.vue
:::

## Icon

`trailing="{icon}"` - add a trailing icon to the input outline.

`leading="{icon}"` - add a leading icon to the input outline.

::: tip
You can use any icon provided by the [Icones](https://icones.js.org/) library.
:::

<AppExemplar>
  <ExampleVueInputIcon/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/Icon.vue
:::

## Loading

`loading` - add a loading icon to the input outline.

<AppExemplar>
  <ExampleVueInputLoading/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/Loading.vue{26}
:::

## Status

`status="{status}"` - change the status of the input outline.

<AppExemplar>
  <ExampleVueInputStatus/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/Status.vue
:::

`disabled` - disable the input outline.

`readonly` - make the input outline readonly.

<AppExemplar>
  <ExampleVueInputDisabled/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/Disabled.vue
:::

## Slots

### Leading

<AppExemplar>
  <ExampleVueInputLeadingSlot/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/LeadingSlot.vue
:::

### Trailing

<AppExemplar>
  <ExampleVueInputTrailingSlot/>
</AppExemplar>

::: details Preview the code
<<< @/.vitepress/theme/components/examples/vue/input/TrailingSlot.vue
:::

## Props

| Name    | Description        | Type     | Required | Default           |
| ------- | ------------------ | -------- | -------- | ----------------- |
| `input` | The input variant. | `string` | `false`  | `outline-primary` |

## Presets
