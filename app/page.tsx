import React from 'react'

export default function Home() {
  return (
    <>
      <a href="/use_default_mobility_album">use client/server指定なしでアルバムを表示</a>
      <br />
      <a href="/use_server_mobility_album">サーバサイドレンダリングでアルバムを表示</a>
      <br />
      <a href="/use_client_mobility_album">クライアントサイドレンダリングでアルバムを表示</a>
    </>
  )
}