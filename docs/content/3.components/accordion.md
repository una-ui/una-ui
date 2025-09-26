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

| Prop                 | Default | Type      | Description                                                                                       |
| -------------------- | ------- | --------- | ------------------------------------------------------------------------------------------------- |
| `unmountOnHide`      | `true`  | `boolean` | Set to `false` to keep the content of the accordion mounted, even if the accordion is closed.     |
| `item.unmountOnHide` | `true`  | `boolean` | Like `unmountOnHide`, but applies to a specific item. Has no effect if `unmountOnHide` is `false` |

> ⚡ By default, the accordion's content is not rendered until it is opened for performance reasons. To render the content when the page loads, even if the accordion is closed for SEO purposes, set the `unmountOnHide` prop to `false`.

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

| Prop   | Default  | Type                     | Description                                      |
| ------ | -------- | ------------------------ | ------------------------------------------------ |
| `type` | `single` | `'single' \| 'multiple'` | Expand a single item or multiple items at a time |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionMultiple
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionMultiple.vue
::
:::

### Default open

| Prop           | Default | Type                 | Description                                             |
| -------------- | ------- | -------------------- | ------------------------------------------------------- |
| `defaultValue` | -       | `string \| string[]` | Open the specified items whose value matches the input. |

::alert{type="warning"}
Use `type="multiple"` prop when using `default-value` to open multiple items by default.
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

Since we use the [Button](button) component for the accordion label, you can use `_accordionTrigger` prop to pass button props, like `btn` to change the color of the label. See [Button](button) for more information.

::alert{type="info"}
`:_accordion-trigger="{ btn: 'text-{color}' }"` prop is basically from [Button](button) component. You can use it to change the color of the label.
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

| Prop                              | Default | Type     | Description                                     |
| --------------------------------- | ------- | -------- | ----------------------------------------------- |
| `_accordionTrigger.leading`       | -       | `string` | Set a custom leading icon for the accordion.    |
| `_accordionTrigger.trailing`      | -       | `string` | Set a custom trailing icon for the accordion.   |
| `item._accordionTrigger.leading`  | -       | `string` | Set a custom leading icon for a specific item.  |
| `item._accordionTrigger.trailing` | -       | `string` | Set a custom trailing icon for a specific item. |

::alert{type="success"}
If no `trailing` icon is given, it will be used for both open and close states and will animate upside down automatically.
::

::alert{type="info"}
Use the unocss variants `group-data-[state=open]/accordion-trigger` and `group-data-[state=closed]/accordion-trigger` to select the icon based on the open/close state of the accordion item.
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

| Prop                             | Default | Type      | Description                                                               |
| -------------------------------- | ------- | --------- | ------------------------------------------------------------------------- |
| `_accordionTrigger.reverse`      | -       | `boolean` | Switch the position of the trailing and leading icons.                    |
| `item._accordionTrigger.reverse` | -       | `boolean` | Switch the position of the trailing and leading icons of a specific item. |

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

### Variant

| Prop        | Default          | Type        | Description                   |
| ----------- | ---------------- | ----------- | ----------------------------- |
| `accordion` | `border divider` | `{variant}` | The variant of the accordion. |

| Variant   | Description                               |
| --------- | ----------------------------------------- |
| `border`  | A bordered accordion.                     |
| `divider` | An accordion with dividers between items. |
| `~`       | An unstyled accordion.                    |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAccordionUnstyle
::
::div{label="Code"}
@@@ ./components/content/examples/vue/accordion/ExampleVueAccordionUnstyle.vue
::
:::

## Customization

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

| Name      | Props                   | Description                                        |
| --------- | ----------------------- | -------------------------------------------------- |
| `default` | `{ modelValue }`        | Fill with `AccordionItem` components               |
| `item`    | `{ open, item, index }` | The item of the accordion.                         |
| `header`  | `{ open, item, index }` | The header of the accordion containing the trigger |
| `trigger` | `{ open, item, index }` | The trigger button.                                |
| `content` | `{ open, item, index }` | The content of the accordion.                      |

| Slot prop    | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| `modelValue` | the value of the item(s) currently open                                                   |
| `open`       | allows you to access the open state of the item.                                          |
| `item`       | allows you to access the item object.                                                     |
| `index`      | allows you to access the index of the item. To identify items, prefer using `item.value`. |

::alert{type="info"}
All slots can be prefixed with the value of an item to target a specific item. For example, to customize the content of the item with the value `1`, use the `1-content` slot.
::

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
@@@ ../packages/nuxt/src/runtime/components/elements/accordion/Accordion.vue
::
::div{label="AccordionItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/accordion/AccordionItem.vue
::
::div{label="AccordionHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/accordion/AccordionHeader.vue
::
::div{label="AccordionTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/accordion/AccordionTrigger.vue
::
::div{label="AccordionContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/accordion/AccordionContent.vue
::
:::
