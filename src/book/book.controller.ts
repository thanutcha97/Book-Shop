import { UseGuards, Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import Role from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { Purchease } from 'src/schema/purchase.schema';
import { PurcheaseBook } from './dto/create-purchease.dto';


@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}


  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Post('addbook')
  create(@Body() book : CreateBookDto ) {
    return this.bookService.create(book);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get('search/:name')
  findbyname(@Param('name') name: string) {
    return this.bookService.findbyname(name);
  }

  @Get('sortbyprice/:select')
  sortbyprice(@Param('select') select : string) {
    return this.bookService.sortbyprice(select);
  }

  @Get('sortbyamount/:select')
  sortbyamount(@Param('select') select : string) {
    return this.bookService.sortbyamount(select);
  }

}
