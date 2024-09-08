---
description: 'NLabel - Renders an accessible label associated with controls.'
---

# 🟢 Label

---

## Basic

Renders an accessible label associated with controls.

::alert{type="info"}
The `NLabel` component is used already in different components like [Checkbox](checkbox), [Radio](radio), [FormGroup](form-group), etc. but can also be used as a standalone component if you want more customization.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueLabelBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/label/ExampleVueLabelBasic.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/label.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/label.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Label.vue
