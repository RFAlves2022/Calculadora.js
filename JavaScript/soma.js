function soma(v1,v2){
    var resultado;
    resultado = parseFloat(v1) + parseFloat(v2);
    if (resultado >= 0){
        document.getElementById("resultado").style.color="#0f800f";
    }
    else{document.getElementById("resultado").style.color="red"}
    
    document.querySelector("#resultado").innerHTML = resultado
}