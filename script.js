let btns = document.querySelectorAll('.btn')
let inp = document.getElementById('inp')
let res = document.getElementById('res')

// console.log(btns);

// =, +=, -=, /=, *=

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        inp.value += btn.value
    })
})


let allClear = () => {
    inp.value = ''
    res.value = ''
}

let backspace = () => {
    inp.value = inp.value.slice(0, -1)
}

// ==============================================




// ==============================================