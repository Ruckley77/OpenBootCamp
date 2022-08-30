package Java.Recursividad;

public class recursividad {
    public static void main(String[] args) throws Exception {

        System.out.println(factorial(3));
        sum(5,5);
    }

    public static int factorial(int number){
        int result;

        if (number == 1){
            return number;
        }

        result = factorial(number - 1) * number;
        return result;
    }
    public static int sum(int a, int b){

        var temp = a + b;
        
        if (b >= 90) {
            System.out.println(a + " " + b + " " + temp);
            return temp;
        }
        return sum(a, temp); // it's calling it's own function with the new parameter temp 
                            // creating a loop until the if statement is satisfied
    }
}



