function calcula(v1,v2){
    var select = document.getElementById('operacao');
	var op = select.options[select.selectedIndex].value;

    if(v1 ==""){
        alert("Preencha o primeiro campo para realizar o calculo!");
    }else if(v2 ==""){
        alert("Preencha o segundo campo para realizar o calculo!");
    }else
    {
        switch(op){
            case "selecione": alert("Escolha uma operação para realizar o calculo!");
                break;
            case "+": soma(v1,v2);
                break;
            case "-": sub(v1,v2);
                break;
            case "*": mult(v1,v2);
                break;
            case "/": div(v1,v2);
                break;
        }
    }
}