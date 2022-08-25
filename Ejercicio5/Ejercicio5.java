package Ejercicio5;

public class Ejercicio5 {
    public static void main(String[] args) throws Exception {
    
        Persona persona = new Persona();

        persona.setNombre("Juan Pablo");
        persona.setEdad(23);
        persona.setTelefono("3152196055");
        
        System.out.println(persona.getNombre());
        System.out.println(persona.getEdad());
        System.out.println(persona.getTelefono());

    }
}

class Persona {

    private String nombre;
    private int edad;
    private String telefono;
    
    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public void setEdad(int edad){
        this.edad = edad;
    }

    public void setTelefono(String telefono){
        this.telefono = telefono;
    }

    public String getNombre(){
        return this.nombre;
    }

    public int getEdad(){
        return this.edad;
    }

    public String getTelefono(){
        return this.telefono;
    }
}