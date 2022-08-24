package Examples;

public class objectPrivateSettersGetters{
    public static void main(String[] args) {
    
        Animal human = new Animal();   // Defining new Object
        Animal tiger = new Animal();
        Animal turtle = new Animal();

        Numbers number = new Numbers();
        Numbers number2 = new Numbers();
        
        Colors black = new Colors();
        Colors red = new Colors();

        Polygons triangle = new Polygons();
        Polygons square = new Polygons();
        Polygons pentagon = new Polygons();

        Fruits apple = new Fruits();
        Fruits grapes = new Fruits();

        human.setType("Human");   //Giving value to object.property through function set
        tiger.setType("Tiger");
        turtle.setType("Turtle");

        number.setNumber(3);
        number2.setNumber(4);

        black.setColor("Black");
        red.setColor("Red");

        triangle.setPolygon("Triangle");
        square.setPolygon("Square");
        pentagon.setPolygon("Pentagon");

        apple.setFruit("Apple");
        grapes.setFruit("Grapes");

        System.out.println(human.getType()); //getting the value from the function get
        System.out.println(tiger.getType());
        System.out.println(turtle.getType());

        System.out.println(number.getNumber());
        System.out.println(number2.getNumber());

        System.out.println(black.getColor());
        System.out.println(red.getColor());

        System.out.println(triangle.getPolygon());
        System.out.println(square.getPolygon());
        System.out.println(pentagon.getPolygon());

        System.out.println(apple.getFruit());
        System.out.println(grapes.getFruit());
    }
}

class Animal{

    private String type; //Define private property

    public void setType(String type){  // Function Setter defined. Caps on name of Property

        this.type = type;      //this.  property = parameter
    }

    public String getType(){  // Function Getter defined to return this.
        return this.type;
    }
}


class Numbers{

    private int number;

    public void setNumber(int number){
        this.number = number;
    }

    public int getNumber(){
        return this.number;
    }
}



class Colors {
    private String color;

    public void setColor(String color){
        this.color = color;
    }

    public String getColor(){
        return this.color;
    }
}


class Polygons {
    private String polygon;

    public void setPolygon(String polygon){
        this.polygon = polygon;
    }

    public String getPolygon(){
        return this.polygon;
    }
}

class Fruits {
    private String fruit;

    public void setFruit(String fruit){
        this.fruit = fruit;
    }

    public String getFruit(){
        return this.fruit;
    }
}