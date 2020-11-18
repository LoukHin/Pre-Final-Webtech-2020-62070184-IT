document.addEventListener('DOMContentLoaded', () => {
    fetch('ezquiz.json').then(res => res.json()).then(data => {
        data.tracks.items.forEach((track) => {
            playlist.innerHTML += `
                <div class="card">
                    <div class="card-img">
                        <img src="${track.album.images[0].url}">
                    </div>
                    <div class="card-body">
                        <div class="title">${track.name}</div>
                        <div>Artist: ${track.artists.map(artist => ' ' + artist.name)}</div>
                        <div>Release date: ${track.album.release_date}</div>
                        <div>Available: ${track.album.available_markets.length} countries</div>
                    </div>
                </div>
            `
            console.log(track.album.images)
        })
    })
})
