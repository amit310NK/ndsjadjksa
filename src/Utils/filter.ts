interface Brands {
    name : string
    id : string
    htmlFor : string
    label? : string
    min?: number
    max?:number
}


export const brands :Brands[] = [
    {
    name:"Brand A",
    id:"A",
    htmlFor:"Brand A",
    label:"Brand A"
} , 
{
    name:"Brand B",
    id:"B",
    htmlFor:"Brand B",
    label:"Brand B"
}, 
{
    name:"Brand C",
    id:"C",
    htmlFor:"Brand C",
    label:"Brand C"
},
{
    name:"Brand D",
    id:"D",
    htmlFor:"Brand D",
    label:"Brand D"
}

]


export const Category :Brands[] = [
    {
    name:"Category A",
    id:"A",
    htmlFor:"Category A",
    label:"Category A"
} , 
{
    name:"Category B",
    id:"B",
    htmlFor:"Category B",
    label:"Category B"
}, 
{
    name:"Category C",
    id:"C",
    htmlFor:"Category C",
    label:"Category C"
},
{
    name:"Category D",
    id:"D",
    htmlFor:"Category D",
    label:"Category D"
}

]

export const Price :Brands[] = [
    {
    name:"Brand A",
    id:"Brand A",
    htmlFor:"Brand A",
    min:0,
    max:100
} , 
{
    name:"Brand B",
    id:"Brand B",
    htmlFor:"Brand B",
    label:"$100 - $199",
    min:101,
    max:199
}, 
{
    name:"Brand C",
    id:"Brand C",
    htmlFor:"Brand C",
    label:"$200 - $599",
    min:200,
    max:599
},
{
    name:"Brand D",
    id:"Brand D",
    htmlFor:"Brand D",
    label:"$600 - $999",
    min:600,
    max:999
},
{
    name:"Brand E",
    id:"Brand E",
    htmlFor:"Brand E",
    label:"> $1000",
    min:1000,
    max: 2000,
}

]