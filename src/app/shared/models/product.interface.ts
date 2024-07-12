export interface Iproduct{
    pname: string;
    pdetails: string;
    pstatus: ProductStatus;
    id: string;
}

export enum ProductStatus{
    InProgress= "InProgress",
    Dispatched="Dispatched",
    Delivery="Delivery"
}