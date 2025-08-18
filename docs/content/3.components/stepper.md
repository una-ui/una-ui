---
description: 'A set of steps that are used to indicate progress through a multi-step process.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/stepper/Stepper.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/stepper
    target: _blank
---

## Examples

### Basic

| Prop           | Default      | Type                       | Description                                                                                                          |
| -------------- | ------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `items`        | `[]`         | `T`                        | The array of steps that is passed to the stepper.                                                                    |
| `defaultValue` | `1`          | `number`                   | The value of the step that should be active when initially rendered.                                                 |
| `dir`          | -            | `ltr` \| `rtl`             | Sets the reading direction of the stepper.                                                                           |
| `linear`       | `true`       | `boolean`                  | Whether or not the steps must be completed in order.                                                                 |
| `modelValue`   | -            | `number`                   | The controlled value of the step to activate. Can be bound as `v-model`.                                             |
| `orientation`  | `horizontal` | `horizontal` \| `vertical` | The orientation the steps are laid out. Mainly so arrow navigation is done accordingly (left & right vs. up & down). |
| `disabled`     | `false`      | `boolean`                  | When true, prevents the user from interacting with the stepper.                                                      |

::alert
The `T` generic extends the `Partial<NStepperItemProps>`, which means that you can use all the props from the `NStepperItemProps`.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueStepperBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/stepper/ExampleVueStepperBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/stepper#root" title="Reka Stepper Root API." target="_blank"}

### Orientation

| Prop          | Default      | Type                       | Description                         |
| ------------- | ------------ | -------------------------- | ----------------------------------- |
| `orientation` | `horizontal` | `horizontal` \| `vertical` | Set the orientation of the stepper. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueStepperOrientation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/stepper/ExampleVueStepperOrientation.vue
::
:::

### Variant and Color

| Prop                        | Default         | Type                | Description                                                          |
| --------------------------- | --------------- | ------------------- | -------------------------------------------------------------------- |
| `stepper`                   | `solid-primary` | `{variant}-{color}` | Set the stepper variant and color.                                   |
| `_stepperIndicator.stepper` | `solid-primary` | `{variant}-{color}` | Set the stepper indicator variant and color via `_stepperIndicator`. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueStepperColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/stepper/ExampleVueStepperColor.vue
::
:::

### Size

Adjust the stepper size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop                       | Default | Type     | Description                                        |
| -------------------------- | ------- | -------- | -------------------------------------------------- |
| `size`                     | `md`    | `string` | Adjusts the overall size of the stepper component. |
| `item.size`                | `md`    | `string` | applies only if not specified `size`               |
| `_stepperTrigger.size`     | `md`    | `string` | Modifies the size of the stepper trigger element.  |
| `_stepperTitle.size`       | `md`    | `string` | Adjusts the size of the stepper title.             |
| `_stepperDescription.size` | `md`    | `string` | Adjusts the size of the stepper description.       |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueStepperSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/stepper/ExampleVueStepperSize.vue
::
:::

### Exposed

| Name       | Type                     | Description                                   |
| ---------- | ------------------------ | --------------------------------------------- |
| `goToStep` | `(step: number) => void` | Navigates to the specified step by its index. |
| `nextStep` | `() => void`             | Moves to the next step (if available).        |
| `prevStep` | `() => void`             | Moves to the previous step (if available).    |
| `hasNext`  | `() => boolean`          | Checks if there is a next step available.     |
| `hasPrev`  | `() => boolean`          | Checks if there is a previous step available. |

## Slots

::alert
It is important that you can also use dynamic slots to customize individual parts of `Stepper`. You also have the option for `item` to use the slot field in the object itself for further dynamic binding.
::

| Name             | Props                                                                                                                                                                | Description                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `default`        | `modelValue`, `totalSteps`, `isNextDisabled`, `isPrevDisabled`, `isFirstStep`, `isLastStep`, `goToStep`, `nextStep`, `prevStep`, `hasNext`, `hasPrev`, `currentStep` | Default slot that overrides entire stepper content |
| `wrapper`        | `items`                                                                                                                                                              | Wraps all stepper items for custom layouts         |
| `item`           | `item`, `step`                                                                                                                                                       | Customizes each individual step                    |
| `trigger`        | `item`                                                                                                                                                               | Overrides clickable trigger area of each step      |
| `indicator`      | `item`, `step`                                                                                                                                                       | Customizes step indicator                          |
| `header`         | `item`                                                                                                                                                               | Customizes header section of each step             |
| `title`          | `item`                                                                                                                                                               | Overrides step title text                          |
| `description`    | `item`                                                                                                                                                               | Overrides step description text                    |
| `content`        | `item`                                                                                                                                                               | Dynamically renders content for active step        |
| `#{{item.slot}}` | `item`                                                                                                                                                               | Dynamic named slot when `item.slot` is defined     |

:::CodeGroup
::div{label="Preview"}
:ExampleVueStepperSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/stepper/ExampleVueStepperSlots.vue
::
:::

### Custom Rendering

Use the `default` slot for full control over the steppers's structure. This allows you to compose the stepper using its individual sub-components (like `NStepperItem`, `NStepperTrigger`, etc., listed in the [Components](#components) section), similar to libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueStepperCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/stepper/ExampleVueStepperCustomRendering.vue
::
:::
