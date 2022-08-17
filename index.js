const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cat",{useNewUrlParser:true})
// the data after the localhost:27017/ABC ABC is new database which is going to be create

// so just at first time lets create a schema and then we will going to create a model for which that created schema we are going to implement

// here we are declaring the schema of the catschema which we are going to use further inorder to make model based on  cat

const catSchema=mongoose.Schema({
  // we will parse the attribute and the type of attribute inside the main mongoose.Schema
  // 3 main datatypes in js 1)Number 2)Stribg 3)Boolean
  name:String,
  color:String,
  age:Number,
  type:String,
})

const cat= mongoose.model("cat",catSchema);

const cat1=new cat({
  name:"mani",
  color:"orange-white",
  age:20,
  type:"normal",
})
// shell code after inserting cat database
// cat1.save();
// ouput from mongoshell
// > show dbs
// admin     0.000GB
// cat       0.000GB
// config    0.000GB
// ghansham  0.000GB
// > use cat
// switched to db cat
// > show collections
// cats
// > db.cats.find()
// { "_id" : ObjectId("62fa6d10f13d033e9f8350f9"), "name" : "mani", "color" : "orange-white", "age" : 20, "type" : "normal", "__v" : 0 }
// > show dbs
// admin     0.000GB
// bat       0.000GB
// cat       0.000GB
// config    0.000GB
// ghansham  0.000GB
// > use bat
// switched to db bat
// > show collections
// cats
// > db.cats.find()
// { "_id" : ObjectId("62fa6e07ba8430e1c00ac379"), "name" : "mani", "color" : "orange-white", "age" : 20, "type" : "normal", "__v" : 0 }
// >

// lets crete another collections in the same database cat
const studentSchema=mongoose.Schema({
  name:String,
  mis:Number,
  pincode:Number,
  college:String,
  contact:Number,
  email:String,
})

const student=mongoose.model("student",studentSchema);

// it is not a case that you have insert the field in same order which you can see in schema itself
const grs=new student({
  name:"Ghansham Rajaram Salunkhe",
  mis:111903033,
  pincode:413109,
  college:"COEP",
  email:"salukhegr1712@gmail.com",
})
// ghansham.save()

const akg=new student({
  name:"Adesh Kiran Gaikwad",
  mis:11191002,
  pincode:411005,
  college:"COEP",
  email:"gaikwadak19.meta@coep.ac.in",
})
// adesh.save()

const yj=new student({
  name:"Yash Sudhakar Jogdand",
  pincode:411005,
  college:"COEP",
  email:"jogdandys19.extc@coep.ac.in",
})
// yash.save()
const nnm=new student({
  name:"Adesh Kiran Gaikwad",
  college:"Fergusson",
  email:"nikhilMore123@gmail.com",
})
// nikhil.save()

// shell code after creating student model
//
// > show dbs
// admin     0.000GB
// bat       0.000GB
// cat       0.000GB
// config    0.000GB
// ghansham  0.000GB
// > use cat
// switched to db cat
// > show collectionss
// 2022-08-15T21:43:40.342+0530 E  QUERY    [js] uncaught exception: Error: don't know how to show [collectionss] :
// shellHelper.show@src/mongo/shell/utils.js:1139:11
// shellHelper@src/mongo/shell/utils.js:790:15
// @(shellhelp2):1:1
// > show collections
// cats
// students
// > db.students.find()
// { "_id" : ObjectId("62fa709d8b70547141c99a83"), "name" : "Adesh Kiran Gaikwad", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a82"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a81"), "name" : "Adesh Kiran Gaikwad", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a80"), "name" : "Ghansham Rajaram Salunkhe", "mis" : 111903033, "pincode" : 413109, "college" : "COEP", "email" : "salukhegr1712@gmail.com", "__v" : 0 }
// >
//

