// 検証のためnext/imgを外してパフォーマンスを下げる
// import img from "next/img"

export default function HeavyMobilityshowAlbum() {
    const totalImages = 20
    const images = Array.from({ length: 1000 }).map((_, index) => ({
        src: `/tokyo_mobility_show/mobility_show${(index % totalImages) + 1}.jpg`,
        width: 400,
        height: 400,
      }))
    return (
        <>
            <h1>Album</h1>
            {images.map((img, i) => (
                <img key={i} src={img.src} width={img.width} height={img.height} loading="eager" />
            ))}
        </>
    )
}