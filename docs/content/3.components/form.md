---
description: 'Building forms with VeeValidate and Zod.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/form.vue
    target: _blank
  - value: API reference
    to: https://vee-validate.logaretm.com/v4/guide/overview
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type     | Description                     |
| ------- | ------- | -------- | ------------------------------- |
| `label` | -       | `string` | Adds a label to the form field. |
| `name`  | -       | `string` | Adds a name to the form field.  |

::alert{type="info"}
Clicking the label focuses the input. We automatically add `for` to the label and `id` to the input. Override this by defining `for` and `id` manually.
::

> Building form with vee-validate and zod using FormField component.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueFormBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form/ExampleVueFormBasic.vue
::
:::

:read-more{to="label" title="Label component"}

### Required

| Prop       | Default | Type      | Description            |
| ---------- | ------- | --------- | ---------------------- |
| `required` | `false` | `boolean` | Adds `*` to the label. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueFormRequired
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form/ExampleVueFormRequired.vue
::
:::

### Description

| Prop          | Default | Type     | Description                           |
| ------------- | ------- | -------- | ------------------------------------- |
| `description` | -       | `string` | Adds a description to the form field. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueFormDescription
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form/ExampleVueFormDescription.vue
::
:::

### Hint

| Prop   | Default | Type     | Description                    |
| ------ | ------- | -------- | ------------------------------ |
| `hint` | -       | `string` | Adds a hint to the form field. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueFormHint
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form/ExampleVueFormHint.vue
::
:::

### Message

| Prop      | Default | Type     | Description                    |
| --------- | ------- | -------- | ------------------------------ |
| `message` | -       | `string` | Sets the form field's message. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueFormMessage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form/ExampleVueFormMessage.vue
::
:::

### Status

| Prop     | Default | Type                                              | Description                   |
| -------- | ------- | ------------------------------------------------- | ----------------------------- |
| `status` | -       | `info`,`success`, `warning`, `error`, `undefined` | Sets the form field's status. |

::alert{type="info"}
Notice that when you change the `status` prop, the `message` prop and the child component `status` prop are automatically updated.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueFormStatus
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form/ExampleVueFormStatus.vue
::
:::

### Slots

| Name          | Props | Description                                                        |
| ------------- | ----- | ------------------------------------------------------------------ |
| `default`     | -     | The default slot of the form field, refer [Basic](#basic) section. |
| `top`         | -     | The top section of the form field.                                 |
| `bottom`      | -     | The bottom section of the form field.                              |
| `label`       | -     | The label slot of the form field.                                  |
| `description` | -     | The description slot of the form field.                            |
| `hint`        | -     | The hint slot of the form field.                                   |
| `message`     | -     | The message slot of the form field.                                |

## Props

@@@ ../packages/nuxt/src/runtime/types/form.ts [types/form.ts]

## Presets

@@@ ../packages/preset/src/_shortcuts/form.ts [shortcuts/form.ts]

## Components

:::CodeGroup
::div{label="FormField.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/form/FormField.vue

::
::div{label="FormControl.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/form/FormControl.vue

::
::div{label="FormDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/form/FormDescription.vue

::
::div{label="FormHint.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/form/FormMessage.vue

::
::div{label="FormLabel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/form/FormLabel.vue

::
::div{label="FormMessage.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/form/FormItem.vue
::
:::
