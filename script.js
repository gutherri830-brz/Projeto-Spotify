document.addEventListener('DOMContentLoaded', () => {
    
        
      
        
        
    

    const albumsdata = [
        {name: 'Back in Black', artist: 'AC/DC', image: './img/album-ac-dc.jpeg'},
        {name: 'Paranoid', artist: 'Black Sabbath', image: './img/album-black-sabbath.jpeg'},
        {name: 'Appetit for Destruction', artist: 'Guns n Roses', image:'./img/album-guns-n-roses.jpeg'},
        {name: 'Fear Of The Dark', artist: 'Iron Maiden', image: './img/album-iron-maiden.jpeg'},
        {name: 'Destroyer', artist: 'KISS', image: './img/album-kiss.jpeg'},
        {name: 'Master Of Puppets', artist: 'Metallica', image: './img/album-metallica.jpeg'},
        {name: 'Blizzard of Ozz ', artist: 'Ozzy Osbourne', image: './img/album-ozzy-osbourne.jpes'},
        {name: 'Blackout', artist: 'Scorpions', image: './img/album-scorpions.jpeg'},
        {name: 'All Hopes Gone', artist: 'Slipknot', image:'./img/album-slipknot.jpeg'},

    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add ('artist-card')

    artistCard.innerHTML = ` 
        <img src="${artist.image}" alt= "${ artist.name}">
        <h3>${artist.name}</h3>
        <p>artista</p>
    `
    artistGrid.appendChild(artistCard)

})

albumsData.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add ('album-card')

albumCard.innerHTML = ` 
    <img src="${album.image}" alt= "${ album.name}">
    <p>${album.name}</p>
    `
albumsGrid.appendChild(albumCard)
})

})

