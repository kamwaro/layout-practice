// var toggle = document.querySelector('.toggle').addEventListener('click', menuOpen);

var toggle = document.querySelector('.toggle').addEventListener('dbclick', menuClose);

function menuClose(e){
    e.preventDefault();
    console.log('Wasssup!!');
}


// function menuOpen(e){
//     e.preventDefault();
//     console.log('WElcome back to JS!!')

//     document.querySelector('.toggle').style.background = '#666';

//     document.querySelector('.toggle').classList.add('active');

// }