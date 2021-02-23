// https://testing-library.com/docs/react-testing-library/setup/#custom-render
import "regenerator-runtime/runtime";
import React from "react";
import { render } from '@testing-library/react'
import {BrowserRouter} from "react-router-dom"
import {QueryClient, QueryClientProvider} from 'react-query'
import {themeDark} from '../styles'
import {ThemeProvider} from 'styled-components'
import {StoreContextProvider} from "../store/StoreProvider"

const queryClient = new QueryClient();

const AppProviders = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <StoreContextProvider>
                <ThemeProvider theme={themeDark}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </ThemeProvider>
            </StoreContextProvider>
        </QueryClientProvider>
    )
}

const customRender = (ui, options) => render(ui, { wrapper: AppProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }