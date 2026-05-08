import React, { useEffect, useState } from 'react';

const AnimatedList = ({ children }) => {
  const [items, setItems] = useState(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        newItems.pop(); // Remove the last item
        newItems.unshift(children[Math.floor(Math.random() * children.length)]); // Add a new item at the top
        return newItems;
      });
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="overflow-y-auto h-full">
      {items}
    </div>
  );
};

export default AnimatedList;
