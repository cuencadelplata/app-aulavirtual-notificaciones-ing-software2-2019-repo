import { Notificacion } from './Notificacion';
import moment = require('moment');
import { Canal } from './Canal';
import { IUsuario } from './IUsuario';
export class UsuarioMock implements IUsuario{
    private nombre: String;
    private dni: number;
    private notificaciones: Array<Notificacion>;
    constructor(nombre: String, dni: number) {
        
        this.setNombre(nombre);
        this.setDni(dni);
        this.setNotificaciones(new Array<Notificacion>());
    }

    private setNombre (nombre : String) {
        this.nombre = nombre;
    }
     
    public getNombre() : String {
        return this.nombre;
    }
    
    private setDni (dni : number) {
        this.dni = dni;
    }
     
    public getDni() : number {
        return this.dni;
    }

    private setNotificaciones(notificacion: Array<Notificacion>){

        this.notificaciones = notificacion;
   
    }
   
    public getNotificaciones(): Array<Notificacion>{
   
        return this.notificaciones;
   
    }
    public agregarNotificacion(notificacion : Notificacion){

        this.notificaciones.push(notificacion);

    }


    public mostrar(notificiones : Array<Notificacion>): string{
        let stringNotificaciones = "";

        
        return stringNotificaciones;
        
    }
    public imprimir(): number{

        return 1;

    }
    


}