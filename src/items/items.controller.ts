import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService, Item } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItem: { name: string; description: string }): Item {
    return this.itemsService.create(createItem);
  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Item {
    return this.itemsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateItem: { name?: string; description?: string }): Item {
    return this.itemsService.update(Number(id), updateItem);
  }

  @Delete(':id')
  remove(@Param('id') id: number): { success: boolean } {
    const success = this.itemsService.remove(Number(id));
    return { success };
  }
}