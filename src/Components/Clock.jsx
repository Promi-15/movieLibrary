import { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timeInterval = setInterval(() => {
         setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timeInterval)
    }

  }, [])
  
  function formatTime() {
    let h = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds()
    const meridiem = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12
    return `${zero(h)} : ${zero(min)} : ${zero(sec)} : ${meridiem}`
}

function zero(number) {
    return (number < 10 ? "0" : "") + number
}

  return (
    <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-10">
    <p className="text-4xl font-bold ">{formatTime()}</p>
</div>
  )
}

export default Clock
