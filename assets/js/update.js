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
    
    porcentaje_de_cambio1 = (valor_actual1 - valor_previo1)*100/valor_previo1
    mensaje_tabla1 = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder" ${porcentaje_de_cambio1} </span>than last week</p>` 
    let listOfElements = document.getElementsByClassName('card-footer.p-3')

    console.log(mensaje_tabla1)
    console.log(listOfElements)
    let [card1, card2, card3, card4] = listOfElements
    
    




    
}
cambiosPercent()