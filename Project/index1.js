const music = new Audio('audio/2.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Believer<br> <div class="subtitle">Imagine Dragons</div>',
        poster: "Images/1.jpg",
    },
    {
        id: 2,
        songName: 'We Dont Talk Anymore<br> <div class="subtitle">Charlie Puth</div>',
        poster: "Images/2.jpg",
    },
    {
        id: 3,
        songName: 'Greedy<br> <div class="subtitle">Tate McRae</div>',
        poster: "Images/3.jpg",
    },
    {
        id: 4,
        songName: 'Talking To The Moon<br> <div class="subtitle">Bruno Mars</div>',
        poster: "Images/4.jpg",
    },
    {
        id: 5,
        songName: 'Night Changes<br> <div class="subtitle">One Direction</div>',
        poster: "Images/5.jpg",
    },
    {
        id: 6,
        songName: 'Love Story<br> <div class="subtitle">Taylor Swift</div>',
        poster: "Images/6.jpg",
    },
    {
        id: 7,
        songName: 'Laugh Now Cry Later<br> <div class="subtitle">Drake</div>',
        poster: "Images/7.jpg",
    },
    {
        id: 8,
        songName: 'On my way<br> <div class="subtitle">Alan Walker</div>',
        poster: "Images/8.jpg",
    },
    {
        id: 9,
        songName: 'Standing Next To You<br> <div class="subtitle">Jung Kook</div>',
        poster: "Images/9.jpg",
    },
    {
        id: 10,
        songName: 'Rich Baby Daddy<br> <div class="subtitle">Drake</div>',
        poster: "Images/10.jpg",
    },
    {
        id: 11,
        songName: 'Is It Over Now<br> <div class="subtitle">Taylor Swift</div>',
        poster: "Images/11.jpg",
    },
    {
        id: 12,
        songName: 'Watermelon Sugar<br> <div class="subtitle">Harry Styles</div>',
        poster: "Images/12.jpg",
    },
    {
        id: 13,
        songName: 'Who? What!<br> <div class="subtitle">Travis Scott</div>',
        poster: "Images/13.jpg",
    },
    {
        id: 14,
        songName: 'Blinding Lights<br> <div class="subtitle">The Weeknd</div>',
        poster: "Images/14.jpg",
    },
    {
        id: 15,
        songName: 'Spend Some Time<br> <div class="subtitle">Eminem</div>',
        poster: "Images/15.jpg",
    },
    {
        id: 16,
        songName: 'Perfect<br> <div class="subtitle">Ed Sheeran</div>',
        poster: "Images/16.jpg",
    },
    {
        id: 17,
        songName: 'Happier Than Ever<br> <div class="subtitle">Billie Eilish</div>',
        poster: "Images/17.jpg",
    },
    {
        id: 18,
        songName: 'Side to Side <br> <div class="subtitle">Ariana Grande</div>',
        poster: "Images/18.jpg",
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})




let masterPlay = document.getElementById('masterPlay')
let wave = document.getElementById('wave')

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.computedStyleMap.background = 'rgb(0, 0, 0, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `Images/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(0, 0, 0)";

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

    });
})



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    console.log(duration);
})








let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0]


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 200;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft += -200;
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0]


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 200;
})
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft += -200;
})