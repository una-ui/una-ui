---
description: 'Displays a button or a component that looks like a button.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Button.vue
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type     | Description              |
| ------- | ------- | -------- | ------------------------ |
| `label` | -       | `string` | The label of the button. |

::alert{type="info"}
You can also use default slot to set the button label. Refer to [slots](#slots) for more information.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonUsage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonUsage.vue
::
:::

### Variant

| Prop  | Default | Type        | Description                |
| ----- | ------- | ----------- | -------------------------- |
| `btn` | `solid` | `{variant}` | The variant of the button. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `solid`   | The default variant.        |
| `outline` | The outline variant.        |
| `soft`    | The soft variant.           |
| `ghost`   | The ghost variant.          |
| `link`    | The link variant.           |
| `text`    | The text variant.           |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonVariant.vue
::
:::

### Color

| Prop  | Default             | Type                | Description              |
| ----- | ------------------- | ------------------- | ------------------------ |
| `btn` | `{variant}-primary` | `{variant}-{color}` | The color of the button. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonColor.vue
::
:::

### Size

| Prop   | Default | Type     | Description                                  |
| ------ | ------- | -------- | -------------------------------------------- |
| `size` | `sm`    | `string` | Allows you to change the size of the button. |

> 🚀 Adjust input size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

::alert{type="warning"}
The **padding**, **icons**, and **text-size** of the input scale are dynamically adjusted based on the **size** property. To customize the **text-size** and **padding** simultaneously, you can use utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonSize.vue
::
:::

### Rounded

| Prop      | Default | Type     | Description                             |
| --------- | ------- | -------- | --------------------------------------- |
| `rounded` | `md`    | `string` | Set the button to have rounded corners. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonRounded
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonRounded.vue
::
:::

### Square

| Prop     | Default | Type                | Description                                                                                                      |
| -------- | ------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `square` | `true`  | `boolean`, `string` | Set the button to have the same width and height. If you provide empty value or `true`, it will provide `2.5em`. |

::alert{type="info"}
You can also provide a custom value to the `square` prop to set the width and height of the button, e.g., `square="3em"`.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonSquare
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonSquare.vue
::
:::

### Icon

| Prop       | Default | Type      | Description                      |
| ---------- | ------- | --------- | -------------------------------- |
| `icon`     | -       | `boolean` | Force the `label` to be an icon. |
| `leading`  | -       | `string`  | Display leading icon.            |
| `trailing` | -       | `string`  | Display trailing icon.           |

:read-more{to="/components/icon" title="Icon component" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonIcon.vue
::
:::

### Link

| Prop | Default | Type     | Description              |
| ---- | ------- | -------- | ------------------------ |
| `to` | -       | `string` | The link to navigate to. |

:read-more{to="/components/link" title="Link component" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonLink
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLink.vue
::
:::

### Block

| Prop    | Default | Type      | Description                        |
| ------- | ------- | --------- | ---------------------------------- |
| `block` | -       | `boolean` | Set the button to have full width. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonBlock
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonBlock.vue
::
:::

### Disabled

| Prop      | Default | Type      | Description              |
| --------- | ------- | --------- | ------------------------ |
| `disabled` | -       | `boolean` | Set the button to disabled. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonDisabled.vue
::
:::

### Loading

| Prop               | Default | Type      | Description                        |
| ------------------ | ------- | --------- | ---------------------------------- |
| `loading`          | -       | `boolean` | Set the button to loading state.   |
| `loading-placement` | `leading` | `leading`, `trailing`, `label` | Set the loading icon placement. |

::alert{type="info"}
  By default, the disabled state is triggered when the button is loading.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonLoading
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLoading.vue
::
:::

### Slots

#### Default

| Name      | Props | Description       |
| --------- | ----- | ----------------- |
| `default` | -     | The button label. |

#### Leading

| Name      | Props | Description       |
| --------- | ----- | ----------------- |
| `leading` | -     | The leading icon. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonLeadingSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLeadingSlot.vue
::
:::

#### Trailing

| Name       | Props | Description        |
| ---------- | ----- | ------------------ |
| `trailing` | -     | The trailing icon. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonTrailingSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonTrailingSlot.vue
::
:::

#### Loading

| Name       | Props | Description        |
| ---------- | ----- | ------------------ |
| `loading`  | -     | The loading icon.  |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueButtonLoadingSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLoadingSlot.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/btn.ts [shortcuts/btn.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/button.ts [types/button.ts]

## Components

:::CodeGroup
::div{label="Button.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Button.vue
::
:::
