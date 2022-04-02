const defaultGrados = {
    grados: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }

  export const gradosReducer = (state = defaultGrados, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'GRADOS_LOADING':
        return {...state, isLoading: true};
      case 'GRADOS_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar grados']};
      case 'GRADOS_SUCCESS':
        return {
          ...state,
          grados:[...payload.grados],
          isLoading: false,
          errors:[]
        };
      case 'GRADOS_CLEAR':
        return {
          ...state,
          grados: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }
