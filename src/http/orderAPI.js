import { $host} from "./index";


export const createOrder = async ( email,phone,address_real,pocht_index,track_number,data,status,address,punkt,FIO,) => {
    const {order} = await $host.post('api/order', 
    {   email:email,
        phone:phone,
        address_real:address_real,
        pocht_index:pocht_index,
        track_number:track_number,
        data:data,
        status:status,
        address:address,
        punkt:punkt,
        FIO:FIO,
    })
    return order
}


export const getOrder = async (track_number) => {
    const data1 = await $host.put('api/order/get', {
        track_number : track_number,
    })
    return data1
}


