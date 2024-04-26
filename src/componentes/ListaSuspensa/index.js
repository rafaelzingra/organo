import './index.css'

const ListaSuspensa = (props) => {
    
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select>
            {props.items.map(item => <option key={item}>{item}</option>)} 
            </select>
        </div>
    )
    
}

export default ListaSuspensa