package Examples;

public class objectClassesMethods {

    public static void main(String[] args) {
        Car car = new Car();
        System.out.println(car.speedCurrent);
        car.accelerate(); // Methods are functions within classes
        System.out.println(car.speedCurrent);
        car.deaccerate();
        System.out.println(car.speedCurrent);
    }
}

class Car {
    int doorNumber;
    int speedMax;
    float speedCurrent;

    public void accelerate (){
        speedCurrent += 23.5;
    };
    public void deaccerate (){
        speedCurrent -= 5.2;
    };

}
