package EjercicioTema3;

public class ejercicioTema3 {
    public static void main(String[] args) throws Exception {
        suma(19,23,35);

        Coche miCoche = new Coche();

        miCoche.sumarPuerta();

        System.out.println(miCoche.puertas);

    } 
    public static int suma(int x,int y,int z ) {

        int resultado = x + y + z;

        System.out.println(resultado);

        return resultado;
    }
}

class Coche {

    public int puertas = 4;
    
    public void sumarPuerta(){
        this.puertas++;
    }
}