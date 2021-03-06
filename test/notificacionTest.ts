import {Notificacion} from '../src/Notificacion';
import {expect} from 'chai';
import moment = require("moment");

describe('Notificacion', () => {
 
    it('Test Constructor Notificacion', () => {
        
        var fecha = moment('2016-01-01');
        let notificacion = new Notificacion('Titulo','Descripcion',12345,fecha,'Cristian');
        
        expect(notificacion.getTitulo()).to.equal('Titulo');
        expect(notificacion.getDescripcion()).to.equal('Descripcion');
        expect(notificacion.getId()).to.equal(12345);
        expect(notificacion.getFecha()).to.equal(fecha);
        expect(notificacion.getRemitente()).to.equal('Cristian');
      
    }); 

    it('Test Visto', () => {
    
       var fecha = moment('2016-01-01');
       let notificacion = new Notificacion('Titulo','Descripcion',12345,fecha,'Cristian');
       
       notificacion.cambiarVisto();
       
       expect(notificacion.getVisto()).to.equal(true);
         
     }); 

     it('Test NoVisto', () => {
    
      var fecha = moment('2016-01-01');
      let notificacion = new Notificacion('Titulo','Descripcion',12345,fecha,'Cristian');
      
      notificacion.cambiarVisto();
      notificacion.cambiarVisto();

      expect(notificacion.getVisto()).to.equal(false);
        
    }); 

     it('Test Fecha Formateada', () => {
    
        var fecha = moment('2016-01-01');
        let notificacion = new Notificacion('Titulo','Descripcion',12345,fecha,'Cristian');
       
        expect(notificacion.getFechaFormateada()).to.equal('2016-01-01');
         
      });
    
  it('Test Marcar Importante', () => {

    let notificacion = new Notificacion('Titulo', 'Descripcion', 12345, moment(), 'Cristian');

    notificacion.cambiarImportante();

    expect(notificacion.getImportante()).to.equal(true);

  });
  it('Test Marcar No Importante', () => {

    let notificacion = new Notificacion('Titulo', 'Descripcion', 12345, moment(), 'Cristian');

    notificacion.cambiarImportante();
    notificacion.cambiarImportante();

    expect(notificacion.getImportante()).to.equal(false);

  }); 
      it('Test Favorito', () => {
    
        var fecha = moment('2016-01-01');
        let notificacion = new Notificacion('Titulo','Descripcion',12345,fecha,'Cristian');
        
        notificacion.marcarFavorito();
        
        expect(notificacion.getFechaFav()).not.null;
          
      });  
});

