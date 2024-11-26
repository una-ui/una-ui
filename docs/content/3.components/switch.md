---
description: 'A control that allows the user to toggle between checked and not checked.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/Switch.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/switch
    target: _blank
---

## Examples

### Basic

| Prop             | Default | Type      | Description                                                           |
| ---------------- | ------- | --------- | --------------------------------------------------------------------- |
| `checked`        | -       | `boolean` | The controlled state of the switch. Can be bind as `v-model:checked`. |
| `defaultChecked` | -       | `boolean` | The uncontrolled state of the switch.                                 |
| `value`          | `on`    | `string`  | The value of the switch.                                              |
| `disabled`       | `false` | `boolean` | When `true`, prevents the user from interacting with the switch.      |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchBasic.vue
::
:::

:read-more{to="https://www.radix-vue.com/components/switch#root" title="Radix Switch Root API" target="_blank"}

### Form Group

You can use the `switch` component inside the `form-group` component, or you can use it with the `label` component.

::alert{type="info"}
  Notice that when you click on the label, the switch gets toggled. 
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchLabel
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchLabel.vue
::
:::

:read-more{to="/components/form-group" title="Form-group component" target="_blank"}

:read-more{to="/components/label" title="Label component" target="_blank"}

### Color

| Prop     | Default   | Type     | Description                     |
| -------- | --------- | -------- | ------------------------------- |
| `switch` | `primary` | `string` | Change the color of the switch. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchColor.vue
::
:::

### Size

Adjust the switch size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop   | Default | Type     | Description                    |
| ------ | ------- | -------- | ------------------------------ |
| `size` | `md`    | `string` | Change the size of the switch. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchSize.vue
::
:::

### Icon

Configure the switch icon using the following props.

| Prop            | Default | Type     | Description                                      |
| --------------- | ------- | -------- | ------------------------------------------------ |
| `icon`          | -       | `string` | Add an icon that appears regardless of state.    |
| `checkedIcon`   | -       | `string` | Add an icon that appears when the switch is on.  |
| `uncheckedIcon` | -       | `string` | Add an icon that appears when the switch is off. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchIcon.vue
::
:::

### Loading

Set the switch to loading state.

| Prop     | Default | Type     | Description                 |
| -------- | ------- | -------- | --------------------------- |
| `loading` | -       | `boolean` | Set the switch to loading. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchLoading
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchLoading.vue
::
:::

### Customization

Configure the progress using the `una` prop and utility classes.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchCustom
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchCustom.vue
::
:::

:read-more{to="#props" title="Component Props API"}

:read-more{to="#presets" title="Component Presets"}

### Slots

| Name           | Props     | Description                                                             |
| -------------- | --------- | ----------------------------------------------------------------------- |
| `icon`         | `checked` | Customizable icons for the switch in both checked and unchecked states. |
| `loading-icon` | `checked` | The loading icon slot.                                                  |

## Presets

@@@ ../packages/preset/src/_shortcuts/switch.ts [shortcuts/switch.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/switch.ts [types/switch.ts]

## Components

:::CodeGroup
::div{label="Switch.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/Switch.vue
::
:::
