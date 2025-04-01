/*


****************************** HAPPY FLOW **************************************

// TRY TO WRITE INDEPEND CODE 
// than connect later 
// debging is vey easy in this senario


How to debug your code

1. Dry and Run apporch 


company coding test pattern 

total time 90min
easy => 50 => 20min
medium => 100 => 30min
hard => 150 => 40min

  
if you have full confidance than go for hard 
otherwise start easy than medum at least 50 or 100 you got

you should divide your time according probloms score



E       50      x       15 min

M       100     2x      30 min

H       150     3x      45 min

90     300      6x      6x = 90     x = 15      tolrance +- 5 min


if equal score than give equal time



Every prople know what to do

what to do                                               what not to do

Lear 1 : smple way

1. read problom statement very carefully                1. Don't read like it's a requrement
and understandable manner                                   if need to read 5 min than go for 5 min


lear 2 : story pattern

2. if given story than read same way                    2. dot't be fast
deside how to take input
as array as graph as linkedlist etc.


learn 3 : puzzle pattern

go far same first find fallow pattern




input output

mostly input output given by company or coding plateform 
but if not give than ready for it 

like haker earth not give input output


try to understand run code format 
like code correct or accepted

correct VS accepted     ????????? 



test cases

justyfy the waitage of test cases

T1  =>  2
T2  =>  2
T3  =>  2
T4  =>  4   

like this
try to target more waitage


print  the output  

try to understand same printing pattern 
like spaces commas etc



************************************* IMPORTANCE OF CONTRAINS ******************************************


contrains => how to optimize code at your own skill set 
=>           reduce to get TLE as a output
=>           Order of code


with help of contrains we can deside code complexity

N => 5
Arr => 1 2 3 4 5


1< N < 10 to power 5

1< Arr[i] < 10 to power 9


1. we deside data type
2. time limit per test case OR per hole test case 
3. if you creoss limit than no fruther cheacking 
4. cross limit find output TLE => time  limit exceed
5. need to write opitimize code


// Operations

No of operations <= Given TLE  OR given SEC * 10 to power 8

if per tes case TLE = 2 sec

No. of operations = 2 * 10 to power 8 // this is the general power of CPU

if TLE not given consider be default one

than        NO of operation <= 1 * 10 to power 8


// Botel nack factors 

1. loops 
2. Dryn variable  // changable variable


1 < N < 10 to powe 8

for(let i=0; i<N; i++){

O(1)  // operation

}   // O(N)


// N depend Contrains => maxValue => 10 ^ 8 
=> No of operations = O(1) task execute 10 ^ 8 times     // worth case senario

Not give TLE   10^8 <= 10^8  // true





for(let i=0; i<N; i+=){  // 10 ^ 8
    for(let j=0; j<N; j++){  // 10 ^ 8

O(1)  // operation

    }

}  // O(N*N)  


No of operations 10^8 * 10^8 => 10^16

give TLE       10^16 <= 10^8     // false



//  pattern 

Code => put max value   =>  Check complexicity  =>  match TLE condition   =>  final result


......................................>   // not go this direction 




<.......................................   // should go this direction 

assume result => deside final TLE condition  =>  finallize complexicity and code  => Now write code  
// here there is very less chance to get TLE



Contrains                 Complexity

10 ^ 18                   O(N) Not run => log(N) => log(10^18) => 18 => 18<=10^8   this is run   => log(N)

10 ^ 8                    O(N)  Run

10 ^ 4                    O(N*N) Run

10 ^ 6                    O(N) run N(log(N)) also run

500                       O( N ^ 3) Run

20                        O( 2 ^ N )  Run    // exponencial type solution   // recersive apporch





************************************************ BAD FLOW ************************************************

// How to debug

always ready for backup action plan

// ACTION PLAN

test input  OR  Custom input  // we use this for debug

// custom input & rerun your logic
// print line at major part of your logic
// reduse your bug area
// stub & mock your function     =>     STUB  vs  MOCK
// narrow down your error searching
// commemt your code at specific porsition


Here you got it success



*/

