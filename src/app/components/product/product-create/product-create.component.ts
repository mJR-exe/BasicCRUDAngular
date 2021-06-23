import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: ''
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    if (this.product.name != '' && this.product.price != '') {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage('Operação realizada com sucesso!')
        this.router.navigate(['/products'])
      })
    }else{
      this.productService.showErrorMessage('Por favor, preencha os campos...')
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
