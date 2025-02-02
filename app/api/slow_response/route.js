import { NextResponse } from 'next/server'

export async function GET() {
  const delay = 10000
  await new Promise((resolve) => setTimeout(resolve, delay))

  return NextResponse.json({
    message: 'This response was delayed by 3 seconds',
    timestamp: new Date().toISOString(),
  })
}
