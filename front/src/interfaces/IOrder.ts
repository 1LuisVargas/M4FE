import IProduct from "./IProduct";
import IUser from "./IUser";

interface IOrder {
    id: number;
    status: string;
    date: Date;
    user: IUser;
    products: IProduct[];
}

export default IOrder;