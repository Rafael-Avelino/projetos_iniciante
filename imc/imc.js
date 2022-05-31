let nome = window.document.querySelector("input#nometxt")
let altura = window.document.querySelector("input#alturatxt")
let peso = window.document.querySelector("input#pesotxt")
let res = window.document.querySelector("div#res")





function calcular() {
    if (nome.value.length === 0){
        window.alert('erro1')
    } else if (altura.value.length === 0){
        window.alert('erro2')
    } else if (peso.value.length === 0){
        window.alert('erro3')
    } else {
        let a = Number(altura.value)
        let p = Number(peso.value)
        let imc = (p/(a**2)).toFixed(1) // toFixed controla o numero de casas decimais

        if (imc < 19){
            res.innerHTML = `${nome.value}, o seu IMC é de ${imc}. O seu peso está muito baixo.`
        } else if (imc < 24){
            res.innerHTML = `${nome.value}, o seu IMC é de ${imc}.Você está no peso ideal.`
        } else if (imc < 29) {
            res.innerHTML = `${nome.value}, o seu IMC é de ${imc}.Você está com sobrepeso.`
        } else if ( imc < 34){
            res.innerHTML = `${nome.value}, o seu IMC é de ${imc}. Você está com obesidade grau 1`
        } else if (imc < 39){
            res.innerHTML = `${nome.value}, o seu IMC é de ${imc}. Você está com obesidade grau 2`
        } else {
            res.innerHTML = `${nome.value}, o seu IMC é de ${imc}.Você está com obesidade grau 3`
        }

    }

}


