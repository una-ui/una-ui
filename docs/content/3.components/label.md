---
description: 'Renders an accessible label associated with controls.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Label.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/label
    target: _blank
---

## Examples

### Basic

::alert{type="info"}
The **Label** component is used already in different components like [Checkbox](checkbox), [Radio](radio), [FormGroup](form-group), etc. but can also be used as a standalone component if you want more customization.
::

| Prop      | Default   | Type                 | Description                                                                                                                                       |
| --------- | --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`      | `label`   | `AsTag`, `Component` | The element or component this component should render as. Can be overwrite by asChild.                                                            |
| `asChild` | `boolean` | `boolean`            | Change the default rendered element for the one passed as a child, merging their props and behavior. Read our Composition guide for more details. |
| `for`     | `string`  | `string`             | The id of the element the label is associated with.                                                                                               |

:read-more{to="https://www.radix-vue.com/components/label#root" title="Radix Label Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueLabelBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/label/ExampleVueLabelBasic.vue
::
:::

### Slots

| Name      | Props | Description       |
| --------- | ----- | ----------------- |
| `default` | -     | The content slot. |

## Presets

@@@ ../packages/preset/src/_shortcuts/label.ts [shortcuts/label.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/label.ts [types/label.ts]

## Components

:::CodeGroup
::div{label="Label.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Label.vue

::
