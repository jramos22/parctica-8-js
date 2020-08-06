const tareas = ['Practica de Javascript','Ir al supermercado','Pasear al perro','Lavar los trastos'];


const contenedor = document.getElementById('contenedor');
const titulo = document.createElement('H1');
titulo.innerHTML = 'Lista de tareas';
contenedor.appendChild(titulo);
const lista = document.createElement('ul');
contenedor.appendChild(lista);
for (let i = 0; i < tareas.length; i++) {
    //creo y agrego lista
    const listainterna = document.createElement('li');
    lista.appendChild(listainterna);
    //creo, agrego valores y introdusco a input dentro de li 
    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    input.setAttribute('id',`tarea-${tareas[i]}`);
    listainterna.appendChild(input);
    //creo, agrego valores y introdusco a labal dentro de li
    const label = document.createElement('label');
    label.setAttribute('for',`tarea-${tareas[i]}`);
    //agrego el texto que va dentro de label    
    label.innerHTML = tareas[i];
    listainterna.appendChild(label);
    
}