function proximo() {
    let soma = 0;
    for (let i = 1; i <= 9; i++) {
        let element = document.getElementById("cabeleleiro" + i);
        if (element.checked == true)
            soma += element.value * 1;

    }
    document.location = "index2.html?soma=" + soma;
}

function storeOnFirebase(nome, data, hora, total) {
    // const firebaseConfig = {
    //     apiKey: "AIzaSyDN8VCjY__NWnTSdMMvH-JqUmghhUibDmI",
    //     databaseURL: "https://henriquisdial-a7f7b.firebaseio.com",
    //     projectId: "henriquisdial-a7f7b",
    //     storageBucket: "henriquisdial-a7f7b.appspot.com",
    //     messagingSenderId: "399506190472",
    //     appId: "1:399506190472:web:ec7336b4384a6fa522af3d"
    // };

    // firebase.initializeApp(firebaseConfig);


    axios.post("https://henriquisdial-a7f7b.firebaseio.com/cadastro.json", {
        nome,
        data,
        hora,
        total
    }).then(function(response) {
        window.location.href = `result.html?nome=${nome}&data=${data}&hora=${hora}&total=${total}`;
    });


}

function init() {
    const buttonFinalizar = document.querySelector('button.finalizar');
    if (buttonFinalizar) {
        buttonFinalizar.addEventListener('click', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;
            const total = document.getElementById('total').value;
            storeOnFirebase(nome, data, hora, total)
        });
    }

}

init();