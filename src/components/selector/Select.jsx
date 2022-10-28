import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({label,options,val,setVal}) {

console.log(options,'@@@@')

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <div >
      <FormControl variant="standard" sx={{ m: 1, width: 150 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
    {label}
  </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={val}
          onChange={handleChange}
          label="Currency"
        >
            {options.map((elem,index)=>{
               return( 
                index < 10 &&
                <MenuItem value={elem.address}> 
                <img src={elem.logoURI} 
                style={{width:26,height:26}}
                alt = 'logo'
                /> 
                 <span style={{marginLeft:3}}>{elem.name}</span></MenuItem>
                )
            })}
        </Select>
      </FormControl>
    </div>
  );
}
