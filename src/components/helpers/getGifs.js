export const fetGifs = async(event) => {
    const url = event.image 
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        utl: img.images.downsized_medium.url
    }))
}