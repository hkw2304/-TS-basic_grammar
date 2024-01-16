var WaterPuritier = /** @class */ (function () {
    function WaterPuritier(waterAmount) {
        this.waterAmount = waterAmount;
    }
    WaterPuritier.prototype.wash = function () {
        if (this.waterAmount > 0) {
            console.log('정ㅎ수기 동작 성공');
        }
    };
    return WaterPuritier;
}());
var water = new WaterPuritier(30);
water.wash();
