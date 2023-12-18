import Alert from 'react-bootstrap/Alert'
import { useContext } from 'react'
import ErrorContext from '../contexts/errorContext'

export default function ErrorPopup() {
    const { error, setError } = useContext(ErrorContext)

    if (!error?.hasError) {
        return null
    }

    return (
        <div className="alert-wrapper">
            <Alert 
            
                style={{zIndex: "6"}}
                className={`${error?.hasError ? 'show-alert' : ''}`} 
                variant={'danger'} 
                onClose={() => {
                  setError({ hasError: false })
              }} 
              dismissible
            >
                {error?.message}
            </Alert>
        </div>
    )
}