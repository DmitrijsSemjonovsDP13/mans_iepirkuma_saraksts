const POP_UP = document.getElementById('popUp');
let pirkums = [] ; 

window.addEventListener('load', () => {
    pirkums = JSON.parse(localStorage.getItem("pirkums") || "[]");
    console.log(pirkums)
    render();
});

document.getElementById('pievinotPirkumu').addEventListener('click', () => {
   
    POP_UP.style.display = 'block';

})

document.getElementById('jaunsPirkumus').addEventListener('click' , () => {
    POP_UP.style.display = 'none';
    
    let groza = {Nosaukums: nosaukums.value, Daudzums: daudzums.value};

    nosaukums.value = "";
    daudzums.value = "";

    pirkums.push(groza);

    render();
})


function render() {
    let pirkumaGrozs = document.getElementById('pirkumaGrozs');
    pirkumaGrozs.innerHTML = "";

    for(let i = 0; i < pirkums.length; i++){
       let groza = `            
        <div class="groza">
            <h3>Nosaukums : ${pirkums[i].Nosaukums}</h4>
            <h4>Daudzums: ${pirkums[i].Daudzums}</h4> 
        </div>`;
    pirkumaGrozs.innerHTML += groza;
    }
    

    localStorage.setItem("pirkums", JSON.stringify(pirkums));
}