---
description: Animation shortcuts
---

# 🟢 Animation

---

Some components support being animated when opened and closed. To customize this behavior, use the `data-animate` component property.

The default animation is `slide-2 fade-0 zoom-95 duration-fast`..

## Builtin animation shortcuts

Animations are handled using the [`unocss-preset-animations`](https://unocss-preset-animations.aelita.me/) library, and all shortcuts added by it are available for use.

In addition, some additional shortcuts were added that have special variants for certain openable components. They automatically choose the correct shortcut or variant based on the element's `data-state` and/or `data-side` attributes.

- `slide`
- `slide-from-(top|left|bottom|right)`
- `fade`
- `zoom`
- `spin`

### Custom animation shortcuts

To add custom shortcuts that behave similarly to the builtin ones, it needs to use a `data-[state]` variant. If relevant, a `data-[side]` variant can also be used.

::alert{type="info"}
UnoCSS can't parse shortcuts with multiple `data-x:` variants. As a workaround, use an inline variant `[&[data-x]]:` instead.
::

```js
export default una({
  shortcuts: [
    [/^animate-my-animation(-.+)?$/, ([, value = '']) => `
      [&[data-side=bottom]]:animate-my-animation-bottom${value}
      [&[data-side=left]]:animate-my-animation-left${value}
      [&[data-side=right]]:animate-my-animation-right${value}
      [&[data-side=top]]:animate-my-animation-top${value}
    `],
    [/^animate-my-animation-(top|bottom|left|right)(-.+)?$/, ([, side, value = '']) => `
      [&[data-state$=open]]:custom-shortcut-in-${side}${value}
      [&[data-state=closed]]:custom-shortcut-out-${side}${value}
    `],
  ]
})
```

## Examples

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueAnimatePopover
::

::code-block{label="Code"}
@@@ ./components/content/examples/vue/animate/ExampleVueAnimatePopover.vue
::
:::

## Shortcut Definitions

@@@ ../packages/preset/src/_shortcuts/animate.ts
