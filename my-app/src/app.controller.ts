import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')
export class AppController{
    @Get()
    getUsers() {
        // return 'Hello Akshay you studying nest js';
    return {name:'Ladoo',email:'ladoo@kajukatli.com'}
    }
 
    @Post()
 store(@Req() req: Request){
    // return "I am Storing the data into DataBase ";
 return req.body;
 }
 
 @Patch('/:userId')
 update(@Req() req: Request){
    // return "I am Storing the data into DataBase ";
 return req.body;
 }

 @Get('/:userId')
 getUser(@Param() params:{userId:number}){
   return params;
 }
 
 @Delete('/:userId')
 deleteUser(@Param() params:{userId:number}){
   return params;
 }
}