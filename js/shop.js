//----------------------------------------------------------------
// shop (contains the products)
//

function shop() {
    this.products = [
        new product("DWJ", "Dark Wash Jeans", "Slim fit jeans in dark wash with zip fly, 100% Cotton, Machine Washable", 10),
        new product("CNJ", "Crew Necked Jumper", "Crew neck jumper in berry made from 100% ultra soft Merino wool. This jumper is a luxury garment for a smart casual look. 100% Merino Wool, Machine Washable", 12),
        new product("SCT", "Stretch Chino Trousers", "Stretch chino trousers in burgundy with added stretch for extra comfort. Featuring a zip fly and button fastening.", 16),
        new product("TDW", "Tailored Dress Waistcoat", "Firth tailored fit dinner waistcoat in black with polka dot lining. 80% Polyester 20% Viscose. Lining: 100% Polyester.", 20),
        new product("WDS", "White Dress Shirt", "his regular fit easy care dinner shirt in white has pleat front detailing removable studs to placket metal cufflinks and forward point collar.", 14),
        new product("RTS", "Red T Shirt", "Short sleeve t-shirt in red with acid wash effect.", 5),
        new product("BPS", "Black Polo Shirt", "Short sleeve polo shirt in navy with a honeycomb textured fabric. Featuring a button down collar.", 8),
        new product("CCS", "Collar Checked Shirt", "Long sleeve tartan check shirt in black and navy with a grandad collar and functional chest pocket.", 12),
        
        
    ];
    
}
shop.prototype.getProduct = function (code) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].code == code)
            return this.products[i];
    }
    return null;
}
