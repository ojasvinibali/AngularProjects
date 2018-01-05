import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  private _productService;
  constructor(productService: ProductService) {
    this._productService = productService;
    // moved to ngOnit
    // this.filteredProducts = this.products;
   // this._listFilter = 'cart';
  }

  onRatingClicked(message) {
     this.pageTitle = ' Product List ' + message;
  }
  get listFilter(): string {
  return this._listFilter;
  }

  set listFilter(value: string) {
      this._listFilter = value;
this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
// any can be replaced with interface

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
       product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage() {
      this.showImage = !this.showImage;
  }

  ngOnInit() {
    // console.log('Hey there');
    this.products = this._productService.getProducts().
    subscribe(products => {this.products = products;
                           this.filteredProducts = this.products;
    },
              error => this.errorMessage = <any>error);

    // since the constructor is exexcuted first and before this , product list will be empty
   // so we will move filtered productsin ngOnit as well
   this.filteredProducts = this.products;
   // since no data was coming as explained in notebook , we will have to move this line to subscribe()
  }
}
