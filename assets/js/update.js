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

    element5 = listOfP

    console.log(listOfP)

    listOfH4 = document.getElementsByTagName( 'h4' );
    elementH4 = listOfH4[0]
    elementH4.innerHTML = '$301k'
    

}
modifyText()

let updateData = () => {
    
  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];  

  
  let [ users, clients, sales ] = data;

  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;

   
   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

  let listOfElements = document.getElementsByClassName('text-end pt-1') 
  
  let [ , second, third, fourth ] = listOfElements;
  
  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;

  console.log(listOfElements)

}
updateData()

let cambiosPercent = () => {
    
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]
    let [ tabla1, tabla2, tabla3, tabla4 ] = cambios
    
    let {valor_previo: valor_previo1, valor_actual: valor_actual1, mensaje_tiempo: mensaje_tiempo1} = tabla1
    let {valor_previo: valor_previo2, valor_actual: valor_actual2, mensaje_tiempo: mensaje_tiempo2} = tabla2
    let {valor_previo: valor_previo3, valor_actual: valor_actual3, mensaje_tiempo: mensaje_tiempo3} = tabla3
    let {valor_previo: valor_previo4, valor_actual: valor_actual4, mensaje_tiempo: mensaje_tiempo4} = tabla4

    let porcentaje_de_cambio1 = parseFloat(((valor_actual1 - valor_previo1) * 100 / valor_previo1).toFixed(2)) + "%" + " "
    let porcentaje_de_cambio2 = parseFloat(((valor_actual2 - valor_previo2) * 100 / valor_previo2).toFixed(2)) + "%" + " "
    let porcentaje_de_cambio3 = parseFloat(((valor_actual3 - valor_previo3) * 100 / valor_previo3).toFixed(2)) + "%" + " "
    let porcentaje_de_cambio4 = parseFloat(((valor_actual4 - valor_previo4) * 100 / valor_previo4).toFixed(2)) + "%" + " "

    let mensaje_tabla1 = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${porcentaje_de_cambio1}</span>${ mensaje_tiempo1}</p>` 
    let mensaje_tabla2 = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${porcentaje_de_cambio2} </span>${mensaje_tiempo2}</p>`
    let mensaje_tabla3 = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${porcentaje_de_cambio3} </span>${mensaje_tiempo3}</p>`
    let mensaje_tabla4 = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${porcentaje_de_cambio4} </span>${mensaje_tiempo4}</p>`

    let listOfElements = document.getElementsByClassName('card-footer p-3')

    console.log(mensaje_tabla1)
    console.log(listOfElements)
    let [element1, element2, element3, element4] = listOfElements

    element1.innerHTML = mensaje_tabla1
    element2.innerHTML = mensaje_tabla2
    element3.innerHTML = mensaje_tabla3
    element4.innerHTML = mensaje_tabla4

    




    
}
cambiosPercent()