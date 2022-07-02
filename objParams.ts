import type { Properties }  from './types'
function walk(props: Properties){
    console.log(props)
}

// walk({distance:"30km",speed:"60km/hr",time:"30mins"})
export {};

let value : Properties {
    distance = "",
    speed = ""
}
walk("")