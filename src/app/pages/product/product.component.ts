import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  loading: boolean = true;
  productList: IProduct[] = []
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      console.log(data)
      this.productList = data;
      this.loading = false;
    })
  }

  navigate(id:number): void{
      this._router.navigate(['/product', id]);
    }
}
