"use client"
import { useParams } from 'next/navigation'

export default async function Page() {
  const params = useParams()
  
  const { slug } = params
  return (
    <div>Page slug: {slug}</div>
  )
}
