import React, { FunctionComponent } from 'react';
import Nav from './Nav'
import styles from '../styles/Layout.module.css';
import Header from './Header';


const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header></Header>
                    {children}
                </main>
            </div>
        </>
    )
}


export default Layout;