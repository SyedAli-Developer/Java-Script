let btn = document.getElementById('likeBtn')
let count = document.getElementById('count')

let liked = false;
let likecount = 10;

count.textContent = likecount;

btn.addEventListener('click' , ()=>{
    liked = !liked

    if(liked)
    {
        likecount++;
        btn.classList.add("red")
        btn.textContent = 'Liked'
    }
    else{
        likecount--;
        btn.classList.remove('red')
        btn.textContent = 'Like'
    }
    count.textContent = likecount;
})