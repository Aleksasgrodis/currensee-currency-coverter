import React from 'react'
import {format} from 'date-fns'

function LastUpdatedAt({timestamp}) {
  return (
    <div>
      Rates last updated at: {format(timestamp, "HH:mm, MMMM d")}
    </div>
  )
}

export default LastUpdatedAt
