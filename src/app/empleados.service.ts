import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
  router: any;

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService, private dataService:DataServices){

    }


    setEmpleados(misEmpleados:Empleado[]){

      this.empleados=misEmpleados;

    }

    obtenerEmpleados(){
      return this.dataService.cargarEmpleados();
    }



    empleados:Empleado[]=[];
    /*empleados:Empleado[]=[

        new Empleado("Denis", "Rodriguez Mora", "Software Developer", 250000),
        new Empleado("Keka", "Rodriguez Mora", "Administrativa", 900000),
        new Empleado("Robin", "Rodriguez Chinchilla", "Presidente", 10000000),
        new Empleado("Romelia", "Mora Vargas", "Jefa Seccion", 10250000),
    
      ];*/  

      agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + 
        empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado); //agarra la info del empleaod guardado en la variable mi mpleado y lo lleva al array
        this.dataService.guardarEmpleados(this.empleados);

      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado=this.empleados[indice]; //almacenar en la variable empleadoModificado la informacion que hay en empleados

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

        this.dataService.actualizarEmpleado(indice,empleado);
          
             
      }

      eliminarEmpleado(indice:number){

        this.empleados.splice(indice,1);

      }

}