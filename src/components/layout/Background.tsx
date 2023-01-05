import React, { ReactElement, ReactNode } from 'react'
import styles from "./styles.module.css"
function Background({ children }: { children?: ReactNode }): ReactElement {
    return (
        <div className={styles.background}>
            <div className={styles.backgroundCover}>
                {
                    children
                }
                <footer className='text-center text-white mt-8'>made with ❤️ igweze hycient </footer>
            </div>
        </div>
    )
}

export default Background