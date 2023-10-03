import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const authInfo = { name: 'khal bil pokur nodi' };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;

/***
 * 1. Create Context >> AuthContext + export
 * 2. Provider >>> AuthContext.Provider
 * 3. set provider with value >> value={authInfo}
 * 4. to use context import AuthProvider to main.jsx file
 * 4. to access all route we have to input all routers as children middle of the context.provider component. 
 */