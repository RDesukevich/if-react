import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {onDelete, onToggleProp, salary, name, surname, increase, rise} = props
        let className = 'list-group-item d-flex justify-content-between';

        if (increase) {
            className+=' increase';
        }

        if (rise) {
            className+= ' like';
        }
        return (
            <li className={className}>
                <span onClick={onToggleProp} data-toggle='rise' className="list-group-item-label">{name} {surname}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleProp}
                            type="button"
                            data-toggle='increase'
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
}

export default EmployeesListItem;