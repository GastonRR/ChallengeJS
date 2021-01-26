import React from 'react'
import{ Route, Redirect } from 'react-router-dom'


export const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest} 
            render={props => {
                const isAuthenticated = localStorage.getItem("user") ? true : false;
                if(isAuthenticated === rest.Auth){

                    return <Component {...props}/>;
                
                   
                }else{
                   
                     return <Redirect to={{
                        pathname: rest.Redirect,
                        state: {
                            from: props.location
                        }
                    }}/> 
                }
            }
        }/>
    )
}