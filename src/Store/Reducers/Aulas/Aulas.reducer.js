const defaultAulas = {
    aulas: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }
  export const aulasReducer = (state = defaultAulas, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'AULAS_LOADING':
        return {...state, isLoading: true};
      case 'AULAS_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar aulas']};
      case 'AULAS_SUCCESS':
        return {
          ...state,
          aulas:[...payload.aulas],
          isLoading: false,
          errors:[]
        };
      case 'AULAS_CLEAR':
        return {
          ...state,
          aulas: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }