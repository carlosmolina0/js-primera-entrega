//Desafio Arrays - Ejemplo de Gestión de Personas en una empresa

//Construimos la clase para las Personas

class Personal {
    constructor(id, nombre, apellido, edad, posicion, vacaciones, sueldo, equipo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.posicion = posicion
        this.vacaciones = vacaciones
        this.sueldo = sueldo
        this.equipo = equipo
    }
    aumentarSalario(porcentajeAumento) {
        this.salario = this.salario *=porcentajeAumento
    }
    tomarVacaciones(diasVacaciones) {
        this.vacaciones = this.vacaciones -= diasVacaciones
    }
}

//Agregamos los objetos con la plantilla actual
let id, nombre, apellido, edad, posicion, vacaciones, sueldo, equipo    

trabajador7 = new Personal (6, "Carlos", "Godoy", 32, "Project Manager", 19, 38000, [])
trabajador6 = new Personal (5, "Reka", "Barath", 35, "Operations Manager", 36, 40000, [])
trabajador5 = new Personal (4, "Sofia", "Yonico", 31, "Marketing Sales", 14, 38000, [])
trabajador4 = new Personal (3, "Fiorella", "Adamo", 28, "Marketing Manager", 22, 35000, [])
trabajador3 = new Personal (2, "Pablo", "Fiestas", 40, "VP Operaciones", 15, 50000, [trabajador6, trabajador7])
trabajador2 = new Personal (1, "Carlos", "Molina", 45, "VP Sales", 18, 50000, [trabajador4, trabajador5])
trabajador1 = new Personal (0, "Raúl", "De Pablos", 48, "CEO", "22", "70000", [trabajador2, trabajador3])

let trabajador8, empleadoEmpleado, seleccionaGestion, otraGestion, aumento, empleadoSubirSueldo, incrementoSueldo


//Creamos un Array con cada Departamento

const directores = [trabajador1, trabajador2, trabajador3]
const marketingyventas = [trabajador4, trabajador5]
const operaciones = [trabajador6, trabajador7]

//Función Concat para agrupar el total de empleados en un único Array


//Creamos un Array con las Gestiones a Realizar en la aplicación de RR.HH.

let gestiones = ["Alta nuevo empleado", "Baja de empleado", "Incrementar sueldo", "Registrar vacaciones (No disponible)", "Mostrar el Total de Empleados"]



//Función para Seleccionar que tipo de gestión realizar

function seleccionGestion () {
    seleccionaGestion = prompt("Selecciona la gestión a realizar:\n\n1. " + gestiones[0] + "\n2." + gestiones[1] + "\n3." + gestiones[2] + "\n4." + gestiones[3] + "\n5." + gestiones[4] + "\n\nSelecciona un número del 1 al 5 con la gestión a realizar")
}


//Función para calcular y mostrar el Total de Empleados

function calcularEmpleados () {
    let totalEmpleados = directores.concat(marketingyventas.concat(operaciones))
    console.log(`La empresa tiene actualmente" ${totalEmpleados.length} "empleados`)
    totalEmpleados.forEach(empleado => {console.log(empleado.nombre, empleado.apellido)});
}


//Función Dar de Alta a un nuevo emplead@ en el equipo de Operaciones

function altaEmpleado () {
    trabajador8 = new Personal (7, prompt("Ingresa el nombre de la persona"), prompt("Ingresa el apellido"), prompt("Ingresa su edad"), prompt("Ingresa su posición"), 22, prompt("Ingresa su sueldo"))    
}


//Función para dar de baja un empleado (sólo funciona para el listado inicial de empleados)

function seleccionarEmpleado () {

    totalEmpleados = directores.concat(marketingyventas.concat(operaciones))
    empleado = prompt("Selecciona el empleado sobre el que quieres actuar:\n1. " + totalEmpleados[0].nombre + " " + totalEmpleados[0].apellido + "\n2." + totalEmpleados[1].nombre + " " + totalEmpleados[1].apellido + "\n3." + totalEmpleados[2].nombre + " " + totalEmpleados[2].apellido + "\n4." + totalEmpleados[3].nombre + " " + totalEmpleados[3].apellido + "\n5." + totalEmpleados[4].nombre + " " + totalEmpleados[4].apellido + "\n6." + totalEmpleados[5].nombre + " " + totalEmpleados[5].apellido + "\n7." + totalEmpleados[6].nombre + " " + totalEmpleados[6].apellido + "\nSelecciona un número del 1 al 7 para seleccionar el empleado sobre el que realizar la Gestión")

    if(empleado >0 && empleado <= 8) 
    {
        switch (empleado) {
            case "1": 
                posicionEmpleado = 0
                break
            case "2": 
                posicionEmpleado = 1
                break
            case "3": 
                posicionEmpleado = 2
                break
            case "4": 
                posicionEmpleado = 3
                break
            case "5": 
                posicionEmpleado = 4
                break
            case "6": 
                posicionEmpleado = 5
                break
            case "7": 
                posicionEmpleado = 6
                break
            case "8": 
                posicionEmpleado = 7
                break
        }
    } else alert("Debes ingresar un valor en formato número entre el 1 y el 8")
}
    

//Función incrementar sueldo

function incrementarSueldo () {
    aumento = parseInt(prompt("Ingrese el importe a incrementar en el salario mensual"))
}

//Función Registrar Vacaciones




