import PropTypes from 'prop-types'
import style from "./Input.module.css"

export default function Input({type, placeholder, name, reference}) {
  return (
    <div className={style.inputDiv}>
      <input type={type} name={name} id={name} placeholder={placeholder} className={style.input} ref={reference}/>
    </div>
  )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string
}
