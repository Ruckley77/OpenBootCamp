package Examples.Objects;

public class objectChildsAbstract {

    public static void main(String[] args) throws Exception {

        // Vehicle car = new Vehicle();   This was used with no abstract class, with abstract it can't be called.
        Kar car = new Kar();

        car.speedMax = 60;
        car.plate = "HUG 421";
        car.setSound("Brrrrrrr");

        System.out.println(car.getSound());
        System.out.println(Coupe.checkPlate("HUG 421"));   //printing from child which is Coupe from Kar, Kar from Vehicle.
        
    }
    
}

abstract class Vehicle{   // Abstract a class in order to abstract methods/functions from the class/object to other classes/objects
                          // is used in order to have the different results with the same name method on different objects.
    int speedMax;
    String plate;
    String sound;

    public Vehicle() {
        System.out.println("Constructor mode");
    }

    abstract public void setSound(String sound);  // Abstract functions have no body function.
    abstract public String getSound();            // It means that there is no general way of defining the function, each object will define how it works.

    public static boolean checkPlate(String plate){   // If statement just to check the plate with a boolean status.
        if (plate == "HUG 421") {
            return true;
        }

        return false;
    }
}

class Kar extends Vehicle{        

    public void setSound(String sound){  //Needs to define the functions again with body, since previous abstracts are not defined.
        this.sound = sound;
    }
    public String getSound(){
        return "I'm a Kar " + this.sound;
    }
}

class Motorcycle extends Vehicle{

    public void setSound(String sound){
        this.sound = sound;
    }
    public String getSound(){
        return "I'm a Motorcycle " + this.sound;
    }
}

class Coupe extends Kar{

}