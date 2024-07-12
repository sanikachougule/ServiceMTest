export interface Ipassanger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate?: number | null;
    children?:Ichild[] | null;
} 
 interface Ichild{
  name:string,
  age:number
 }