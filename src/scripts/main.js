AOS.init();


//contador

const dataDoEvento = new Date("jul 10, 2023 8:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampatual = agora.getTime();

    const distaciaAteOEvento = timeStampDoEvento - timeStampatual;
    
    const diaEmMs = 1000 * 60 * 60 *  24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distaciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distaciaAteOEvento % diaEmMs) / horasEmMs);
    const minuAteOEvento = Math.floor((distaciaAteOEvento % horasEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutosEmMs) / 1000);

        console.log(diasAteOEvento);
        console.log(horasAteOEvento);
        console.log(minuAteOEvento);
        console.log(segundosAteOEvento);

        document.getElementById('contador').innerHTML = ` ${diasAteOEvento} d
        ${horasAteOEvento} : ${minuAteOEvento} : ${segundosAteOEvento}  `;

        if ( distaciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = 'Que pena, você perdeu !!!!'
        }
}, 1000)


