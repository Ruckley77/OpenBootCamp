
public class Ejercicio4 {
    public static void main(String[] args) throws Exception {
        var estacion = "0"; 


        int numeroIf = 0; 
        int numeroWhile = 0; 
        int numeroDo = 0; 
        int numeroFor = 0; 


        // El numero es igual a 0
        if (numeroIf > 0) {
            System.out.println("El numero es positivo");
        } else if (numeroIf == 0){
            System.out.println("El numero es igual a 0");
        }
        else {
            System.out.println("El numero es negativo");
        }

        // Cuenta desde el 0 hasta el 2

        while (numeroWhile < 3) {
            System.out.println(numeroWhile);
            numeroWhile++;
        } 

         //Cuenta solo el numero 0
        do {
            System.out.println(numeroDo);
        } while (numeroDo > 1); {
            numeroDo++;
        }

        // cuenta desde el 0 hasta el 3
        for (int i = 0; i <= 3; i++) {
            System.out.println(numeroFor);
            numeroFor++;
        }

        // El valor de la variable no es una estacion
        switch(estacion) {
            case "Verano":
                System.out.println("Es Verano");
                break;
            case "Invierno":
                System.out.println("Es Invierno");
                break;
            case "Otono":
                System.out.println("Es Otono");
                break;
            case "Primavera":
                System.out.println("Es Primavera");
                break;
            default:
                System.out.println("El valor de la variable no es una estacion");
        }
    }
}
