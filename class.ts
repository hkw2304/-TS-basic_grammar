

class WaterPuritier{
    private waterAmount : number;
    constructor(waterAmount : number){
        this.waterAmount = waterAmount;
    }
    public wash(){
        if(this.waterAmount > 0){
            console.log('정수기 동작 성공');
        }
    }
}
var water = new WaterPuritier(30);
water.wash();
// water.waterAmount = 30;