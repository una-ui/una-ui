---
description: 'NCalendar component - a component for displaying a calendar.'
---

# 🟢 Calendar

::list{type="primary"}
- Full keyboard navigation
- Can be controlled or uncontrolled
- Focus is fully managed
- Localization support
- Highly composable
::

---

## Basic

The `Calendar` component is built on top of the [RadixVue Calendar](https://www.radix-vue.com/components/calendar.html) component, which means you can pass all of the props provided by Radix.

::alert{type="info"}
The component uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package to handle dates.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCalendarBasic
::

::code-block{label="Code"}
@@@ ./components/content/examples/vue/calendar/ExampleVueCalendarBasic.vue
::
:::

## Slots

### Default

## Props
@@@ ../packages/nuxt/src/runtime/types/calendar.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/calendar.ts

## Component

:::CodeGroup
::code-block{label="Calendar" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/calendar/Calendar.vue

::
::code-block{label="CalendarCell"}
@@@ ../packages/nuxt/src/runtime/components/elements/calendar/CalendarCell.vue

::
::code-block{label="CalendarHeader"}
@@@ ../packages/nuxt/src/runtime/components/elements/calendar/CalendarHeader.vue

::
:::
