package Examples.Objects.inheritanceInterfacesAbstracts;

public class objectInterfacesMultipleInheritance {
    public static void main(String[] args) throws Exception {

        Yatch yatch = new Yatch();
        Bicycle bicycle = new Bicycle();

        Member member = new Member();
        NoMember noMember = new NoMember();

        ExecuteGas(yatch); //yatch abstracts transportation methods
        ExecuteGas(bicycle);

        CheckMembership(member);  // Remember that the paramenter of this function is the class
        CheckMembership(noMember);
        
    }
    // When a method's parameter its an object, its called by reference, meaning it will modify the original value.
    public static void ExecuteGas(Transportation transportation){ // Parameter of this function 
                                                                  // will be a class that implements that interface

        transportation.Gas(15);                         
    }

    public static void CheckMembership(Users user){
        
        user.Name("Pablito ");
        user.Membership("Divine Plus Member");
        user.Paid(false);
    }
}

interface Transportation{        /*Abstract only, it can't have non-abstract functions.
                                 It will ask for those functions to be defined somewhere
                                 Often times used as a sketch to make sure they are defined*/ 
    void Gas (int velocity);
    void Stop (int velocity);
    
}

interface Users {

    void Name (String name);
    void Membership (String membership);
    void Paid (boolean paid);

}

class Yatch implements Transportation{           // Define the abstract functions
    public void Gas (int velocity){
        System.out.println("Yatch() -> Gas() ");
    }
    
    public void Stop (int velocity){
        System.out.println("Yatch() -> Stop() ");
    }
}

class Bicycle implements Transportation{           // Define the abstract functions
    public void Gas (int velocity){
        System.out.println("Bicycle() -> Gas() ");
    }
    
    public void Stop (int velocity){
        System.out.println("Bicycle() -> Stop() ");
    }
}

class Member implements Users {

    public void Name (String name){
        System.out.println("User " + name);
    }

    public void Membership(String membership){
        System.out.println(membership);
    }

    public void Paid (boolean paid){
        if (paid == true){
            System.out.println("User has paid");
        } else {
            System.out.println("User has not paid");
        }
    }
}

class NoMember implements Users {
    public void Name (String name){
        System.out.println("User " + name);
    }

    public void Membership (String membership){
        System.out.println(membership + " is not found, user is not a member");
    }
    
    public void Paid (boolean paid){

        if (paid == true){
            System.out.println("User has paid");
        } else {
            System.out.println("User has not paid");
        }
    }
}