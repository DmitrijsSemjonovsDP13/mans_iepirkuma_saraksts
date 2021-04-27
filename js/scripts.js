const POP_UP = document.getElementById('popUp');
let pirkums = []

document.getElementById('pievinotPirkumu').addEventListener('click', () => {
   
    POP_UP.style.display = 'block';

})

document.getElementById('jaunsPirkumus').addEventListener('click' , () => {
    POP_UP.style.display = 'none';
    
    let saraksts = {nosaukums: nosaukums.value, daudzums: daudzums.value};

    nosaukums.value = "";
    daudzums.value = "";

    pirkums.push(saraksts);

    render();
})


function render() {
    let pirkumagrozs = document.getElementById('pirkumagrozs');

    for(let i = 0; i < pirkums.length; i++){
       let groza = `            
        <div class="groza">
            <h3>Nosaukums : ${pirkums[i].nosaukums}</h4>
            <h4>Daudzums: ${pirkums[i].daudzums}</h4> 
        </div>`;
    pirkumagrozs.innerHTML += groza;
    }
    

}