import React from 'react'

export default function Home() {
  return (
    <>
      <a href="/use_default_mobility_album">use client/server指定なしでアルバムを表示</a>
      <br />
      <a href="/use_server_mobility_album">サーバサイドコンポーネントでアルバムを表示</a>
      <br />
      <a href="/use_client_mobility_album">クライアントコンポーネントでアルバムを表示</a>
      <br />
      <a href="/use_default_heavy_computation">use client/server指定なしで重い計算を実行</a>
      <br />
      <a href="/use_server_heavy_computation">サーバサイドコンポーネントで重い計算を実行</a>
      <br />
      <a href="/use_client_heavy_computation">クライアントコンポーネントで重い計算を実行</a>
    </>
  )
}