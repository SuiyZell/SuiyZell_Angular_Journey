import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Product, products} from "../products";
import {CartService} from "../cart.service";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: Product | undefined;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) { }

    addToCart(product:Product){
        this.cartService.addToCart(product);
        window.alert('你的商品已经成功添加到购物车中！')
    }

    ngOnInit(): void {
        //获取product id，从current route中
        const routeParams = this.route.snapshot.paramMap
        const productIdFromRoute = Number(routeParams.get('productId'))

        //Find the product that correspond with the id in route
        this.product = products.find(product => product.id === productIdFromRoute)
    }
}
