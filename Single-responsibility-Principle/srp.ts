// Single responsibility principle

import { Invoice } from "./Invoice";
import { Product, Order } from "./Orders";
import { PaymentProcessor } from "./PaymentProcessor";
import { PricingCalculator } from "./PricingCalculator";

const product1 = new Product("1", "Laptop", 100);
const product2 = new Product("2", "Iphone", 800);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const pricingCalculator = new PricingCalculator();
const total = pricingCalculator.calculatePricing(order.getProducts());

const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);
