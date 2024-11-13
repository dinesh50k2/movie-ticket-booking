let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
console.log(url_segment);
//  console.log(url_segment[1]);


let play_button = document.getElementById('play');
let video = document.getElementById('video');


play_button.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display='unset';
        play_button.classList.remove('bi-play-circle');
        play_button.classList.add('bi-pause-circle');
        
    } else {
        video.pause();
        video.style.display='none';
        play_button.classList.add('bi-play-circle');
        play_button.classList.remove('bi-pause-circle');
    }
})

video.addEventListener('ended', ()=>{
    video.play();
})

let date = new Date();
let main_date = date.getDate();
// console.log((main_date))

Array.from(document.getElementsByClassName('date_point')).forEach( (el)  =>{
    if(el.innerText == main_date){
        el.classList.add('h6_active')
    }
})


let aaa = [
    {
    aaa: 'AAA cinema',
    movie: 'Salaar',
    loc:'old city,hyderabad',
    audi:1,
    type:'4DX',
    series:['J', 'I' ,'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'],
    row_section: 3,
    seat: 24,
    j: [2,6,24,23,7,16,17,18,19,13,12],
    i: [1,2,78,20,23,8,11,18,19,13,12],
    h: [1,2,6,20,23,8,17,18,19,13,12],
    g: [6,8,14,15,16],
    f: [5,6,15,17,18],
    e: [2,7,8,17,18],
    d: [5,16,15,23,22],
    c: [1,2,11,12,19],
    b: [8,5],
    a: [],
    price: [800,800,560,560,560,560,430,430],
    date:1,
},
{
    aaa: 'AAA cinema',
    movie: 'Pushpa',
    loc:'old city,hyderabad',
    audi:2,
    type:'4DX',
    series :['J', 'I' ,'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'],
    row_section: 3,
    seat: 24,
    j: [3,8,21,22,9,16,18,20,15,12],
    i: [1,2,78,20,23,8,11,17,19,13,12],
    h: [4,6,9,17,24,8,13,19,22,12,11],
    g: [1,4,12,16,22],
    f: [1,3,13,15,22],
    e: [3,9,10,20,24],
    d: [7,12,9,21,20],
    c: [6,8,11,12,19],
    b: [8,5,12,13,14],
    a: [],
    price: [800,800,560,560,560,560,430,430],
    date:2,
},
]
let addSeats = (arr) =>{
    //console.log(arr)
    arr.forEach((el,i) => {
        const {series,row_section,seat,price,a,b,c,d,e,f,g,h,j} = el;

        //create a Row

        for (let index = 0; index < series.length; index++) {
            // console.log(series[index])
            let row =document.createElement('div');
            row.className = 'row';
            let booked_seats = [];
            booked_seats =[...eval(series[index].toLocaleLowerCase())];
            console.log(booked_seats);

            // Create seats

            for (let seats = 0; seats < seat; seats++) {
                let li =document.createElement('li');

            }


        }
    })
    

}
        let data = aaa.filter(obj => obj.date == main_date &&  obj.movie == url_segment[1]);
        //console.log(data);
        addSeats(data)





