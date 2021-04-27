document.getElementById('pievinotPirkumu').addEventListener('click', () => {
    console.log("Poga nospiesta!");

    let popUp = document.getElementById('popUp')

    popUp.style.display = 'block'
})

document.getElementById('jaunsPirkumus').addEventListener('click' , () => {
    let popUp = document.getElementById('popUp')

    popUp.style.display = 'none'
    
    console.log('Poga pievinot pirkumu!')


})