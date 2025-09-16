//variables can be declared in 3 ways let,const,var




//var variables are function scoped means we can access them only within the function they are declared if we try to access them outside the function in which they are declared we will get a reference error

//var variables can be reinitialized and redeclared


function fun(){
    {
       var a=10;
    }
    console.log(a);//accessible
}

console.log(a);//reference error





//let and const variables are block scoped means that they are accessiblw within the block they are declared if we try to access them outside the block we will get reference error

//let variables can be reinitialized but can cannot be redeclared

let name="vidya";
name="navya";//reinitialize

// let name="navya";//redeclared we will get syntax error

{
    let a=10;
    const b=20;
    console.log(a+"  "+b);
}

console.log(a+" "+b)//will throw a reference error




//const variables are neither redeclared nor reinitialized



{
const num=55;//must be intialized at the time time of its declaration otherwise compiler will throw a type error
}


// const num1;//not allowed