// student.insertMany([akg,grs,nnm,yj],function(err){
//   console.log(err);
// });
//
// switched to db cat
// > db.students.find()
// { "_id" : ObjectId("62fa709d8b70547141c99a83"), "name" : "Adesh Kiran Gaikwad", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a82"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a81"), "name" : "Adesh Kiran Gaikwad", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a80"), "name" : "Ghansham Rajaram Salunkhe", "mis" : 111903033, "pincode" : 413109, "college" : "COEP", "email" : "salukhegr1712@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa72caad8cda83de72b758"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa732fa719aeca9309e270"), "name" : "Noone" }
// { "_id" : ObjectId("62fa736da719aeca9309e271"), "name" : "jaydeep" }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd04"), "name" : "Adesh Kiran Gaikwad", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd03"), "name" : "Ghansham Rajaram Salunkhe", "mis" : 111903033, "pincode" : 413109, "college" : "COEP", "email" : "salukhegr1712@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd06"), "name" : "Adesh Kiran Gaikwad", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd05"), "name" : "Yash Sudhakar Jogdand", "pincode" : 411005, "college" : "COEP", "email" : "jogdandys19.extc@coep.ac.in", "__v" : 0 }
// >
//

// now read with help of mongodb
// model name and then find function
// here model name works like the collections
// console.log("content of the cat collection is ::")
// cat.find(function(err,cats){
//
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log(cats);
//   }
// });

// console.log("content of the student collection is ::")
// student.find(function(err,students){
//   if (err) {
//     console.log(err)
//     // it is good practise to close the server after you finished using it
//     // close should be after last operation you done with  mongoose
//     // mongoose.collection.close()
//   }
//   else {
//     // mongoose.collection.close()
//     // console.log(students);
//     for(let i=0;i<students.length;i++){
//       console.log(students[i].name)
//       // ┌──(ghansham㉿terminal)-[~/Mongoose]
//       // └─$ node index.js
//       // Adesh Kiran Gaikwad
//       // Yash Sudhakar Jogdand
//       // Adesh Kiran Gaikwad
//       // Ghansham Rajaram Salunkhe
//       // Yash Sudhakar Jogdand
//       // Noone
//       // jaydeep
//       // Adesh Kiran Gaikwad
//       // Ghansham Rajaram Salunkhe
//       // Adesh Kiran Gaikwad
//       // Yash Sudhakar Jogdand
//     }
//     // it is good practise to close the server after you finished using it
//     // close should be after last operation you done with  mongoose
//
//   }
// });

