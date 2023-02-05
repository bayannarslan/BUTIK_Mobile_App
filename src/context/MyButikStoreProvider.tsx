import { createContext, useState } from 'react';

import type { ContextProps } from './ContextProps';

export const MyButikStoreContext = createContext<ContextProps | null>(null);

interface Props {
  children: React.ReactNode;
}

export const MyButikStoreProvider: React.FC<Props> = (props) => {
  const [profile, setProfile] = useState<any>({});
  const [product, setProduct] = useState<ContextProps['product']>('');
  const [price, setPrice] = useState<ContextProps['price']>(0);
  const [quantity, setQuantity] = useState<ContextProps['quantity']>(0);
  const [amount, setAmount] = useState<ContextProps['amount']>(0);

  return (
    <MyButikStoreContext.Provider 
      value={{
        profile,
        setProfile,
        product,
        setProduct,
        price,
        setPrice,
        quantity,
        setQuantity,
        amount,
        setAmount
      }}
    >
      {props.children}
    </MyButikStoreContext.Provider>
  )
};