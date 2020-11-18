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
            
        })
    })
})

function search() {
    playlist.innerHTML = ''
    let found = false
    pattern = new RegExp(`(${query.value})`, 'i')
    fetch('ezquiz.json').then(res => res.json()).then(data => {
        data.tracks.items.forEach((track) => {
            if(!pattern.test(track.name) && !pattern.test(track.artists[0].name)) return;
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
            found = true
        })
        if(found) return
        playlist.innerHTML += `<div class="not-found">Not Found!</div>`
    })
}