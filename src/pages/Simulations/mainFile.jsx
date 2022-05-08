import React from 'react'
import Iscomment from './IsComment'
import LexicalAnalyser from './LexicalAnalyser'
import Identifier from './Identifier'
import Operator from './Operator'

export const MainFile = (props) => {
    if(props.title==="iscomment")
        return (<Iscomment/>)
    else if (props.title==="lexicalanalyzer")
        return (<LexicalAnalyser/>)
    else if (props.title==="checkidentifier")    
        return (<Identifier/>)
    else if (props.title === "operator")
        return(<Operator/>)
}
