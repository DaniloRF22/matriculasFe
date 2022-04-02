const defaultJornadas = {
    jornadas: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }

  export const jornadasReducer = (state = defaultJornadas, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'JORNADA_LOADING':
        return {...state, isLoading: true};
      case 'JORNADA_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar jornadas']};
      case 'JORNADA_SUCCESS':
        return {
          ...state,
          jornadas:[...payload.jornadas],
          isLoading: false,
          errors:[]
        };
      case 'JORNADA_CLEAR':
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