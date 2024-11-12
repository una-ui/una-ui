---
description: 'NFormGroup component - a wrapper component for `NInput`, `NTextarea`, `Select`, and other form components. It provides a label, description, hint, message, status and other features.'
---

## Basic

`NFormGroup` - a wrapper component for `NInput`, `NTextarea`, `Select`, and other form components. It provides a label, description, hint, message, status and other features.

::alert{type="info"}
  Notice that when you click on the label, the input gets focused. By default, we automatically add `for` attribute to the label and `id` attribute to the input. If you want to override this behavior, you can define `for` and `id` attributes manually.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupUsage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupUsage.vue
::
:::

## Required

`required` - adds `*` to the label.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupRequired
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupRequired.vue
::
:::

## Description

`description` - displays description text.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupDescription
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupDescription.vue
::
:::

## Hint

`hint` - displays hint text.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupHint
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupHint.vue
::
:::

## Message

`message` - displays message text. Useful in combination with `status` prop.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupMessage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupMessage.vue
::
:::

## Status

`status` - changes the status of the form group. Useful for displaying validation status.

>Possible values: `info`, `success`, `warning`, `error`.

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

`counter.value` - displays counter text, useful for displaying the number of characters in the input.

`counter.max` - the maximum number of characters.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueFormGroupCounter
::
::div{label="Code"}
@@@ ./components/content/examples/vue/form-group/ExampleVueFormGroupCounter.vue
::  
:::

## Slots

| Name          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `default`     | The default slot of the form group, refer [Basic](#basic) section. |
| `top`         | The top section of the form group.                                 |
| `bottom`      | The bottom section of the form group.                              |
| `label`       | The label slot of the form group.                                  |
| `description` | The description slot of the form group.                            |
| `hint`        | The hint slot of the form group.                                   |
| `message`     | The message slot of the form group.                                |
| `counter`     | The counter slot of the form group.                                |

## Props

@@@ ../packages/nuxt/src/runtime/types/form-group.ts

## Presets

@@@ ../packages/preset/src/_shortcuts/form-group.ts

## Components

@@@ ../packages/nuxt/src/runtime/components/forms/FormGroup.vue
