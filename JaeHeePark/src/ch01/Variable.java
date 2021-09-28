package ch01;

public class Variable {
    public static void main(String[] args) {

        int score = 30;
        System.out.println(score);

        score = 20;
        System.out.println(score);
        System.out.println(score + score);
        score = score + score + score;
        System.out.println(score);
    }
}
