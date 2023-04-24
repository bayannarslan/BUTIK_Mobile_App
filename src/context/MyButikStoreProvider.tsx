import { createContext, useState } from 'react';

import type { ContextProps } from './ContextProps';

export const MyButikStoreContext = createContext<ContextProps | any>(null);

interface Props {
  children: React.ReactNode;
}

const MyButikStoreProvider: React.FC<Props> = (props) => {
  const [profile, setProfile] = useState<any>({});
  const [product, setProduct] = useState<ContextProps['product']>('');
  const [price, setPrice] = useState<ContextProps['price']>(0);
  const [quantity, setQuantity] = useState<ContextProps['quantity']>(0);
  const [amount, setAmount] = useState<ContextProps['amount']>(0);
  const [cart, setCart] = useState<ContextProps['cart']>([]);

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
        setAmount,
        cart,
        setCart,
      }}
    >
      {props.children}
    </MyButikStoreContext.Provider>
  )
};

export default MyButikStoreProvider