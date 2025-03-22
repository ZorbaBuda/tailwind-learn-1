type ScheduleCardProps = {
  activity: string
  classTime: string
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ activity, classTime }) => {
  return (
    <div
      className="max-w-fit  mx-auto p-2 mt-2 flex flex-col text-center gap-2 
     border border-light-gray rounded-md "
    >
      <div className="text-xl text-light-gray">{classTime}</div>
      <div className="text-light-gray2 font-semibold text-xl">{activity}</div>
    </div>
  )
}

export default ScheduleCard
