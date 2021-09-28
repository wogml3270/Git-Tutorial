package ch01;

public class PrintExample {
    public static void main(String[] args){
//        System.out.println("Hello World");
//        System.out.println("Hello World");
//        System.out.println("--------");
//        System.out.print("Hello World\n");
//        System.out.print("Hello World");

        String nm = "J Park";
        int age = 260000;
        float height = 171.2f;
        char bloodType = 'O';

        System.out.println(nm + "의 키는 " + height + "cm, 나이는 "
            + age + "세, " + "혈액형은 " + bloodType + "형이다.");

        System.out.printf("%s의 키는 %fcm, 나이는 %,d세, 혈액형은 %c형이다.",
                nm, height, age, bloodType);

        // %s = 문자열
        // %f = 실수
        // %d = 정수
        // %c = 문자

    }
}
