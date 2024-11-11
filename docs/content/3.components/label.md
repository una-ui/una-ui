---
description: 'Renders an accessible label associated with controls.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Label.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/label
    target: _blank
---

## Examples

### Basic

::alert{type="success"}
The **Label** component is used already in different components like [Checkbox](checkbox), [Radio](radio), [FormGroup](form-group), etc. but can also be used as a standalone component if you want more customization.
::

| Prop    | Default   | Type                                                                                                 |
| ------- | --------- | ---------------------------------------------------------------------------------------------------- |
| as      | `label`   | AsTag                                                                                                | Component |
| asChild | `boolean` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
| for     | `string`  | The id of the element the label is associated with.                                                  |

:read-more{to="https://www.radix-vue.com/components/label#root" title="Radix Label Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueLabelBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/label/ExampleVueLabelBasic.vue
::
:::

## Slots

| Name      | Props | Description               |
| --------- | ----- | ------------------------- |
| `default` | -     | The content of the label. |

## Props
@@@ ../packages/nuxt/src/runtime/types/label.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/label.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Label.vue
