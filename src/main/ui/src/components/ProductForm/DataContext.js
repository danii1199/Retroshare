import { createContext, useState, useContext } from 'react'

export const DataContext = createContext()

export const DataProvider = ({children}) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData(prevData => ({
      ...prevData,
      ...values
    }))
  }

  return <DataContext.Provider value={{data, setValues}}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)



