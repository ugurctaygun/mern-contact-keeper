import React, {useContext} from 'react'
import AlertContext from '../../context/Alert/alertContext'


const Alerts = () => {
    const alertContext = useContext(AlertContext);

    return (
        alertContext.alerts.length > 0 && 
        alertContext.alerts.map(alert => (
            <div className={`alert alert-${alert.type}`} key={alert.id}>
                <i className="fas fa-info-circle"/> {alert.msg}
            </div>
        ))
    );
};

export default Alerts;
