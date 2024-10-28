---
description: 'NSwitch component - used to create a switch input.'
---

# Switch

::list{type="primary"}
- Full keyboard navigation.
- Can be controlled or uncontrolled.
::

---

## Basic

`NSwitch` is used to create a switch input. For more information about the APIs, please refer to the [Radix-UI Switch](https://radix-ui.com/primitives/docs/switch){target="_blank"} documentation.

| Props            | Type      | Default | Description                                                           |
| ---------------- | --------- | ------- | --------------------------------------------------------------------- |
| `checked`        | `boolean` | -       | The controlled state of the switch. Can be bind as `v-model:checked`. |
| `defaultChecked` | `boolean` | -       | The uncontrolled state of the switch.                                 |
| `value`          | `string`  | `on`    | The value of the switch.                                              |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchBasic.vue
::
:::

## Label

> You can use the `NFormGroup` component to create a label for the switch.

::alert{type="info"}
  Notice that when you click on the label, the switch gets toggled. Read more about the `NFormGroup` component [here](form-group).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchLabel
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchLabel.vue
::
:::

## Color

`switch="{color}"` - change the color of the switch.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchColor.vue
::
:::

## Size

`size="{size}"` - change the size of the switch.

> 🚀 You can freely adjust the size of the switch using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the switch scale depends on the `switch-size`. If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchSize.vue
::
:::

## Icon

`icon` - add an icon to the switch.

`checkedIcon` - add an icon for the on state.

`uncheckedIcon` - add an icon for the off state.  

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchIcon.vue
::
:::

## Disabled

`disabled` - disable the switch.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchDisabled.vue
::
:::

## Loading

`loading` - set the switch to loading state.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchLoading
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchLoading.vue
::
:::

## Customization

> You can customize the switch using the `una` prop and utility classes.

::alert{type="info"}
  You can also globally customize the switch preset if you want to have a different default style. See [Configuration](/#getting-started/configuration) section for more details.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSwitchCustom
::
::div{label="Code"}
@@@ ./components/content/examples/vue/switch/ExampleVueSwitchCustom.vue
::
:::

## Slots

> You can use the following slots to customize the switch.

| Name           | Description                                                             | Props     |
| -------------- | ----------------------------------------------------------------------- | --------- |
| `icon`         | Customizable icons for the switch in both checked and unchecked states. | `checked` |
| `loading-icon` | The loading icon slot.                                                  | `checked` |

## Props
@@@ ../packages/nuxt/src/runtime/types/switch.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/switch.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/forms/Switch.vue
