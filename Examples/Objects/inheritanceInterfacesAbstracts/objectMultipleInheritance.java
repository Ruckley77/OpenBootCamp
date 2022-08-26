package Examples.Objects.inheritanceInterfacesAbstracts;

public class objectMultipleInheritance {
    public static void main(String[] args) throws Exception {
        

    }
}

interface Transportation{        /*Abstract only, it can't have non-abstract functions.
                                 It will ask for those functions to be defined somewhere
                                 Often times used as a sketch to make sure they are defined*/ 
    void Gas (int velocity);
    void Stop (int velocity);
    
}

class Yatch implements Transportation{           // Define the abstract functions
    public void Gas (int velocity){

    }
    
    public void Stop (int velocity){

    }
}