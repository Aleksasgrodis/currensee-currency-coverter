import React from 'react'
import {format} from 'date-fns'
import fromUnixTime from 'date-fns/fromUnixTime'

function LastUpdatedAt({timestamp}) {
  return (
    <div className="updated">
      Last updated at: { timestamp ? format(fromUnixTime(timestamp), "HH:mm, MMMM do") : "Something went wrong."}
    </div>
  )
}

export default LastUpdatedAt
