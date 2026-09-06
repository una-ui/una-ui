---
navBadges:
  - value: New
    type: lime
description: 'A scroll container for chat transcripts that anchors turns, follows streamed replies, and restores prepended history.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/message-scroller/MessageScroller.vue
    target: _blank
---

A chat transcript has to juggle several things at once: pin to the live edge while a reply streams in, without fighting a reader who scrolls up; move each new turn near the top so it reads from its beginning; keep the reading position steady when older history loads above; and jump to any message on demand. `MessageScroller` owns those parts so your message list does not have to.

The family is a set of parts you compose:

| Part                       | Role                                                                   |
| -------------------------- | ---------------------------------------------------------------------- |
| `NMessageScrollerProvider` | Owns the scroll engine. Renders no markup.                             |
| `NMessageScroller`         | Positioning root for the viewport and the scroll buttons.              |
| `NMessageScrollerViewport` | The scroll container itself.                                           |
| `NMessageScrollerContent`  | The message list, plus the spacer that anchoring grows into.           |
| `NMessageScrollerItem`     | One message. Carries its id and whether it anchors a turn.             |
| `NMessageScrollerButton`   | A floating jump-to-edge button that shows itself only when it can act. |

## Examples

### Basic

Wrap the transcript in a provider, put the messages inside the viewport's content, and give each one a `messageId`. Nothing else is required — the button appears only when there is somewhere to scroll.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueMessageScrollerBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/message-scroller/ExampleVueMessageScrollerBasic.vue
::
:::

### Following the live edge

`autoScroll` keeps a streaming reply in view as it grows. Scrolling toward the start — by wheel, touch or keyboard — releases the view, so the following chunks arrive without moving the reader. Returning to the live edge picks the thread back up.

| Prop         | Default | Type      | Description                                             |
| ------------ | ------- | --------- | ------------------------------------------------------- |
| `autoScroll` | `false` | `boolean` | Follow the live edge while the reader is sitting at it. |

::alert
Mutate the streaming message **through the array proxy** (`messages.value[messages.value.length - 1]`), not through a raw object you captured earlier. Assigning the same string back through a stale reference does not trigger reactivity, and the reply will appear to never grow.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueMessageScrollerAutoScroll
::
::div{label="Code"}
@@@ ./components/content/examples/vue/message-scroller/ExampleVueMessageScrollerAutoScroll.vue
::
:::

### Anchoring turns

A _turn_ is a new exchange — usually a question and the reply that follows it. Mark the row that starts it with `scrollAnchor`, and the viewport moves that row near the top when it arrives, keeping a peek of the previous exchange above it so the turn does not feel detached.

Anchoring is role-independent: a system marker or a "joined the chat" row can anchor a turn just as well as a user message.

| Prop                     | Default | Type                          | Description                                                           |
| ------------------------ | ------- | ----------------------------- | --------------------------------------------------------------------- |
| `scrollAnchor`           | `false` | `boolean`                     | Marks the item as the start of a turn. Set on `NMessageScrollerItem`. |
| `defaultScrollPosition`  | `end`   | `start`, `end`, `last-anchor` | Where the viewport opens. Set on the provider.                        |
| `scrollPreviousItemPeek` | `64`    | `number`                      | Pixels of the previous item kept visible above an anchored turn.      |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueMessageScrollerAnchor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/message-scroller/ExampleVueMessageScrollerAnchor.vue
::
:::

### Loading older history

When messages are added above the reader, the scroller restores the position of the first visible message afterwards, so the transcript grows upward without the page jumping. Turn it off with `preserveScrollOnPrepend` on the viewport.

| Prop                      | Default | Type      | Description                                              |
| ------------------------- | ------- | --------- | -------------------------------------------------------- |
| `preserveScrollOnPrepend` | `true`  | `boolean` | Hold the reading position when items are added above it. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueMessageScrollerPrepend
::
::div{label="Code"}
@@@ ./components/content/examples/vue/message-scroller/ExampleVueMessageScrollerPrepend.vue
::
:::

### Scroll buttons

`NMessageScrollerButton` wraps [`NButton`](/components/button), so every button prop passes through. It hides itself — and goes `inert` — whenever its direction has nowhere to go, and its icon flips for `direction="start"`.

