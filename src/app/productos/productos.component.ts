import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos';
import {Articulos} from '../lista-productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {

  Articulos = Articulos;
  ProductoSeleccionado: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  Seleccionar(Producto: Producto): void{
    this.ProductoSeleccionado = Producto;
    console.log(this.ProductoSeleccionado);
  }

}

