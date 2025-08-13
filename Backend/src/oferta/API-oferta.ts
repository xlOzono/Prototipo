import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertaService } from './oferta.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { SetRespuestaDto } from './dto/setRespuetas.dto';

@Controller('oferta')
export class OfertaController {
  constructor(private readonly ofertaService: OfertaService) {}

  @Post()
  create(@Body() createOfertaDto: CreateOfertaDto) {
    return this.ofertaService.create(createOfertaDto);
  }

  @Get('Listado')
  getListado() {
    return this.ofertaService.getListado();
  }

  @Get('')
  findOne(@Param('id') id: string) {
    return this.ofertaService.findOne(+id);
  }
  
  @Patch('setRespuestas')
  setRespuestas(@Body() dto: SetRespuestaDto) {
    return this.ofertaService.setRespuestas(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertaService.remove(+id);
  }
}
