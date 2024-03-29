import * as React from 'react';
import move from 'array-move';
import { Item } from './Item';
import { usePositionReorder } from './usePositionReorder';



export const DropIn = ({
  onDrop = () => {},
  children,
  data,
  whileHover = { scale: 1.03 },
  whileTap = { scale: 1.12 },
  dragElastic = 1,
  motionPreset = 'tight',
}) => {
  const [order, updatePosition, updateOrder] = usePositionReorder(children);
  return (
    <>
      {order.map((child, i) => (
        <Item
          dragElastic={dragElastic}
          element={child.props?.element || 'div'}
          i={i}
          key={child.key}
          motionPreset={motionPreset}
          updatePosition={updatePosition}
          updateOrder={updateOrder}
          onDrop={() => onDrop(order)}
          style={child.props?.style || {}}
          whileHover={whileHover}
          whileTap={whileTap}
        >
          {child}
        </Item>
      ))}
    </>
  );
};

export * from './DragItem';
