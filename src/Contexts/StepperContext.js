import React from "react";
import { createContext , useState } from "react";
export const StepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState({
    quantity:0,
    title:"",
    description:"",
    tags:[],
    image:[],
    weightUnit:"",
    weight:"",
    thumbnailImage:"",
    category:"",
    discount:0.0,
    installment:{
      available:"no",
      minWeight:0,
      deadline:0
    }
  });

  React.useEffect(() => {
    console.log("This is USER DATA:")
    console.log(userData)
  }, [userData])

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

// export function useStepperContext() {
//   const { userData, setUserData } = useContext(StepperContext);

//   return { userData, setUserData };
// }