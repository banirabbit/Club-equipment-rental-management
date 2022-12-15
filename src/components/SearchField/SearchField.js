import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";


export function SearchField(props) {
    // handleSearch 延迟更新的值的方法
    // delay 延迟的毫秒数，不填则默认300ms
    // value 使 TextField 的 value 受控
    const { handleSearch, delay, value, ...other } = props;
    const [timer, setTimer] = useState(null);
    const [inputText, setInputText] = useState(props.defaultValue);
  
    useEffect(() => {
      clearTimeout(timer);
      setTimer(
        setTimeout(
          async () => {
            await handleSearch(inputText);
          },
          delay ? delay : 300
        )
      );
    }, [inputText]);
  
    useEffect(()=> {
      setInputText(value);
    }, [value]);

    
  
    return (
      <TextField
        id="DelaySearchTextFieldInput"
        onChange={(event) => {
          if (inputText === "" && event.target.value === inputText) {
            return;
          }
          setInputText(event.target.value);
        }}
        value={inputText}
        {...other}
        sx={{
          // 这个style是指placeholder超长后显示"..."
          ...other.sx,
          "[placeholder]": {
            textOverflow: "ellipsis"
          }
        }}
  
      />
    );
  }