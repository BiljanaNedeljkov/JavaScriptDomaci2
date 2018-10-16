/* Zadatak 1
Napisati program koji ce za zadatu matricu A sabrati elemente na glavnoj i sporednoj dijagonali i to prikazati kao rezultat.

	1	2	3
A = 4	5	6
    7	8	9
 */
    
var A = [[1,2,3,],
         [4,5,6],
         [7,8,9]];

var zbir = 0;

for(var i = 0; i < A.length; i++){
         zbir += A[i][i] + A[i][A.length-1-i];      
}
console.log("Zbir elemenata na glavnoj i sporednoj dijagonali je : " + zbir);
console.log("__________________________________________________________");

/*Zadatak 2
Napisati program koji ce za zadatu matricu sabrati vrednosti
elemenata iz druge kolone i treceg reda i to prikazati kao 
rezultat.


	1	2	3	5
A = 4	5	6	8
	7	8	9	9
    8	5	3	1
*/

var A = [[1,2,3,5],[3,5,6,8],[7,8,9,],[8,5,3,1]];
var zbir = 0;
for(var i in A){
    zbir += A[1][i] + A[i][2];
}
console.log("Zbir elemenata druge kolone i trece vrste je : " + zbir);
console.log("__________________________________________________________");

/*Zadatak 3
Napisati program koji za zadatu matricu kao krajnji rezultat vraca zbir elemenata ciji je ostatak pri deljenju sa 2 jednak 0.

	1	2	3	5 
A = 4	5	6	8
	7	8	9	9
    8	5	3	1  */
    
var A = [[1,2,3,5],[3,5,6,8],[7,8,9,],[8,5,3,1]];
var zbir = 0;
for(var i in A){
    for(var j in A){
        if(A[i][j] % 2 == 0){
            zbir += A[i][j];
        }
    }
}
console.log("Zbir elemenata matrice A deljivih sa 2 je " + zbir);
console.log("__________________________________________________________");

/*  Zadatak 4
Napisati program koji u zadatoj matrici menja brojeve 3 sa 
brojem 0, a brojeve 5 sa -1.

	1	2	3	5 
A = 3	5	6	8
	7	8	9	3
    8	5	3	1     */
    
    var A = [[1,2,3,5],[3,5,6,8],[7,8,9,],[8,5,3,1]];
    var zbir = 0;
    for(var i in A){
        for(var j in A){
            if(A[i][j] == 3){
                A[i][j] = 0;
            }
            if(A[i][j] == 5){
                A[i][j] = -1;
            }
         
        }
    }
    console.log("Matrica A sada izgleda ovako : " + A);
    console.log("__________________________________________________________");

/*    Zadatak 5
Napisati program za konverziju Farenhajta u Celzijuse.
Formula farenhajt u celzijus: (F - 32) * 5/9 = C
Formula celzijus u farenhajt: C * 9/5 + 32 = F  */

var far = 95;
var cel = (far - 32) * 5/9;
console.log(far + " farenhajta iznosi " + cel + " stepeni celzijusa.");

var cel = 35;
var far = cel * 9/5 + 32;
console.log(cel + " stepeni celzojusa iznosi " + far + " farenhajta.");
console.log("__________________________________________________________");

/* Zadatak 6
Napisati program koji ispisuje vrednosti stepeni Celzijusa i Farenhajta 
za svakih 10 stepeni od 0 do 100 stepeni Celzijusa.  */


for(var cel = 0; cel <= 100; cel +=10){
    var far = cel * 9/5 + 32;
    console.log(cel + " stepeni celzijusa iznosi " + far + " farenhajta.");
}
console.log("__________________________________________________________");

