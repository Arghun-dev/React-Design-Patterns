import React from "react";

/**
 * This is HOC which you pass components to it and it automatically consoles the props for you.
 */

export const printProps = (Component: React.JSXElementConstructor<any>) => {
  return (props: any) => {
    console.log(props);

    return <Component {...props} />;
  };
};
