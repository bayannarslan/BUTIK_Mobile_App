import React from "react";

export interface ContextProps {
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
  product: string;
  setProduct: React.Dispatch<React.SetStateAction<any>>;
  price: Number;
  setPrice: React.Dispatch<React.SetStateAction<any>>;
  quantity: Number;
  setQuantity: React.Dispatch<React.SetStateAction<any>>;
  amount: Number;
  setAmount: React.Dispatch<React.SetStateAction<any>>;
  cart: any;
  setCart: React.Dispatch<React.SetStateAction<any>>;
}