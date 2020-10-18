import React from 'react'
import {format} from 'date-fns'

function LastUpdatedAt({timestamp}) {
  return (
    <div className="updated">
      Last updated at: {format(timestamp, "HH:mm, MMMM do")}
    </div>
  )
}

export default LastUpdatedAt
