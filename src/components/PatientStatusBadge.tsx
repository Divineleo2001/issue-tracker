import { PatientStatus } from '@prisma/client'
import React from 'react'
import { Badge } from './ui/badge'

const statusMap: Record<PatientStatus,{label: string, color:"green" | "red" | "orange" | "gray" | "blue"} > = {
    JOINED: {label: 'Joined', color: 'green'},
    CRITICAL: {label: 'Critical', color: 'red'},
    NON_CRITICAL: {label: 'Non Critical', color: 'orange'},
    CLOSED: {label: 'Closed', color: 'gray'},
    TREATMENT_IN_PROGRESS: {label: 'Treatment in Progress', color: 'blue'},
}
const PatientStatusBadge = ({status} : {status : PatientStatus}) => {
  return (
    <div>
        <Badge className={`bg-${statusMap[status].color}-500 hover:bg-${statusMap[status].color}-500`}>{statusMap[status].label}</Badge>
    </div>
  )
}

export default PatientStatusBadge