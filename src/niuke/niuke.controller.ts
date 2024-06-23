import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from "@nestjs/common";
import { NiukeService } from "./niuke.service";

@Controller('niuke')
export class NiukeController {

  constructor(private readonly niukeService: NiukeService) {}
  @Get()
  findAll(){
    return this.niukeService.getAll()
  }

  @Get('content')
  getContent(): object {
    return {
      title: 'test',
      content: 'test'
    };
  }

  @Get('page/:id')
  getContentById(@Param('id') id: string): string {
    return `this is ${id} page`;
  }

  @Post()
  postLogin(@Body() body){
    return body
  }

  @Patch('id')
  update(@Param('id') id:string,@Body() body){
    return 'this is update action'
  }

  @Delete('id')
  delete(@Param('id') id:string,@Body() body){
    return 'this is delete action'
  }

  @Get('query')
  findOne(@Query() pageQuery){
    const {limit,offset} = pageQuery
    return `this limit: ${limit},offset:${offset}`
  }

//   http://localhost:3000/niuke/query?limit=20&offset=10
}

