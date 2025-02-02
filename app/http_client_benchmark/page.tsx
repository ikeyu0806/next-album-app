'use client'

import { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function HttpBenchmark() {
  const [axiosResponse, setAxiosResponse] = useState<string | null>(null)
  const { data: swrData, mutate } = useSWR('/api/slow_response', fetcher, {
    suspense: false,
  })

  const handleAxiosClick = async () => {
    setAxiosResponse(null)
    const response = await axios.get('/api/slow_response')
    setAxiosResponse(response.data.message)
  }

  const handleSWRClick = () => {
    mutate()
  }

  return (
    <div>
      <h1>HTTP Clientベンチマーク</h1>

      {/* Axios リクエスト */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          handleAxiosClick()
        }}
      >
        axiosでパフォーマンス計測エンドポイントにリクエストを送信
      </a>
      <p>Response: {axiosResponse ?? 'No request yet'}</p>

      {/* SWR リクエスト */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          handleSWRClick()
        }}
      >
        swrでパフォーマンス計測エンドポイントにリクエストを送信
      </a>
      <p>Response: {swrData ? swrData.message : 'No request yet'}</p>
    </div>
  )
}
