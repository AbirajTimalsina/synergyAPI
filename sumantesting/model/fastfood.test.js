//creating function
describe('test of fastfood Schema', ()=>{
test('should fastfood',()=>{
return fastfood.create({
})
})
})

//checking connection
const fastfood = require('../../models/fastfood');
const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
beforeAll( async ()=>{
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
})
afterAll(async ()=>{
await mongoose.connection.dropDatabase();
await mongoose.connection.close();
})
describe('test of fastfood Schema', ()=>{
test('should fastfood',()=>{
return fastfood.create({

})
})
})

// checking function without creating model
const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
beforeAll( async ()=>{
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
})
afterAll(async ()=>{
await mongoose.connection.dropDatabase();
await mongoose.connection.close();
})
describe('test of fastfood Schema', ()=>{
test('should fastfood',()=>{
return fastfood.create({
    fastfoodpicture:'',
    fastfoodname:'noodles',
    fastfoodprice:'200',

}).then((response)=>{
 
expect(response.fastfoodpicture).toBe('');
expect(response.fastfoodname).toBe('noodles');
expect(response.fastfoodprice).toBe('200');
})
})
})

// function after creating model for fastfood
const fastfood = require('../../models/fastfood');
const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
beforeAll( async ()=>{
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
})
afterAll(async ()=>{
await mongoose.connection.dropDatabase();
await mongoose.connection.close();
})
describe('test of fastfood Schema', ()=>{
test('should fastfood',()=>{
return fastfood.create({
    fastfoodpicture:'',
    fastfoodname:'noodles',
    fastfoodprice:'200',

}).then((response)=>{
 
expect(response.fastfoodpicture).toBe('');
expect(response.fastfoodname).toBe('noodles');
expect(response.fastfoodprice).toBe('200');
})
})
})