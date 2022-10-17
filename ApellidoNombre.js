//Creando clase contador
class Usuario {
    //Definiendo Usuario
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros || [];
      this.mascotas = mascotas || [];

    }
  
    
    //Definiendo métodos
    getFullName() {
      return `${this.nombre}, ${this.apellido}`;
    }

    addMascota(mascota){
       return this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook (nombre, autor) {
        this.libros.push({nombre, autor});
    }

    getBookNames() {
        return this.libros.map(({nombre}) => nombre).join(",");
    }



}

//Creando instancias
const usuario1 = new Usuario('juan', 'perez');


//Probando métodos de las instancias
usuario1.addMascota("gato");
usuario1.countMascotas();
usuario1.addBook("libro1", "autor1");
usuario1.getBookNames();




//Imprimiendo instancias (Usuarios)
console.log(usuario1);
