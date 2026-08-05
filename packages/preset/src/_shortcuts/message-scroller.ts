type MessageScrollerPrefix = 'message-scroller'

export const staticMessageScroller: Record<`${MessageScrollerPrefix}-${string}` | MessageScrollerPrefix, string> = {
  // components
  'message-scroller': 'group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden',
  'message-scroller-viewport': 'size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-[autoscrolling]:scrollbar-thumb-transparent data-[autoscrolling]:scrollbar-track-transparent',
  'message-scroller-content': 'flex h-max min-h-full flex-col gap-8',
  'message-scroller-item': 'min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]',
  'message-scroller-button': 'absolute left-1/2 -translate-x-1/2 rtl:translate-x-1/2 transition-[translate,transform,scale,opacity] duration-200 data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:op-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:op-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full data-[direction=start]:[&_span[icon-base]]:rotate-180',
}

export const messageScroller = [
  staticMessageScroller,
]
