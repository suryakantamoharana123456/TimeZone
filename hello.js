const sayDate = (str)=>{
    console.log(str, Date());
}
let time = document.querySelector('.start').addEventListener('click', ()=>{
    const clearT = setInterval(sayDate, 1000, "Hello")
    document.querySelector('.stop').addEventListener('click', ()=>{
        clearInterval(clearT)
    })
})