// output
// [
//   {
//     _id: new ObjectId("62fa709d8b70547141c99a83"),
//     name: 'Adesh Kiran Gaikwad',
//     college: 'Fergusson',
//     email: 'nikhilMore123@gmail.com',
//     __v: 0
//   },
//   {
//     _id: new ObjectId("62fa709d8b70547141c99a82"),
//     name: 'Yash Sudhakar Jogdand',
//     pincode: 411005,
//     college: 'COEP',
//     email: 'jogdandys19.extc@coep.ac.in',
//     __v: 0
//   },
//   {
//     _id: new ObjectId("62fa709d8b70547141c99a81"),
//     name: 'Adesh Kiran Gaikwad',
//     mis: 11191002,
//     pincode: 411005,
//     college: 'COEP',
//     email: 'gaikwadak19.meta@coep.ac.in',
//     __v: 0
//   },
//   {
//     _id: new ObjectId("62fa709d8b70547141c99a80"),
//     name: 'Ghansham Rajaram Salunkhe',
//     mis: 111903033,
//     pincode: 413109,
//     college: 'COEP',
//     email: 'salukhegr1712@gmail.com',
//     __v: 0
//   },
//   {
//     _id: new ObjectId("62fa72caad8cda83de72b758"),
//     name: 'Yash Sudhakar Jogdand',
//     pincode: 411005,
//     college: 'COEP',
//     email: 'jogdandys19.extc@coep.ac.in',
//     __v: 0
//   },
//   { _id: new ObjectId("62fa732fa719aeca9309e270"), name: 'Noone' },
//   { _id: new ObjectId("62fa736da719aeca9309e271"), name: 'jaydeep' },
//   {
//     _id: new ObjectId("62fa73ed2ab171c8d711cd04"),
//     name: 'Adesh Kiran Gaikwad',
//     mis: 11191002,
//     pincode: 411005,
//     college: 'COEP',
//     email: 'gaikwadak19.meta@coep.ac.in',
//     __v: 0
//   },
//   {
//     _id: new ObjectId("62fa73ed2ab171c8d711cd03"),
//     name: 'Ghansham Rajaram Salunkhe',
//     mis: 111903033,
//     pincode: 413109,
//     college: 'COEP',
//     email: 'salukhegr1712@gmail.com',
//     __v: 0
//   },
//   {
//     _id: new ObjectId("62fa73ed2ab171c8d711cd06"),
//     name: 'Adesh Kiran Gaikwad',
//     college: 'Fergusson',
//     email: 'nikhilMore123@gmail.com',
//     __v: 0
//   },
//   {
//     _id: new ObjectId("62fa73ed2ab171c8d711cd05"),
//     name: 'Yash Sudhakar Jogdand',
//     pincode: 411005,
//     college: 'COEP',
//     email: 'jogdandys19.extc@coep.ac.in',
//     __v: 0
//   }
// ]
// [
//   {
//     _id: new ObjectId("62fa6d10f13d033e9f8350f9"),
//     name: 'mani',
//     color: 'orange-white',
//     age: 20,
//     type: 'normal',
//     __v: 0
//   }
// ]


// lets make another model having data validation constrainst on them
//
// const mobileSchema=mongoose.Schema({
//   name:{
//     type:String,
//     // required will make that field mandatory
//     required:true,
//   },
//   price:Number,
//   rating:{
//
//     type:Number,
//     // add constrainst on the value so you will only see values within 1 to 10 range
//     min:1,
//     max:10,
//   }
//
// });
//
// // so lets create a modelrealted to newly created schema
//
// const Mobile=mongoose.model("mobile",mobileSchema);
//
// const f1=new Mobile({name:"poco f1",price:10000,rating:1})
// const iqooz3=new Mobile({name:"Z3",price:20000,rating:8})
// // name: ValidatorError: Path `name` is required.
// //        at validate (/home/ghansham/Mongoose/node_modules/mongoose/lib/schematype.js:1337:13)
// //        at SchemaString.SchemaType.doValidate (/home/ghansham/Mongoose/node_modules/mongoose/lib/schematype.js:1321:7)
// //        at /home/ghansham/Mongoose/node_modules/mongoose/lib/document.js:2831:18
//
//
// Mobile.insertMany([f1,iqooz3],function(err){
//   console.log(err);
// })


// data va;idation error if rating is 11
// └─$ node index.js
// Error: mobile validation failed: rating: Path `rating` (11) is more than maximum allowed value (10).
//     at ValidationError.inspect (/home/ghansham/Mongoose/node_modules/mongoose/lib/error/validation.js:48:26)
//     at formatValue (node:internal/util/inspect:782:19)
//     at inspect (node:internal/util/inspect:347:10)
//     at formatWithOptionsInternal (node:internal/util/inspect:2167:40)
//     at formatWithOptions (node:internal/util/inspect:2029:10)
//     at console.value (node:internal/console/constructor:324:14)
//     at console.log (node:internal/console/constructor:360:61)
//     at /home/ghansham/Mongoose/index.js:310:11
//     at /home/ghansham/Mongoose/node_modules/mongoose/lib/helpers/promiseOrCallback.js:18:13
//     at /home/ghansham/Mongoose/node_modules/mongoose/lib/model.js:5095:18 {
//   errors: {
//     rating: ValidatorError: Path `rating` (11) is more than maximum allowed value (10).
//         at validate (/home/ghansham/Mongoose/node_modules/mongoose/lib/schematype.js:1337:13)
//         at SchemaNumber.SchemaType.doValidate (/home/ghansham/Mongoose/node_modules/mongoose/lib/schematype.js:1321:7)
//         at /home/ghansham/Mongoose/node_modules/mongoose/lib/document.js:2831:18
//
// succesfull insertion at last
// > db.mobiles.find()
// { "_id" : ObjectId("62fa85166eac0ebfb11b1132"), "name" : "poco f1", "price" : 10000, "rating" : 1, "__v" : 0 }
// { "_id" : ObjectId("62fa85166eac0ebfb11b1133"), "name" : "Z3", "price" : 20000, "rating" : 8, "__v" : 0 }
// >

