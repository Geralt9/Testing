
//---------------------Arrays-------------------------------

// var a = [2, "4"]

// console.log(a) ;

// console.log(a[1]) ; 

// console.log(a.length) ; //to print the length of the array

// a.push("hi I am a string"); //push method adds an element 

// a.push(a[0]+1) ; 

//nested arrays :

/* var b = [ [1,2], ["5" , "6"]] ;
console.log(b) ; */

//----------------------------------------------------------

 /*   let n = 15 ;
    let i ;


    counter = function () {

        let c = [n] ;

        for(i=0 ; i<10 ; i++){

            c.push(n+1) ;
            console.log(c) ;
            n++ ;

        }
    }

    counter() ;  */

    /*----------------------------objects (basics refresher) -------------*/

    //basic way to announce an object in js :

   /* let object = {
      x : 5 ,

      methodname : function() {
          console.log('doing a function')
      }

    } 

object.methodname() ; */

    // creating an object using Factory Function

   /* function nameofFunction(parametre) {
        return{
          parametre ,

          methodname2 : function(){
            console.log("i am doing a function too")
          }

        }
    }

    let x = nameofFunction(5) ; */

    // creating an object using Constructor  ( get back to this link : https://www.youtube.com/watch?v=PFmuCDHHpwk          minute 1:02:48 )

//----------------------mapping function (array)------------------------

//the napping functions allows you to apply a function on each element of an array

// applicable example :

/*
 const nums = [5, 2, 0, 26, 0 , 13 ]

function zerofinder(parametre){
    if(parametre == 0){
      
      return parametre = null ;

    }
    else{
      return parametre ;
    }
}

let grayedzeros = nums.map(zerofinder) ;
console.log(grayedzeros) ;  */

//-----------------------Filter Function (Arrays)--------------------------
// the filter property verifies a condition within the function being called upon
// if the condition is true , the element within the array is filtered 

/*
 let names = ["Joseph" , "Leonard" , "Mark" , "Leo"] ;

  shortnames = names.filter(shorts) ;

  function shorts ( element ){

     
    
    return element.length <= 4  

    

  }

   console.log (shortnames) ; */ 

//------------------------reduce method (Arrays)---------------

// this method reduces the elements of an array to a single value 
// the callback function uses two parametres ( accumulator , element )

/* let names = ['Neuvilette' , 'Morax' , 'Navia']

const Firstletter = names.reduce(firstfinder)



function firstfinder (x , y ){
    return x + y ;
}

console.log(Firstletter)  */

//-----------------------------curried functions ( examples + proper application) --------------------------

//  curried functions allow you to use multiple functions without any complications 
// they allow you to use multiple parametres with flexibility 


//example ; function announced the normal way (staicase way) :

   /* function multiply(a) {
      return (b) => {
        return (c) => {
          return(d) => {
            return a*b*c*d ;

          }

      }
    }
 }

const passinga = multiply(5) ;
const passingb = multiply(6) ;
const passingc = multiply(5) ;
const passingd = multiply(10) ; 

console.log( multiply(5)(6)(5)(20) ) ;
*/ 

//------------------------------- composition functions ---------------------------------


/*function nameinput( x ){                            //in this example we didn4t curry , the functions are mentionned seperately .
    return x ;
}
function addtoname1(y){
    return  y  + ' ' + 'is so cool' ;
}
function addtoname2(z){
  return z + ' ' + 'that s why we like him'
}

   console.log(addtoname2(addtoname1(nameinput('Kelvin'))))  */ // composing the functions comes when we use a function as the parametre  of another , aka ainside anther one 

 // using currying 

 /* const nameinput = x => y => z => x + y  +' ' + 'is so cool' + z + ' ' + 'that s why we like him' ;

console.log( nameinput( 'kelvin' )(5)(2) ) ; //as opposed to before the concept of currying reduces the multiple lines of functions into one
*/

//---------------------------Tabs code ------------------------

 /* const buttonsselector = document.querySelectorAll('.buttons') ;
const contentselector = document.querySelectorAll('.textelemetn')


    buttonsselector.forEach(( buttons , index )=>{
 
      buttons.addEventListener('click' , (e)=>{


        
        buttonsselector.forEach(buttons=>{buttons.classList.remove('active')} )
        buttons.classList.add('active')
        
        contentselector.forEach((textelemetn)=>{textelemetn.classList.remove('active')})
        contentselector[index].classList.add('active')
      })

        
  
    })  */ 
      /*-----------------------------------------Promises ---------------------------------------------- */
      //promises are the best way to replace callbacks in JS
      // then is used to output the resolve / catch is used ton output the reject


     /*let p = new Promise ((resolve , reject)=>{
      let statement = 2 ; 
      if(statement== 1){

        resolve('correct')

      }else{
        reject('incorrect')
      }
    })

    p.then((result)=>{
      console.log('your statement is valid ' + result)
    }).catch((result)=>{
      console.log(' your statement is invalid ' + result)
    }) */ 


  let subp1 = new Promise((resolve)=>{resolve(2)})
  let subp2 = new Promise ((resolve)=>{resolve(3)})
  let a ;
  let b ;
  let c ;
  subp1.then((result1)=>{ a = result1 }) ; 
  subp2.then((result2)=>{ b= result2                      }) ;


  Promise.all([subp1 , subp2]).then((results)=>{

    a = results[0]
    b= results[1] 
    c = a+b ; 
    showresult(c);
  })
function showresult(){
  console.log(c)
}
    
/*---------------------------------------------------------------------------------------------------------------*/




    const buttons  = document.querySelectorAll('.button') ;

    const text = document.querySelectorAll('.text') ;

    const containerboxs = document.querySelector('.maincontainer') 


   buttons.forEach((element ,i)=>{

    element.addEventListener('click' , (e)=>{

      buttons.forEach(element=>{ element.classList.remove('active') })
      element.classList.add('active') ;


      text.forEach((a)=>{a.classList.remove('active')})
      text[i].classList.add('active')

    })
   })


    



   


    

