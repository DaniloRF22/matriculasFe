const defaultSecciones = {
    secciones: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }

  export const seccionesReducer = (state = defaultSecciones, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'SECCION_LOADING':
        return {...state, isLoading: true};
      case 'SECCION_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar secciones']};
      case 'SECCION_SUCCESS':
        return {
          ...state,
          secciones:[...payload.secciones],
          isLoading: false,
          errors:[]
        };
      case 'SECCION_CLEAR':
        return {
          ...state,
          secciones: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }