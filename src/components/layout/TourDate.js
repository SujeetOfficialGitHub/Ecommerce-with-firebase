import React from 'react'

const TourDate = (props) => {
  const date = new Date(props.tourDate)
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return (
    <div>
      <span>{month}</span>
      <span>{day}</span>
    </div>
  )
}

export default TourDate