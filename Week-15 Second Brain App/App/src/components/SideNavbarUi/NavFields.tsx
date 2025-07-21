interface NavFieldProps{
  text: String,
  startIcon: React.ReactElement
}

const NavFields = (props: NavFieldProps)=>{
  return <div className="flex gap-3 items-center hover:border hover:bg-gray-100 h-[6vh] pl-7">
      <div className="pt-2">
      {props.startIcon}
      </div>
      <span className="text-xl font-semibold mt-2">
      {props.text}
      </span>
  </div> 
}

export default NavFields;