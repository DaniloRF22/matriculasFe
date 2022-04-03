const defaultMaestros = {
    maestros: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }

  export const maestrosReducer = (state = defaultMaestros, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'MAESTROS_LOADING':
        return {...state, isLoading: true};
      case 'MAESTROS_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar maestros']};
      case 'MAESTROS_SUCCESS':
        return {
          ...state,
          maestros:[...payload.maestros],
          isLoading: false,
          errors:[]
        };
      case 'MAESTROS_CLEAR':
        return {
          ...state,
          maestros: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }
