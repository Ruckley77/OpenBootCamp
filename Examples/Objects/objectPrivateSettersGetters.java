package Examples.Objects;

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

        Games dota = new Games();
        Games kaizen = new Games();

        human.setType("Alberto");   //Giving value to object.property through function set
        tiger.setType("Tiger");
        turtle.setType("Turtle");

        human.setAlive(true);
        tiger.setAlive(false);
        turtle.setAlive(true);

        human.setAge(60);
        tiger.setAge(30);
        turtle.setAge(200);

        number.setNumber(8000);
        number2.setNumber(4000);

        black.setColor("Black");
        red.setColor("Red");

        triangle.setPolygon("Triangle");
        square.setPolygon("Square");
        pentagon.setPolygon("Pentagon");

        apple.setFruit("Apple");
        grapes.setFruit("Grapes");

        dota.setGame("Dota 2");
        kaizen.setGame("Kaizen game");

        System.out.println(human.getType()); //getting the value from the function get
        System.out.println(tiger.getType());
        System.out.println(turtle.getType());
        

        System.out.println(human.isAlive());
        System.out.println(tiger.isAlive());
        System.out.println(turtle.isAlive());

        System.out.println(human.getAge());
        System.out.println(tiger.getAge());
        System.out.println(turtle.getAge());

        System.out.println(number.getNumber());
        System.out.println(number2.getNumber());

        System.out.println(black.getColor());
        System.out.println(red.getColor());

        System.out.println(triangle.getPolygon());
        System.out.println(square.getPolygon());
        System.out.println(pentagon.getPolygon());

        System.out.println(apple.getFruit());
        System.out.println(grapes.getFruit());

        System.out.println(dota.getGame());
        System.out.println(kaizen.getGame());
    }
}

class Animal {

    private String type; //Define private property
    private Boolean alive;
    private int age;

    public void setType(String type){  // Function Setter defined. Caps on name of Property

        this.type = type;      //this.  property = parameter
    }

    public void setAlive(Boolean alive){
        this.alive = alive;
    }

    public void setAge(int age){
        this.age = age;
    }

    public String getType(){  // Function Getter defined to return this.
        return this.type;
    }

    public int getAge(){
        return this.age;
    }

    public Boolean isAlive(){
        return this.alive;
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


class Games {

    private  String game;

    public void setGame(String game){
        this.game = game;
    }

    public String getGame(){
        return this.game;
    }
}