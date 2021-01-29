export default class LongTermFilter {

    price: Array<number> | null
    forrentby: string | null
    unittype: string | null
    numberbedrooms: string | null
    numberbathrooms: string | null
    agreementtype: string | null
    petfriendly: string | null
    hydro: number | null
    heat: number | null
    water: number | null
    parking: number | null
    furnished: number | null
    areainfeet: Array<number> | null
    laundryinunit: number | null
    laundryinbuilding: number | null
    dishwasher: number | null
    fridgefreezer: number | null
    airconditioning: number | null
    yard: number | null
    balcony: number | null
    elevatorinbuilding: number | null
    gym: number | null
    pool: number | null
    concierge: number | null
    security: number | null
    bicycleparking: number | null
    storagespace: number | null

    constructor() {
        this.price = [0, 5000]
        this.forrentby = null

        this.unittype= null
        this.numberbedrooms= null
        this.numberbathrooms= null
        this.agreementtype= null
        this.petfriendly= null
        this.hydro= null
        this.heat= null
        this.water= null
        this.parking= null
        this.furnished= null
        this.areainfeet= [0, 3000]
        this.laundryinunit= null
        this.laundryinbuilding= null
        this.dishwasher= null
        this.fridgefreezer= null
        this.airconditioning= null
        this.yard= null
        this.balcony= null
        this.elevatorinbuilding= null
        this.gym= null
        this.pool= null
        this.concierge= null
        this.security= null
        this.bicycleparking= null
        this.storagespace= null
    }

}