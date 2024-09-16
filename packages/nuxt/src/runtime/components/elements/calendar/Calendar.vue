<script lang="ts" setup>
import type { CalendarRootEmits, CalendarRootProps } from 'radix-vue'
import type { NCalendarProps } from '../../../types'
import { CalendarRoot, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import CalendarCell from './CalendarCell.vue'
import CalendarCellTrigger from './CalendarCellTrigger.vue'
import CalendarGrid from './CalendarGrid.vue'
import CalendarGridBody from './CalendarGridBody.vue'
import CalendarGridHead from './CalendarGridHead.vue'
import CalendarGridRow from './CalendarGridRow.vue'
import CalendarGridWrapper from './CalendarGridWrapper.vue'
import CalendarHeadCell from './CalendarHeadCell.vue'
import CalendarHeader from './CalendarHeader.vue'
import CalendarHeading from './CalendarHeading.vue'
import CalendarNextButton from './CalendarNextButton.vue'
import CalendarPrevButton from './CalendarPrevButton.vue'

const props = withDefaults(defineProps<CalendarRootProps & NCalendarProps>(), {
  weekdayFormat: 'short',
})

const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    v-bind="forwarded"
    :class="cn('calendar-root', props.class)"
  >
    <CalendarHeader
      v-bind="forwarded._calendarHeader"
      :una="props.una?.calendarHeader"
    >
      <CalendarPrevButton
        v-bind="forwarded._calendarPrevButton"
        :una="props.una?.calendarPrevButton"
      />
      <CalendarHeading
        v-bind="forwarded._calendarHeading"
        :una="props.una?.calendarHeading"
      />
      <CalendarNextButton
        v-bind="forwarded._calendarNextButton"
        :una="props.una?.calendarNextButton"
      />
    </CalendarHeader>

    <CalendarGridWrapper
      v-bind="forwarded._calendarGridWrapper"
      :una="props.una?.calendarGridWrapper"
    >
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        v-bind="forwarded._calendarGrid"
        :una="props.una?.calendarGrid"
      >
        <CalendarGridHead
          v-bind="forwarded._calendarGridHead"
          :una="props.una?.calendarGridHead"
        >
          <CalendarGridRow
            v-bind="forwarded._calendarGridRow"
            :una="props.una?.calendarGridRow"
          >
            <CalendarHeadCell
              v-for="day in weekDays" :key="day"
              v-bind="forwarded._calendarHeadCell"
              :una="props.una?.calendarHeadCell"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody
          v-bind="forwarded._calendarGridBody"
          :una="props.una?.calendarGridBody"
        >
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="mt-2 w-full"
            v-bind="forwarded._calendarGridRow"
            :una="props.una?.calendarGridRow"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              v-bind="forwarded._calendarCell"
              :una="props.una?.calendarCell"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                v-bind="forwarded._calendarCellTrigger"
                :una="props.una?.calendarCellTrigger"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </CalendarGridWrapper>
  </CalendarRoot>
</template>
