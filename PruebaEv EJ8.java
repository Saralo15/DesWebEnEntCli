public class MyClass {
    public static void main(String args[]) {
        int array [] = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int sumaPar = 0;
        int sumaImpar = 0;
      
      for (int i = 0; i < array.length; i++) {
			
			if(array [i] % 2 == 0){
			    sumaPar += array[i];
			}
			if(array [i] % 2 == 0){
			    sumaImpar += array[i];
			}
      }
      System.out.println("La suma de los números pares es: " + sumaPar +
					"\nLa suma de los números impares es: " + sumaImpar);
      
      
 }
}