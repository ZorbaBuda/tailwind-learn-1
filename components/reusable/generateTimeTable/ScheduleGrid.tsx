'use client'

import { GroupedSchedules } from '@/utilities/orderSchedules'
import { useTranslations } from 'next-intl'
import React from 'react'
import ScheduleCard from './ScheduleCard'
import { timeSlots } from '@/utilities/orderSchedules'

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const

type Props = {
  groupedSchedules: GroupedSchedules
}

export const ScheduleGrid: React.FC<Props> = ({ groupedSchedules }) => {
  const t = useTranslations('daysOfWeek')

  return (
    <div className="grid grid-cols-[0px_repeat(5,1fr)] gap-px   ">
      {/* Top-left empty corner */}
      <div className=""></div>

      {/* X-Axis: Days of the Week */}
      {daysOfWeek.map((key, i) => (
        <div key={i} className="text-2xl  text-center text-light-gray">
          {t(`${key}`)}
        </div>
      ))}

      {/* Y-Axis: Time Slots */}
      {timeSlots.map((slot) => (
        <React.Fragment key={slot}>
          {/* First column - Time Slots */}
          <div
            className=" text-center font-bold
          min-h-[24px] flex items-center justify-center "
          >
            {/* {slot} */}
          </div>

          {/* Empty cells for each day in the row */}
          {daysOfWeek.map((day, i) => {
            const schedules =
              groupedSchedules[day]?.filter((schedule) => schedule.slot === slot) || []

            return (
              <div key={`${slot}-${day}`} className="relative  min-h-[24px] ">
                {schedules.map((schedule, i) => (
                  <ScheduleCard
                    key={i}
                    activity={schedule.activity}
                    classTime={schedule.classTime}
                  />
                ))}
              </div>
            )
          })}
        </React.Fragment>
      ))}
    </div>
  )
}
