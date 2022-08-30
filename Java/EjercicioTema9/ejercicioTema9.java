package Java.EjercicioTema9;

public class ejercicioTema9 {
    public static void main(String[] args) throws Exception {
        
        Cliente cliente = new Cliente();
        Trabajador trabajador = new Trabajador();

        cliente.telefono = "3152196055";
        cliente.nombre = "Pablito";
        cliente.edad = 23;
        cliente.credito = 230.4;

        trabajador.telefono = "123456789";
        trabajador.nombre = "Juanito";
        trabajador.edad = 54;
        trabajador.salario = 20000.50;

        System.out.println("Mi numero de telefono es: " + cliente.telefono + ", mi nombre es " + cliente.nombre + " tengo " + cliente.edad + " y mi credito es de " +cliente.credito);

        System.out.println("Mi numero de telefono es: " + trabajador.telefono + ", mi nombre es " + trabajador.nombre + " tengo " + trabajador.edad + " y mi salario es de " + trabajador.salario);

    }
}

class Persona{
    String nombre;
    String telefono;
    int edad;
}

class Cliente extends Persona{
    double credito;
}

class Trabajador extends Persona{
    double salario;
}