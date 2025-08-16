let btnSection = document.querySelector('.btns')
let historySection = document.getElementById('history') 

function toggle(){
    if (btnSection.style.display ==  'grid'){
        btnSection.style.display =  'none'
        historySection.style.display = 'flex'
    }
    else {
        btnSection.style.display =  'grid'
        historySection.style.display = 'none'
    }
}

let data = []



// data.push(obj)

let equal = () => {
    res.value = eval(inp.value)
    
    let obj = {
        input: inp.value,
        result: res.value
    }

    data.push(obj);

    historySection.innerHTML = ''

    data.forEach(e => {
        historySection.innerHTML += `
                <div class="historyBox">
                    <h1>${e.input}</h1>
                    <h2>${e.result}</h2>
                </div>`
    })

}

function historyclear() {
    data = []; 
    historySection.innerHTML = ''; 
}
