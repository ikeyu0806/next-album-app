import React from 'react'

export default function Home() {
  return (
    <>
      <a href="/use_server_heavy_mobility_album">
        サーバサイドコンポーネントで重いアルバムを表示
      </a>
      <br />
      <a href="/use_client_light_mobility_album">
        クライアントコンポーネントで軽いアルバムを表示
      </a>
      <br />
      <a href="/use_client_heavy_mobility_album">
        クライアントコンポーネントで重いアルバムを表示
      </a>
      <br />
      <a href="/use_server_heavy_computation">
        サーバサイドコンポーネントで重い計算を実行
      </a>
      <br />
      <a href="/use_client_light_computation">
        クライアントコンポーネントで軽い計算を実行
      </a>
      <br />
      <a href="/api/slow_response">パフォーマンス計測用APIエンドポイント</a>
      <br />
      <a href="/http_client_benchmark">HTTPクライアントパフォーマンス計測</a>
    </>
  )
}
