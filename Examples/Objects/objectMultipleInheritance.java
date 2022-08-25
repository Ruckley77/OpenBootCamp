package Examples.Objects;

public class objectMultipleInheritance {
    public static void main(String[] args) throws Exception {
        Transportation yatch = new Transportation();
        Engine ls = new Engine();

    }
}

class Transportation{
    int velocityMax;
    
    public Transportation() {
        System.out.println("Tranportation Constructor Mode ");
    }
}

class Engine {
    String engineType;

    public Engine(){
        System.out.println("Engine Constructor Mode");
    }
}


/*  Multiple inheritance does not work on java on all scenarios according to research I did.

class Bus extends Transportation , Engine { 

} */  
