import { Order } from "./Orders";

export class PaymentProcessor {
  processPayment(order: Order) {
    console.log("\n\tProcessing payment ...");
    console.log("\tPayment processed successfully!");
    console.log("\tAdded to accounting system!");
    console.log("\tEmail sent to customer!\n");
  }
}
