const defaultMatriculas = {
    matriculas: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }
  export const matriculasReducer = (state = defaultMatriculas, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'MATRICULAS_LOADING':
        return {...state, isLoading: true};
      case 'MATRICULAS_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar matriculas']};
      case 'MATRICULAS_SUCCESS':
        return {
          ...state,
          matriculas:[...payload.matriculas],
          isLoading: false,
          errors:[]
        };
      case 'MATRICULAS_CLEAR':
        return {
          ...state,
          matriculas: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }