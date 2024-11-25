---
description: 'A versatile wrapper for various form components such as `Input`, `Textarea`, `Select`, and more. It offers a comprehensive set of features, including label, description, hint, message, status, and others.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/forms/FormGroup.vue
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type     | Description                     |
| ------- | ------- | -------- | ------------------------------- |
| `label` | -       | `string` | Adds a label to the form group. |
| `id`    | -       | `string` | Sets the form group's id.       |
| `for`   | -       | `string` | Sets the label's for attribute. |

::alert{type="info"}
  Clicking the label focuses the input. We automatically add `for` to the label and `id` to the input. Override this by defining `for` and `id` manually.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupUsage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupUsage.vue
::
:::

:read-more{to="label" title="Label component"}

### Required

| Prop       | Default | Type      | Description            |
| ---------- | ------- | --------- | ---------------------- |
| `required` | `false` | `boolean` | Adds `*` to the label. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupRequired
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupRequired.vue
::
:::

### Description

| Prop          | Default | Type     | Description                           |
| ------------- | ------- | -------- | ------------------------------------- |
| `description` | -       | `string` | Adds a description to the form group. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupDescription
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupDescription.vue
::
:::

### Hint

| Prop   | Default | Type     | Description                    |
| ------ | ------- | -------- | ------------------------------ |
| `hint` | -       | `string` | Adds a hint to the form group. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupHint
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupHint.vue
::
:::

### Message

| Prop      | Default | Type     | Description                    |
| --------- | ------- | -------- | ------------------------------ |
| `message` | -       | `string` | Sets the form group's message. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupMessage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupMessage.vue
::
:::

### Status

| Prop     | Default | Type                                              | Description                   |
| -------- | ------- | ------------------------------------------------- | ----------------------------- |
| `status` | -       | `info`,`success`, `warning`, `error`, `undefined` | Sets the form group's status. |

::alert{type="info"}
Notice that when you change the `status` prop, the `message` prop and the child component `status` prop are automatically updated.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupStatus
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupStatus.vue
::
:::

## Counter

| Prop      | Default | Type     | Description                       |
| --------- | ------- | -------- | --------------------------------- |
| `counter` | -       | `object` | Enables the form group's counter. |

| Counter | Default | Type     | Description                      |
| ------- | ------- | -------- | -------------------------------- |
| `value` | -       | `string` | Sets the counter value.          |
| `max`   | -       | `number` | Sets the maximum counter number. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupCounter
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupCounter.vue
::  
:::

### Slots

| Name          | Props | Description                                                        |
| ------------- | ----- | ------------------------------------------------------------------ |
| `default`     | -     | The default slot of the form group, refer [Basic](#basic) section. |
| `top`         | -     | The top section of the form group.                                 |
| `bottom`      | -     | The bottom section of the form group.                              |
| `label`       | -     | The label slot of the form group.                                  |
| `description` | -     | The description slot of the form group.                            |
| `hint`        | -     | The hint slot of the form group.                                   |
| `message`     | -     | The message slot of the form group.                                |
| `counter`     | -     | The counter slot of the form group.                                |

## Props

@@@ ../packages/nuxt/src/runtime/types/form-group.ts [types/form-group.ts]

## Presets

@@@ ../packages/preset/src/_shortcuts/form-group.ts [shortcuts/form-group.ts]

## Components

:::CodeGroup
::div{label="FormGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/FormGroup.vue 
::
:::
