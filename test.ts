import test from "ava";
import { User, Product } from "./index";

test("Testeo la clase User", (t) => {
	const producto = new Product("celu", 200000);
	t.is(producto.name, "celu");
	t.is(producto.price, 200000);
});
test("Testeo la clase Product y sus métodos", (t) => {
	const datosDeusuario = new User("nicolas");
	const producto = new Product("celu", 200000);
	datosDeusuario.addProduct(producto);
	console.log(datosDeusuario.products);

	t.is(datosDeusuario.name, "nicolas");
	t.is(datosDeusuario.products[0].name, "celu");
	t.is(datosDeusuario.products[0].price, 200000);
});
