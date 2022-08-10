import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    // constructor(private userService:UserService){} //it is shorthand .// this is userServicce is injectedinto to the user controller
private userService;
constructor(){
    this.userService=new UserService();
}
    @Get()
    getUsers() {
        // return 'Hello Akshay you studying nest js';
    // return {name:'Ladoo',email:'ladoo@kajukatli.com'};
    return this.userService.get();
    }
 
    @Post()
  store(@Req() req: Request){
    // return "I am Storing the data into DataBase ";
    return this.userService.create(req);
 }
 
 @Patch('/:userId')
 update(@Req() req: Request,@Param() param:{userId:number}){
    // return "I am Storing the data into DataBase ";
    return this.userService.update(req.param);

 }

 @Get('/:userId')
 getUser(@Param() param:{userId:number}){
   return this.userService.show(param);
 }
 //this is for delteyyuutuyu
 @Delete('/:userId')
 deleteUser(@Param() param:{userId:number}){
  return this.userService.delete(param);
 }
}
