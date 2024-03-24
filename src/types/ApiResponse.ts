export interface ILocation {
  _id: string;
  name: string;
  cars: ICar[] | string[];
  createdAt: string;
  updatedAt: string;
}

export interface ICar {
  _id: string;
  title: string;
  description?: string;
  rentPerDay: number;
  imageUrl: string;
  isAvailable: boolean;
  seats: number;
  bags: number;
  dors: number;
  ac: boolean;
  automatic: boolean;
  fuel: "petrol" | "diesel" | "cng" | "electric";
  location: ILocation | string;
  createdAt: string;
  updatedAt: string;

}