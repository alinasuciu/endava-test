export default function InputTextComponent({cssClasses, error, id, label, required, ...rest}) {
    return (
    <label
        {label}    
    >
      <div>
        <input
            type="text"
            className={cssClasses}
            {...rest}
        />
      </div>
    </label>
    )
}