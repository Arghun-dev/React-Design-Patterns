import { useState, useEffect } from "react";
import type { Person } from "../LayoutComponents/Lists/data";

/**
 * This is HOC which you pass component as first argument and second argument is userId and it automatically fetches the user data with the id and pass it as additional prop to that component.
 * This shows how to use HOC to load data from server and pass it to the component that wrappes
 */

export const withUser = (
  Component: React.JSXElementConstructor<any>,
  userId: string
) => {
  return (props: Person) => {
    const [user, setUser] = useState<Person | null>(null);

    useEffect(() => {
      const loadData = async () => {
        const response = await fetch("http://localhost:8000/users/" + userId);
        const data = await response.json();
        setUser(data);
      };

      loadData();
    }, []);

    return <Component {...props} user={user} />;
  };
};
