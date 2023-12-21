'use client'
import React, { useState } from 'react';

type WithLoadingProps = {
  isLoading: boolean;
  [key: string]: any; // to allow other props
};

function WithLoadingWrapper<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return function EnhancedComponent({ isLoading, ...props }: WithLoadingProps & P) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props as P} />;
  };
}

function NumberInComponent({ number }: { number: number }) {
    return <li>{number}</li>;
}

const WithLoadingNumberInComponent = WithLoadingWrapper(NumberInComponent);

export default function ListComponentWithHighOrderComponent () {
    const [numbers, setNumbers] = useState<number[]>([0, 1 , 4]);
    const [isLoading, setIsLoading] = useState(false);
    async function addRandomNumber() {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNumbers([...numbers, Math.random()]);
        setIsLoading(false);

    }
    return <>
        <h2>list</h2>
        <button onClick={addRandomNumber}>add</button>
        <ul>
            {numbers.map((number, index) => <WithLoadingNumberInComponent isLoading={isLoading} key={index} number={number} />)}
        </ul>
    </>
}