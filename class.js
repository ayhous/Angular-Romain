var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    return Invoice;
}());
var UnpaideInvoices = /** @class */ (function (_super) {
    __extends(UnpaideInvoices, _super);
    function UnpaideInvoices() {
        var _this = _super.call(this) || this;
        console.log(_this.price);
        console.log(_this.deadline);
        return _this;
        //la sous class n a pas accés a la variable tva
    }
    return UnpaideInvoices;
}(Invoice));
var invoice = new Invoice();
console.log(invoice.price);
//la proprieté tva est privée accessible que a l interieur de la class.
//console.log(invoice.tva);
//accessible que dans la classe ou ses sous class
//console.log(invoice.deadline);