//Iniciamos el Programa de Gestión

    usuario = prompt("Bienvenid@, introduce tu nombre de usuario")
    alert (`Gracias ${usuario}. \nAhora vamos a iniciar la Gestión de Recursos Humanos`)

    calcularEmpleados ()


//Le pedimos al usuario que seleccione que Gestión quiere realizar


do { 

    do {
        seleccionGestion ()
        
        if(seleccionaGestion >0 && seleccionaGestion <= 5) 
        {
            switch (seleccionaGestion) {
                case "1": 
                    gestion = "Alta nuevo empleado"
                    break
                case "2": 
                    gestion = "Baja de empleado"
                    break
                case "3": 
                    gestion = "Incrementar sueldo"
                    break
                case "4": 
                    gestion = "Registrar vacaciones"
                    break
                case "5":
                    gestion = "Total empleados"
            }
        } else alert("Debes ingresar un valor en formato número entre el 1 y el 5")

    } while (isNaN(seleccionaGestion) || seleccionaGestion <0 || seleccionaGestion >5) 
    console.log(gestion)

//Ejecutamos función de Dar Alta

    if (gestion == "Alta nuevo empleado") { 
        
        altaEmpleado ()

        //Se actualiza el objeto trabajador3 con la incorporación al equipo
        trabajador3 = new Personal ("Pablo", "Fiestas", 40, "VP Operaciones", 15, 50000, [trabajador6, trabajador7, trabajador8])

        //Se agrega el nuevo trabajador al Array de Operaciones y se concatena de nuevo el total de empleados en una nueva constante
        operaciones.push (trabajador8)
        
        calcularEmpleados()
    }  


//Ejecutamos la Función de Dar de Baja a un empleado

    if (gestion == "Baja de empleado") {

        do {
            seleccionarEmpleado()

        } while (isNaN(empleado)) 

        totalEmpleados = directores.concat(marketingyventas.concat(operaciones))
        const nombreBaja = (totalEmpleados.splice(posicionEmpleado,1))

        alert (`El trabajador ${nombreBaja[0].nombre} ${nombreBaja[0].apellido} se ha dado de baja de la compañía`)

        console.log(`La empresa tiene actualmente" ${totalEmpleados.length} "empleados`)
        totalEmpleados.forEach(empleado => {console.log(empleado.nombre, empleado.apellido)})
    }


//Ejecutamos la función de Registro de Vacaciones (Work in Progress)

/*
let diasVacaciones = prompt("Ingresa el número de días de Vacaciones disfrutadas")

//Seleccionamos el empleado que se toma vacaciones

    if (gestion == "Registrar vacaciones") {


    do {
        seleccionarEmpleado()
        
        if(empleado >0 && empleado <= 8) 
        {
            switch (empleado) {
                case "1": 
                    posicionVacaciones = 0
                    break
                case "2": 
                    posicionVacaciones = 1
                    break
                case "3": 
                    posicionVacaciones = 2
                    break
                case "4": 
                    posicionVacaciones = 3
                    break
                case "5": 
                    posicionVacaciones = 4
                    break
                case "6": 
                    posicionVacaciones = 5
                    break
                case "7": 
                    posicionVacaciones = 6
                    break
                case "8": 
                    posicionVacaciones = 7
                    break
            }
        } else alert("Debes ingresar un valor en formato número entre el 1 y el 8")

    } while (isNaN(empleado)) 


    trabajador1.tomarVacaciones(diasVacaciones)
    trabajador4.tomarVacaciones(diasVacaciones)
    trabajador5.tomarVacaciones(diasVacaciones)

    console.log(`Se han actualizado las vacaciones de ${trabajador4.nombre}, ${trabajador1.nombre} y  ${trabajador5.nombre} que se han tomado ${diasVacaciones} días de vacaciones`)

    calcularEmpleados()
    gestionAdicional ()

    }*/


//Ejecutamos la función de Incrementar el sueldo a un empleado

    if(gestion == "Incrementar sueldo") {
        do {
            seleccionarEmpleado()

            incrementoSueldo = parseInt(prompt("Ingresa el importe que quieres incrementar en el sueldo"))
            empleadoSubirSueldo = totalEmpleados.find((elemento) => elemento.id == posicionEmpleado)
            console.log(empleadoSubirSueldo)
            empleadoSubirSueldo.sueldo = empleadoSubirSueldo.sueldo += incrementoSueldo  
            console.log(empleadoSubirSueldo) 
            totalEmpleados = directores.concat(marketingyventas.concat(operaciones))

        } while (isNaN(empleado)) 

        }

//Función Mostar Lista de Empleados en la Consola


    if(gestion == "Total empleados") {
        totalEmpleados = directores.concat(marketingyventas.concat(operaciones))
        console.log(`La empresa tiene actualmente" ${totalEmpleados.length} "empleados`)
        totalEmpleados.forEach(empleado => {console.log(empleado.nombre, empleado.apellido)})
        alert(`La empresa tiene actualmente" ${totalEmpleados.length} "empleados`)
    }


// Pregunta si desea realizar otra gestión

otraGestion = prompt("¿Deseas realizar otra gestión? (Si o No)").toLowerCase()
if (otraGestion == "no") {
    alert ("Muchas gracias por tu tiempo, vuelve cuando quieras y que tengas un excelente día")
    } else {alert ("Perfecto. Continua para seleccionar el tipo de gestión que quieres realizar") }
    console.log(otraGestion)

} while (otraGestion != "no")
