package Java.methodsGettersSetters;

public class arrayObjects {
    public static void main(String[] args) {
        
        Objetos[] colorObjetos;
        
        colorObjetos = new Objetos[2];
        
        colorObjetos[0] = new Objetos("Negro");
        colorObjetos[1] = new Objetos("Rojo");

        System.out.println(colorObjetos[0].getColor());
        System.out.println(colorObjetos[1].getColor());
    }
}


class Objetos {
    private String color;

    public Objetos(String color){
        this.color = color;
    }

    public String getColor(){
        return this.color;
    }
}