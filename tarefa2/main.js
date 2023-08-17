function saudaçãoPorPeriodo(){
    const agora = new Date();
    const Hora = agora.getHours();

    let saudação;
    
    if(horaDoDia >= 6 && horaDoDia < 12){
        
        saudação = "Bom Dia!";
    }
    
    if(horaDoDia >= 12 && horaDoDia < 18){
    
        saudação = "Boa Tarde!";
    
    }
    
    if(horaDoDia >= 18 && horaDoDia < 24){
    
        saudação = "Boa Noite!";
    
    }
    
    if(horaDoDia >= 0 && horaDoDia < 6){
    
       saudação = "Hora de dormir!";
    
    }
    
    return saudação;
}

function exibirSaudação(){
    const saudação = saudaçãoPorPeriodo();
    document.getElementById("mensagem").textContent = saudação;
}



const data = new Date();

dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date

document.write ("<li>Hoje eh " + dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear () + ". </li>")

document.getElementById("resultado")

