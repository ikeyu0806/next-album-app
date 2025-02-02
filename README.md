# Nextのパフォーマンス検証用プロジェクトです

VercelのデプロイURL
https://next-album-app-six.vercel.app/

## 画像をN枚表示するページ

https://next-album-app-six.vercel.app/use_client_mobility_album
https://next-album-app-six.vercel.app/use_default_mobility_album
https://next-album-app-six.vercel.app/use_server_mobility_album

## jsに重い計算をさせるページ

https://next-album-app-six.vercel.app/use_client_heavy_computation
https://next-album-app-six.vercel.app/use_default_heavy_computation
https://next-album-app-six.vercel.app/use_server_heavy_computation

## ここで計測

https://pagespeed.web.dev/analysis/https-next-album-app-six-vercel-app/lax4sgq2y9?form_factor=mobile

## prettier

```
docker exec -it next-album-app-next-album-app-1 bash
npx prettier . --write
```
