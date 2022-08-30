package Java.inheritanceInterfacesAbstracts;

public class objectTestInterface {
    public static void main(String[] args) throws Exception {
        House house = new House();

        CheckProperty(house);
    }

    public static void CheckProperty(Property property){
        property.Type("Townhouse");
        property.Color("Red");
        property.Occupied(false);
    }
}


interface Property {
    void Type(String type);
    void Color(String color);
    void Occupied(boolean occupied);
}

class House implements Property{

    public void Type(String type){
        System.out.println(type);
    }

    public void Color(String color){
        System.out.println(color);
    }

    public void Occupied(boolean occupied){
        if (occupied == true){
            System.out.println("House is occupied");
        } else {
            System.out.println("House is vacant");
        }   
    }
}