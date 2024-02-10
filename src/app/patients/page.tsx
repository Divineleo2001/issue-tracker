import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const PatientsPage = () => {
  return (
    <div>
      <Link href="/patients/new"> 
        <Button variant="default" className='ml-10 mt-10'>New patient</Button>
      </Link>
    </div>
  )
}

export default PatientsPage