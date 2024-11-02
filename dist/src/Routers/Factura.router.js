"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Factura_controller_1 = require("../Controllers/Factura.controller");
const router = express_1.default.Router();
router.post('/carrito/insertar/actualizar', Factura_controller_1.insertarProductoCarrito);
router.put('/carrito/actualizar', Factura_controller_1.actualizarCarrito);
router.delete('/carrito/producto/eliminar', Factura_controller_1.eliminarProductoCarrito);
router.get('/carrito/:correo', Factura_controller_1.obtenerCarrito);
router.put('/carrito/subtotal', Factura_controller_1.obtenerSubtotalImpuestos);
router.get('/departamentos', Factura_controller_1.obtenerDepartamentos);
router.get('/ciudad/:idDepartamento', Factura_controller_1.getCiudades);
router.get('/detalle/:idfactura', Factura_controller_1.getDeatlleFactura);
router.delete('/eliminar/carrito/:idfactura', Factura_controller_1.borrarCarrito);
router.post('/envio', Factura_controller_1.guardarPrecioEnvio);
exports.default = router;
