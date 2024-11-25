---
description: 'Indicates input that is typically entered via keyboard.'
badges:
  - value: Github
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Kbd.vue
    target: _blank
---

## Examples

### Basic

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdBasic.vue
::
:::

### Variant

| Prop  | Default | Type        | Description             |
| ----- | ------- | ----------- | ----------------------- |
| `kbd` | `solid` | `{variant}` | The variant of the kbd. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `solid`   | The default variant.        |
| `outline` | The outline variant.        |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdVariant.vue
::
:::

### Color

| Prop  | Default          | Type                | Description           |
| ----- | ---------------- | ------------------- | --------------------- |
| `kbd` | `{variant}-gray` | `{variant}-{color}` | The color of the kbd. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdColor.vue
::
:::

### Size

| Prop   | Default | Type     | Description          |
| ------ | ------- | -------- | -------------------- |
| `size` | `md`    | `string` | The size of the kbd. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdSize.vue
::
:::

### Integration

`NKbd` can be used with other components to create more complex elements e.g:

- can be used with `NButton` to create a button that is triggered by a keyboard shortcut.
- can be used with `NInput` to create an input that is triggered by a keyboard shortcut.

::alert{type="info"}
**size** prop is automatically inherited from the parent component when used with other components.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdIntegration
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdIntegration.vue
::
:::

## Slots

| Name      | Props | Description       |
| --------- | ----- | ----------------- |
| `default` | -     | The content slot. |

### Props

@@@ ../packages/nuxt/src/runtime/types/kbd.ts [types/kbd.ts]

:read-more{to="/components/kbd#props" title="Kbd component props" target="_blank"}

### Presets

@@@ ../packages/preset/src/_shortcuts/kbd.ts [shortcuts/kbd.ts]

:read-more{to="/components/kbd#presets" title="Kbd component presets" target="_blank"}

### Components

:::CodeGroup
::div{label="Kbd.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Kbd.vue

::
:::
