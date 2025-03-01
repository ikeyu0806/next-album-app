'use client'

import { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const start = performance.now()
  const res = await fetch(url)
  const data = await res.json()
  const end = performance.now()
  return { message: data.message, time: (end - start).toFixed(2) }
}

export default function HttpBenchmark() {
  const [fetchResponse, setFetchResponse] = useState<string | null>(null)
  const [fetchTime, setFetchTime] = useState<string | null>(null)

  const [axiosResponse, setAxiosResponse] = useState<string | null>(null)
  const [axiosTime, setAxiosTime] = useState<string | null>(null)

  const { data: swrData, mutate } = useSWR('/api/slow_response', fetcher, {
    suspense: false,
    // ページ読み込み時に呼び出さない
    revalidateOnMount: false,
  })

  const handleFetchClick = async () => {
    setFetchResponse(null)

    const start = performance.now()
    const response = await fetch('/api/slow_response')
    const data = await response.json()
    const end = performance.now()

    setFetchResponse(data.message)
    setFetchTime(`${end - start} ms`)
  }

  const handleAxiosClick = async () => {
    setAxiosResponse(null)

    const start = performance.now()
    const response = await axios.get('/api/slow_response')
    const end = performance.now()

    setAxiosResponse(response.data.message)
    setAxiosTime(`${end - start} ms`)
  }

  const handleSWRClick = () => {
    mutate()
  }

  return (
    <div>
      <h1>HTTP Clientベンチマーク</h1>
       {/* Fetch リクエスト */}
       <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          handleFetchClick()
        }}
      >
        fetch でパフォーマンス計測エンドポイントにリクエストを送信
      </a>
      <div>Next.jsではグローバルなfetch関数にpatchが当てられている</div>
      <p>Fetch Response: {fetchResponse ?? 'No request yet'}</p>
      <p>Time: {fetchTime ?? 'N/A'}</p>

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
      <p>Time: {axiosTime ?? 'N/A'}</p>

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
      <p>Time: {swrData ? `${swrData.time} ms` : 'N/A'}</p>
    </div>
  )
}
