import { Activity, Schedule } from '@/payload-types'
import { fromZonedTime } from 'date-fns-tz'

export type ScheduleEntry = {
  activity: string
  classTime: string
  slot: string
}

export type GroupedSchedules = {
  [dayOfWeek: string]: ScheduleEntry[]
}

// export const timeSlots = [
//   '08:00 - 09:59',
//   '10:00 - 11:59',
//   '12:00 - 13:59',
//   '14:00 - 15:59',
//   '16:00 - 17:59',
//   '18:00 - 19:59',
//   '20:00 - 21:59',
// ] as const

export const timeSlots = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
  '18:00 - 20:00',
  '20:00 - 22:00',
] as const

const orderSchedules = (schedules: Schedule[], activity?: string): GroupedSchedules => {
  const groupedSchedules: GroupedSchedules = {}

  schedules.forEach((schedule) => {
    const { activity, dayOfWeek, startTime, classTime } = schedule

    // Determine slot
    const slot = getSlotFromStartTime(startTime)

    const entry: ScheduleEntry = {
      activity: (activity as Activity).title, // Assuming 'title' is required and exists
      classTime,
      slot,
    }

    // Group by day of week
    if (!groupedSchedules[dayOfWeek]) {
      groupedSchedules[dayOfWeek] = []
    }

    groupedSchedules[dayOfWeek].push(entry)
  })

  // **Intermediate Step** – Filter if activity is passed
  if (activity) {
    for (const day in groupedSchedules) {
      groupedSchedules[day] = groupedSchedules[day].filter((entry) => entry.activity === activity)

      // Remove empty days after filtering
      if (groupedSchedules[day].length === 0) {
        delete groupedSchedules[day]
      }
    }
  }

  // Sort each day by startTime ascending
  for (const day in groupedSchedules) {
    groupedSchedules[day].sort((a, b) => {
      const timeA = parseInt(a.slot.split(':')[0]) // Extract hour from slot
      const timeB = parseInt(b.slot.split(':')[0])
      return timeA - timeB
    })
  }

  // console.log(groupedSchedules)
  return groupedSchedules
}

export default orderSchedules

// const getSlotFromStartTime = (startTime: string): string => {
//   const hour = new Date(startTime).getUTCHours()

//   console.log('start time ', startTime, 'hour ', hour)

//   if (hour >= 8 && hour < 10) return '08:00 - 10:00'
//   if (hour >= 10 && hour < 12) return '10:00 - 12:00'
//   if (hour >= 12 && hour < 14) return '12:00 - 14:00'
//   if (hour >= 14 && hour < 16) return '14:00 - 16:00'
//   if (hour >= 16 && hour < 18) return '16:00 - 18:00'
//   if (hour >= 18 && hour < 20) return '18:00 - 20:00'
//   if (hour >= 20 && hour < 22) return '20:00 - 22:00'

//   return 'Unknown'
// }

export const getSlotFromStartTime = (startTime: string): string => {
  const localDate = fromZonedTime(startTime, 'Europe/Madrid')
  const hour = localDate.getHours()

  // console.log('start time ', startTime, ' hour ', hour)

  // Dynamically calculate from timeSlots
  for (const slot of timeSlots) {
    const [start, end] = slot.split(' - ').map((t) => parseInt(t.split(':')[0], 10))
    // console.log('hour ', hour, ' ', start, ' ', end)
    if (hour >= start && hour < end) return slot
  }

  return 'Unknown'
}
