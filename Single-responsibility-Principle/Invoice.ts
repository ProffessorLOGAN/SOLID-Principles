import { Product } from "./Orders";

export class Invoice {
  generateInvoice(products: Product[], amount: number) {
    console.warn(`
        Invoice Date: ${new Date().toDateString()}
        ------------------------------------------
        Product Name\tPrice
        `);

    products.forEach((product) => {
      console.log(`\t${product.name}\t\t${product.price}`);
    });

    console.log("\t------------------------------------------");
    console.log(`\t\t\tTotal: ${amount}`);
  }
}
