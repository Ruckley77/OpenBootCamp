package Examples;

public class objectClassesMethods {

    public static void main(String[] args) {
        Car car = new Car(4,60);
        System.out.println(car.speedCurrent);
        car.accelerate(); // Methods are functions within classes
        System.out.println(car.speedCurrent);
        car.deaccerate();
        System.out.println(car.speedCurrent);
    }
}

class Car {

    // Defining Properties
    int doorNumber;
    int speedMax;
    float speedCurrent;

    //Constructor initializes First also, this one has Parameters
    public Car(int Doors, int Speed){
        doorNumber = Doors;
        speedCurrent = Speed;
        System.out.println("Constructing Mode Paremeters Included");
    }
    // Constructor with no Parameters
    public Car (){
        doorNumber = 4;
        speedCurrent = 120;
        System.out.println("Constructing Mode No Parameters");
    }
    public void accelerate (){
        speedCurrent += 23.5;
    };
    public void deaccerate (){
        speedCurrent -= 5.2;
    };

}
