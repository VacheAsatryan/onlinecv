export const inityalAbouth = {
item : false,
itemSec:false
};
export  const ADD ='add';
export  const ADDSEC ='addSec';

export function abouthReducer(state=inityalAbouth,action){
if(action.type === ADD){
    return{
        ...state,
        item:action.payload.item
    }
    
}
else if(action.type === ADDSEC ){
    return{
        ...state,
        itemSec:action.payload.itemSec
    }
}
return state;
};
