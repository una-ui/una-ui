---
description: 'A vertically stacked set of interactive headings that each reveal a section of content.'
---

Accordion inherits all props and slots from [NButton](button).

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAccordionBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionBasic.vue
::
:::

## Mounted

> ⚡ By default, the accordion's content is not rendered until it is opened for performance reasons. To render the content when the page loads, even if the accordion is closed for SEO purposes, use the `mounted` prop.

`mounted` - allows you to set the mount state of all items.

`item.mount` - allows you to set the mount state of a specific item. This will override the `mounted` prop.

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

## Multiple

`multiple` - allows you to expand multiple items at the same time.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAccordionMultiple
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionMultiple.vue
::
:::

## Default open

`default-open` - opens all items by default.

`item.defaultOpen` - allows you to control the default open state of a specific item.

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

## Color

Since we use the [NButton](button) component for the accordion label, you can use the `btn` prop to change the color of the label. See [NButton](button) for more information.

::alert{type="info"}
`btn="text-{color}"` prop is basically from [NButton](button) component. You can use it to change the color of the label.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAccordionColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionColor.vue
::
:::


## Icon

`leading` - allows you to add leading icon to the label.

`item.leading` - allows you to add leading icon to the label of a specific item.

`trailingOpen` - allows you to customize trailing open icon.

`trailingClose` - allows you to customize trailing close icon.

::alert{type="success"}
  If no `trailing` icon is given, it will be used for both open and close states and will animate upside down automatically.
::

::alert{type="info"}
By default, we use the `heroicons` and `tabler` for the icons, you can use any icon provided by `Iconify` through [icones](https://icones.js.org/), refer to [configuration](/#getting-started/configuration) for more information.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAccordionIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionIcon.vue
::
:::

## Reverse

`reverse` - allows you to switch the position of the trailing and leading icons.

`item.reverse` - allows you to switch the position of the trailing and leading icons of a specific item.

::alert{type="info"}
`reverse` prop is basically from [NButton](button) component. You can use it to switch the position of the trailing and leading icons.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAccordionReverse
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionReverse.vue
::
:::

## Unstyle mode

`unstyle` - removes the default border, padding, and divider of the accordion.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAccordionUnstyle
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionUnstyle.vue
::
:::

## Custom

> Customize the accordion with your own styles using `una` preset configuration.

::alert{type="success"}
  You can globally customize the accordion preset if want to have a different default style. See [Configuration](/#getting-started/configuration) section for more details.
::

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

::alert{type="info"}
If you have a more complex content, you can use slots to customize the accordion.
::

`label` - allows you to customize the label of the accordion.

`content` - allows you to customize the content of the accordion.

| Slot props | Description                                       |
| ---------- | ------------------------------------------------- |
| `index`    | allows you to access index of the item.           |
| `item`     | allows you to access the item properties.         |
| `open`     | allows you to access the open state of the item.  |
| `close`    | allows you to access the close state of the item. |

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

## Props
@@@ ../packages/nuxt/src/runtime/types/accordion.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/accordion.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Accordion.vue