// how to perform deletion and the update both
// model.updateOne(query,what_to_change,callback_function_which_has_errorAsParameter)

// cat.updateOne({name:"mani"},{name:"maniBal"},function(error){
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log("success");
//   }
// });
//
// student.updateMany({$or :[{name:"Adesh Kiran Gaikwad"},{name:"Ghansham Rajaram Salunkhe"}]},{name:"tula kai karayche ahe"},function(error){
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log("success");
//   }
// });
// > db.cats.find()
// { "_id" : ObjectId("62fa6d10f13d033e9f8350f9"), "name" : "maniBal", "color" : "orange-white", "age" : 20, "type" : "normal", "__v" : 0 }

// success
// success
// [
//   {
//     _id: new ObjectId("62fa6d10f13d033e9f8350f9"),
//     name: 'maniBal',
//     color: 'orange-white',
//     age: 20,
//     type: 'normal',
//     __v: 0
//   }
// ]
// tula kai karayche ahe
// Yash Sudhakar Jogdand
// tula kai karayche ahe
// tula kai karayche ahe
// Yash Sudhakar Jogdand
// Noone
// jaydeep
// tula kai karayche ahe
// tula kai karayche ahe
// tula kai karayche ahe
// Yash Sudhakar Jogdand

// deletion in mongoose
// await Character.deleteOne({ name: 'Eddard Stark' }); // returns {deletedCount: 1}
// student.deleteMany({name:"Yash Sudhakar Jogdand"},function(err) {
//   if (err) {
//     console.log(error);
//   }
//   else {
//     console.log("success");
//   }
// });
//
// student.find(function(err,students){
//   if (err) {
//     console.log("error");
//   }
//   else {
//     console.log(students);
//   }
// })
//
// > db.students.find()
// { "_id" : ObjectId("62fa709d8b70547141c99a83"), "name" : "tula kai karayche ahe", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a81"), "name" : "tula kai karayche ahe", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa732fa719aeca9309e270"), "name" : "Noone" }
// { "_id" : ObjectId("62fa736da719aeca9309e271"), "name" : "jaydeep" }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd04"), "name" : "tula kai karayche ahe", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd06"), "name" : "tula kai karayche ahe", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }

student.deleteOne({name:"jaydeep"},function(err){
  console.log(err);
})

// > use cat
// switched to db cat
// > db.students.find()
// { "_id" : ObjectId("62fa709d8b70547141c99a83"), "name" : "tula kai karayche ahe", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// { "_id" : ObjectId("62fa709d8b70547141c99a81"), "name" : "tula kai karayche ahe", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa732fa719aeca9309e270"), "name" : "Noone" }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd04"), "name" : "tula kai karayche ahe", "mis" : 11191002, "pincode" : 411005, "college" : "COEP", "email" : "gaikwadak19.meta@coep.ac.in", "__v" : 0 }
// { "_id" : ObjectId("62fa73ed2ab171c8d711cd06"), "name" : "tula kai karayche ahe", "college" : "Fergusson", "email" : "nikhilMore123@gmail.com", "__v" : 0 }
// >
