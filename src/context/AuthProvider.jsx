import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userdata, setUserdata] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Eresponse = await axios.get("https://employees-management-system-backend.vercel.app/employees");
        const Aresponse = await axios.get("https://employees-management-system-backend.vercel.app/admin");
        const employees={...Eresponse.data};
        const admin={...Aresponse.data};

        setUserdata({
          employees: employees,
          admin: admin
        });

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{userdata}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;