// Public MessageScroller composables. The engine itself is component-local
// (components/message-scroller/useMessageScroller.ts) so its internals —
// provideMessageScroller, context/register hooks — stay out of Nuxt's
// auto-import surface; only these three are ambient.
export {
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from '../components/message-scroller/useMessageScroller'
