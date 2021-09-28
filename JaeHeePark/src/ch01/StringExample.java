package ch01;

import java.nio.charset.StandardCharsets;

public class StringExample {
    public static void main(String[] args){
        String str1 = "Hello World";
        System.out.println(str1);

        str1 = str1 + " java";
        System.out.println(str1);

        String str2 = 10 + "10" + 10;
        System.out.println(str2);

    }
}
