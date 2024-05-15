const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors')
require('dotenv').config();
const port=process.env.PORT||8000

app.use(express.json())
const corsoption={origin:'http://localhost:3000',credentials:true,optionSuccessStatus:200};
app.use(cors(corsoption));
mongoose.connect(process.env.URL)
.then(()=>{
    console.log('Mongodb Connected Successfully')
})
.catch((error)=>{
    console.log(error);
})
const Schema=mongoose.Schema;
const bookeduser=new Schema({
    username:{type:String},
    bookingDate:{type:String},
    status:{type:String,default:"pending"}
})
const StudentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    subject:{
        type:[String],
        default:["Math"]
    },
    bookedDate:{
        type:[bookeduser]
    }
})
const userfeedback=new Schema({
    username:{type:String,default:"User"},
    message:{type:String,default:"Very Helpful Teacher"},
    rating:{type:Number,default:5}
})

const teacherSchema=({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Rating:{
        type:Number,
        default:5.0
    },
    description:{
        type:String,
        default:"I have experince in Math and Physics"
    },
    education:{
        type:String,
        default:"B.A."
    },
    experience:{
        type:Number,
        default:1
    },
    earnedcoins:{
        type:Number,
        default:50.0
    },
    feedback:{
        type:[userfeedback],
        default:[{username:"user",message:"Very Helpful Teacher",rating:5}]
    },
    subject:{
        type:[String],
        default:["Math"]
    },
    bookedDate:{
        type:[bookeduser]
    }

})
const Student=mongoose.model('Student',StudentSchema);
const Teacher=mongoose.model('Teacher',teacherSchema);
app.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
    const User=await Student.create({
        name,
        email,
        password
    })
    res.status(201).json(User);
    console.log(User)
}
catch(err){
        res.status(500).json({message:'Failed to register user'})
}
})

app.post('/teacher/signup',async(req,res)=>{
    const {name,email,password,experience,education,bookedDate}=req.body;
    console.log(email);
    try{
    const User=await Teacher.create({
        name,
        email,
        password,
        experience,
        education,
        bookedDate
    })
    res.status(201).json(User);
    console.log(User)
}
catch(err){
        res.status(500).json({message:'Failed to register user'})
}
})
app.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    try{
    const user=await Student.findOne({email});
    if(!user){
        return res.status(404).json({message:'User not found'})
    }
    if(password!==user.password){
        return res.status(401).json({message:'Invalid Credentials'})
    }
    res.status(200).json(user);
    console.log('user signin succesfull')
    }
    catch(error){
        console.log(error);
    }
})
app.post('/teacher/signin',async(req,res)=>{
    const {email,password}=req.body;
    try{
    const user=await Teacher.findOne({email});
    if(!user){
        return res.status(404).json({message:'User not found'})
    }
    if(password!==user.password){
        return res.status(401).json({message:'Invalid Credentials'})
    }
    res.status(200).json(user);
    console.log('user signin succesfull',user)
    }
    catch(error){
        console.log(error);
    }
})
app.put('/api/teacher/:id',async(req,res)=>{
    const itemId = req.params.id;
    const newbookedDate=req.body.bookedDate;
    console.log(itemId,newbookedDate)
    try{
        const updateditem=await Teacher.findByIdAndUpdate(itemId,{bookedDate:newbookedDate},{new:true})
        if(!updateditem){
            res.status(404).json({message:"item not found"})
        }
        res.status(200).json(updateditem);
    }
    catch(error){
        res.status(500).json({message:'Internal Server Error'});
    }
})
app.get('/all/students',(req,res)=>{
    Student.find()
    .then(items=>{
        if(items.length===0){
            res.status(400).json({message:'No Studnet found'})
        }
        else{
            res.status(200).json(items)
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({message:'Internal Server Error'});
    })
})

app.get('/all/teachers',(req,res)=>{
    Teacher.find()
    .then(items=>{
        if(items.length===0){
            res.status(400).json({message:'No Studnet found'})
        }
        else{
            res.status(200).json(items)
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({message:'Internal Server Error'});
    })
})
app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})