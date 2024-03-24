export interface ILocation {
  name: string;
  cars: ICar[] | string[];
}

export interface ICar {
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
}