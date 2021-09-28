package ch01;

public class Variable2 {
    public static void main(String[] args){
        float f;
        double d;

        f = (float)10.1;
        d = 10.1f;

        double d2 = f * f;
       // double d2 = (double)(f * f);
        System.out.println(d2); //자동형변환

        //float f2 = d * d; // x
        float f2 = (float)(d + d);
        float f3 = (float)d + (float)d;
        System.out.println(f2);
        System.out.println(f3); //수동형변환
    }
}
