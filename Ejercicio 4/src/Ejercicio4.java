public class Ejercicio4 {
    public static void main(String[] args) throws Exception {
        var estacion = "0"; // El valor de la variable no es una estacion


        int numeroIf = 0; // El numero es igual a 0
        int numeroWhile = 0; // Cuenta desde el 0 hasta el 2
        int numeroDo = 0; //Cuenta solo el numero 0
        int numeroFor = 0; // cuenta desde el 0 hasta el 3

        if (numeroIf > 0) {
            System.out.println("El numero es positivo");
        } else if (numeroIf == 0){
            System.out.println("El numero es igual a 0");
        }
        else {
            System.out.println("El numero es negativo");
        }

        while (numeroWhile < 3) {
            System.out.println(numeroWhile);
            numeroWhile++;
        }
        do {
            System.out.println(numeroDo);
        } while (numeroDo > 1); {
            numeroDo++;
        }

        for (int i = 0; i <= 3; i++) {
            System.out.println(numeroFor);
            numeroFor++;
        }

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
