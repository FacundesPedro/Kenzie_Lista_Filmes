//const movie_data = require('../assets/database.js')
document.querySelector("#search_field").addEventListener("focusin",event =>{
    event.target.style.background = 'pink'
})
document.querySelector("#search_field").addEventListener("focusout",event =>{
    event.target.style.background = 'transparent'
})
function load_DOM_movies(){
    const movieDOMList = create_DOM_movies_element()
    const moviesList = document.querySelector('.movies-list')
    movieDOMList.map(e =>{
        moviesList.append(e)
    })
}

function create_DOM_movies_element(){
    const buffer = []
    movie_data.map(e =>{
        const movieItem = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        h3.innerHTML = e.nome 
        img.src = `./assets/imgs/image (${e.id}).png`
        movieItem.append(img,h3)
        buffer.push(movieItem)
    })
    return buffer
}

load_DOM_movies()