| Prop        | Default         | Type             | Description                       |
| ----------- | --------------- | ---------------- | --------------------------------- |
| `direction` | `end`           | `start`, `end`   | Which edge the button scrolls to. |
| `behavior`  | `smooth`        | `auto`, `smooth` | Scroll behaviour used on click.   |
| `btn`       | `outline-white` | `string`         | Any button variant.               |

::alert{type="warning"}
Prefer an opaque variant. The button floats over the transcript, so translucent variants such as `soft` and `ghost` let the messages underneath read through it.
::

```vue
<NMessageScroller>
  <NMessageScrollerViewport>...</NMessageScrollerViewport>

  <NMessageScrollerButton direction="start" btn="solid-gray" />
  <NMessageScrollerButton label="i-lucide-chevrons-down" />
</NMessageScroller>
```

### Jumping to messages

Inside the provider, `useMessageScroller()` exposes the scroll commands and `useMessageScrollerVisibility()` reports which messages are on screen and which turn the reader is in. Both read the provider's context, so call them from a component **rendered inside** `NMessageScrollerProvider`. A control that sits outside that subtree reaches the scroll commands through a template ref instead — see [Expose](#expose).

| Composable                       | Returns                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| `useMessageScroller()`           | `scrollToEnd(options?)`, `scrollToStart(options?)`, `scrollToMessage(id, options?)` |
| `useMessageScrollerScrollable()` | `{ start, end }` — whether either edge can still be scrolled to.                    |
| `useMessageScrollerVisibility()` | `{ currentAnchorId, visibleMessageIds }`.                                           |

`scrollToMessage` takes an `align` of `start`, `center`, `end` or `nearest`, plus `behavior` and `scrollMargin`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueMessageScrollerJump
::
::div{label="Code"}
@@@ ./components/content/examples/vue/message-scroller/ExampleVueMessageScrollerJump.vue
::
::div{label="Controls"}
@@@ ./components/content/examples/vue/message-scroller/ExampleVueMessageScrollerJumpControls.vue
::
:::

### Styling

The viewport ships with the [`scroll-fade`](/utilities/scroll-fade) and scrollbar utilities applied: its bottom edge fades while there is more to read, the scrollbar is thin, and the scrollbar hides itself while the viewport is autoscrolling. Every part takes `class` and a matching `una` key, and the parts expose `data-slot`, `data-scrollable` and `data-autoscrolling` for styling from the outside.

```vue
<NMessageScrollerViewport
  class="scroll-fade-b-16"
  :una="{ messageScrollerViewport: 'no-scrollbar' }"
/>
```

## Expose

`useMessageScroller()` only reaches the context from **inside** the provider. A composer or toolbar rendered as a sibling of the transcript — or the component that renders `NMessageScrollerProvider` in the first place — has nothing to inject, so `NMessageScroller` exposes the same three commands on its instance.

| Name              | Type                                                               | Description                                                      |
| ----------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `scrollToEnd`     | `(options?: { behavior?: ScrollBehavior }) => boolean`             | Jumps to the live edge and resumes following it if `autoScroll`. |
| `scrollToStart`   | `(options?: { behavior?: ScrollBehavior }) => boolean`             | Jumps to the top of the transcript.                              |
| `scrollToMessage` | `(id: string, options?: NMessageScrollerScrollOptions) => boolean` | Jumps to a message by its `messageId`.                           |

Each returns `false` when the viewport is not mounted yet. `scrollToMessage` queues the jump when the message has not registered yet, so it is safe to call before the item renders — `scrollToEnd` is immediate, so `await nextTick()` after appending a message.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueMessageScrollerExpose
::
::div{label="Code"}
@@@ ./components/content/examples/vue/message-scroller/ExampleVueMessageScrollerExpose.vue
::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/message-scroller.ts [types/message-scroller.ts]

## Components

:::CodeGroup
::div{label="MessageScrollerProvider.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/message-scroller/MessageScrollerProvider.vue

::
::div{label="MessageScroller.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/message-scroller/MessageScroller.vue

::
::div{label="MessageScrollerViewport.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/message-scroller/MessageScrollerViewport.vue

::
::div{label="MessageScrollerContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/message-scroller/MessageScrollerContent.vue

::
::div{label="MessageScrollerItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/message-scroller/MessageScrollerItem.vue

::
::div{label="MessageScrollerButton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/message-scroller/MessageScrollerButton.vue

::
:::
