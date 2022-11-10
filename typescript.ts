function debug(message: any): void{
    // console.log(message)
    //no return here
}
// console.log("Hello typeScripts")

let firstName: string = "Jacques"
let age: number = 49
let good: boolean = true

let fruits: string[] = [
    "banana",
    "apple"
]

console.log(`
First Name: ${firstName}
Your Age: ${age}
you have many ${fruits}
`)


enum taxForm{
    standard = 1040,
    childCredit = 1065,
    SCorp= "1121",
    CCorp = "1120s"
}

// console.log(`
// you need form ${taxForm.childCredit}
// `)

function getFruit (index: number) : string {

    return fruits [index]

}
 
debug("OMG No return")

// console.log(`you choose a ${getFruit(0)}`)

interface teacher {
    name: string,
    years: number,
    subject: string[],
    age: number
}

let damian: teacher = {
    name: 'damian',
    years: 20,
    subject: ["javascript", "typescript"],
    age: 49
}

console.log(damian)