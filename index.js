const mongoose=require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/e-com')

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String,
})

const productModel=mongoose.model('products',productSchema)



async function SaveInDb()//or const SaveInDb=async()=>{}
{
    let data=new productModel({name:"max 131",price:200,brand:"lenovo",category:"laptop"})
    let result=await data.save()
    //console.log(result)
}
//SaveInDb()


async function UpdateInDb()//or const UpdateInDb=async()=>{}
{
   let data=await productModel.updateOne(
           {name:"max 131"},
           {
            $set:{price:700,name:'max'}
           }
   )
   //console.log(data)
}
//UpdateInDb()

async function DeleteInDb()//or const DeleteInDb=async()=>{}
{
    let data=await productModel.deleteOne(
        {name:'max'}
    )
   // console.log(data)
}
//DeleteInDb()

async function ReadInDb()//or const ReadInDb=async()=>{}
{
    let data=await productModel.find(
        {brand:'Apple'}
    )
   //console.log(data)
}
//ReadInDb()

