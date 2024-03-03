const Backdrop = ({onClick}) => {
  return (
    <div className="absolute inset-0" onClick={onClick}></div>
  )
}

export default Backdrop