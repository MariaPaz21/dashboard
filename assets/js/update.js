let runScript = () => {
    chart_bars = document.getElementById( 'chart-bars' );
    console.log(chart_bars);
    
    icons = document.getElementsByTagName( 'i' );
    console.log(icons);

    cards = document.getElementsByClassName( 'card' );
    console.log(cards);
}
runScript()

let modifyText = () => {
    listOfP = document.getElementsByTagName( 'p' );
    elementP = listOfP[3];
    elementP.innerHTML = 'Dinero actual'
    
    element2 = listOfP[5]
    element2.innerHTML = 'Usuarios actuales'

    element3 = listOfP[7]
    element3.innerHTML = 'Clientes nuevos'

    element4 = listOfP[9]
    element4.innerHTML = 'Ventas'

    element5 = listOfP

    console.log(listOfP)

    listOfH4 = document.getElementsByTagName( 'h4' );
    elementH4 = listOfH4[0]
    elementH4.innerHTML = '$301k'
    

}
modifyText()