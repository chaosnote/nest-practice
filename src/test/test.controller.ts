import { Controller, Get, Post, Res, Req, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ResProvider } from '../shared/res.provider';

@Controller("test")
export class TestController
{
    constructor() { }

    @Get()
    async _get( @Res() res, @Req() req)
    {
        res.json(ResProvider(1,"message from server"))
        //else throw new HttpException(ResProvider(0,"keep-live unknow action"), HttpStatus.FORBIDDEN)
    }
    @Post()
    async _post( @Res() res, @Req() req, @Body("message") body)
    {
        console.log("data from client", body ) ;
        res.json(ResProvider(1,`return -> ${body}`))
        //else throw new HttpException(ResProvider(0,"keep-live unknow action"), HttpStatus.FORBIDDEN)
    }
}