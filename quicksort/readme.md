https://en.wikipedia.org/wiki/Library_sort - Oprindeligt denne sorterings algoritme, som jeg havde i tankerne

En youtube søgninger førte mig til en ted talk, som i stedet beskrev QuickSort.
Jeg hørte om den og syntes den var mere spændende og anvendelig.

https://www.youtube.com/watch?v=WaNLJf8xzC4 - Ted talk omkring 3 forskellige algoritmer men hovedpointe i quicksort
https://www.youtube.com/watch?v=ceqwscS_muA - QuickSort forklaring
https://www.youtube.com/watch?v=lWLTHsQnHDI&t=176s - quickSort tutorial
https://en.wikipedia.org/wiki/Quicksort - quickSort wikipedia

QuickSort er en divide-and-conquer sorteringsalgoritme. Den vælger et pivot-element og opdeler listen i 2 dele: elementer mindre end pivot og elementer større end pivot. Disse dele sorteres derefter rekursivt.

Tidskompleksitet

Bedste tilfælde:
O(n log n)
Opstår når pivot hver gang deler listen nogenlunde ligeligt i 2 halvdele.

Gennemsnitligt tilfælde:
O(n log n)
I praksis er dette det mest almindelige tilfælde, især med tilfældig eller “god” pivot-vælgning.

Værste tilfælde:
O(n²)
Opstår når pivot altid er det mindste eller største element (fx allerede sorteret liste og dårlig pivot-strategi).

Funktion (array) {
    Højre side = []
    Venstre side = []

}