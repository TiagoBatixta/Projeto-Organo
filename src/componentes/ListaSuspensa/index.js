import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className="Lista">
            <label>
                {props.label}
                <select>
                    {props.itens.map(item =>{ 
                        return <option key = {item}>{item}</option>})}
                </select>
            </label>
        </div>
    )
} 

export default ListaSuspensa