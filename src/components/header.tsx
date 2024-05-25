import { TagHeader } from '@/styles/Home.style';
import { useState } from 'react';
import { CartControl } from './cart/cart-control';
import { CartMenu } from './cart/cart-menu';

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <TagHeader data-testid='heading'>
      <h1>
        MKS
        <span>Sistemas</span>
      </h1>
      <CartControl toggleDrawer={toggleDrawer} />
      <CartMenu open={open} toggleDrawer={toggleDrawer} />
    </TagHeader>
  );
}
