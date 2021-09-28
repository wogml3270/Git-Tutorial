package ch01;

public class Variable3 {
    public static void main(String[] args){
        char c = 'B';
        System.out.printf("%c : %d\n", c, (int)c);

        int i = 69;
        System.out.printf("%c : %d\n", (char)i, i);

        boolean bl = true;
        boolean bo = false;
        System.out.println(bl);
        System.out.println(bo);
    }
}

// boolean
// byte < char < short < int < long < float < double < String