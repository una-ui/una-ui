---
description: 'A vertically stacked set of interactive headings that each reveal a section of content.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Accordion.vue
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type    | Description              |
| ------- | ------- | ------- | ------------------------ |
| `items` | -       | `array` | Set the accordion items. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionBasic.vue
::
:::

### Mounted

| Prop         | Default | Type      | Description                                                                                |
| ------------ | ------- | --------- | ------------------------------------------------------------------------------------------ |
| `mounted`    | `false` | `boolean` | Mount the content of the accordion when the page loads, even if the accordion is closed.   |
| `item.mount` | `false` | `boolean` | Mount the content of a specific item when the page loads, even if the accordion is closed. |

> ⚡ By default, the accordion's content is not rendered until it is opened for performance reasons. To render the content when the page loads, even if the accordion is closed for SEO purposes, use the `mounted` prop.

::alert{type="warning"}
If you have a lot of accordion items, it is not recommended to use the `mounted` prop because it affects the performance of the page, instead use the `item.mount` prop to mount the content of a specific item if needed.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionMounted
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionMounted.vue
::
:::

### Multiple

| Prop       | Default | Type      | Description            |
| ---------- | ------- | --------- | ---------------------- |
| `multiple` | `false` | `boolean` | Expand multiple items. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionMultiple
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionMultiple.vue
::
:::

### Default open

| Prop               | Default | Type      | Description                      |
| ------------------ | ------- | --------- | -------------------------------- |
| `defaultOpen`      | `false` | `boolean` | Open all items by default.       |
| `item.defaultOpen` | `false` | `boolean` | Open a specific item by default. |

::alert{type="warning"}
Use `multiple` prop when using `default-open` to open multiple items by default.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionDefaultOpen
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionDefaultOpen.vue
::
:::

### Color

Since we use the [Button](button) component for the accordion label, you can use the `btn` prop to change the color of the label. See [Button](button) for more information.

::alert{type="info"}
`btn="text-{color}"` prop is basically from [Button](button) component. You can use it to change the color of the label.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionColor.vue
::
:::

### Icon

| Prop            | Default | Type     | Description                                       |
| --------------- | ------- | -------- | ------------------------------------------------- |
| `leading`       | -       | `string` | Add leading icon to the label.                    |
| `item.leading`  | -       | `string` | Add leading icon to the label of a specific item. |
| `trailingOpen`  | -       | `string` | Customize trailing open icon.                     |
| `trailingClose` | -       | `string` | Customize trailing close icon.                    |

::alert{type="success"}
If no `trailing` icon is given, it will be used for both open and close states and will animate upside down automatically.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionIcon.vue
::
:::

:read-more{to="/components/icon" title="Icon component" target="_blank"}

### Reverse

| Prop           | Default | Type      | Description                                                               |
| -------------- | ------- | --------- | ------------------------------------------------------------------------- |
| `reverse`      | -       | `boolean` | Switch the position of the trailing and leading icons.                    |
| `item.reverse` | -       | `boolean` | Switch the position of the trailing and leading icons of a specific item. |

::alert{type="info"}
`reverse` prop is basically from [Button](button) component. You can use it to switch the position of the trailing and leading icons.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionReverse
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionReverse.vue
::
:::

### Unstyle mode

| Prop      | Default | Type      | Description                                                       |
| --------- | ------- | --------- | ----------------------------------------------------------------- |
| `unstyle` | -       | `boolean` | Remove the default border, padding, and divider of the accordion. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionUnstyle
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionUnstyle.vue
::
:::

### Customization

> You can customize the accordion using the `una` prop and utility classes.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionCustom1
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionCustom1.vue
::
:::

---

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionCustom2
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionCustom2.vue
::
:::

---

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionCustom3
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionCustom3.vue
::
:::

## Slots

| Name      | Props    | Description                   |
| --------- | -------- | ----------------------------- |
| `label`   | `{prop}` | The label of the accordion.   |
| `content` | `{prop}` | The content of the accordion. |

| Slot prop | Description                                       |
| --------- | ------------------------------------------------- |
| `index`   | allows you to access index of the item.           |
| `item`    | allows you to access the item properties.         |
| `open`    | allows you to access the open state of the item.  |
| `close`   | allows you to access the close state of the item. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionSlot1
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionSlot1.vue
::
:::

---

`index number` - allows you to customize the specific item of the accordion. See the example below.

::alert{type="warning"}
If you want to customize the content of a specific item, make sure not to provide a `content` slot.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionSlot2
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionSlot2.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/accordion.ts [shortcuts/accordion.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/accordion.ts [types/accordion.ts]

## Components

:::CodeGroup
::div{label="Accordion.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Accordion.vue
::
:::
