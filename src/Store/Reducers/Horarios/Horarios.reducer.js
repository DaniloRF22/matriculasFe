const defaultHorarios = {
    horarios: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }

  export const horariosReducer = (state = defaultHorarios, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'HORARIO_LOADING':
        return {...state, isLoading: true};
      case 'HORARIO_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar el Horario']};
      case 'HORARIO_SUCCESS':
        return {
          ...state,
          horarios:[...payload.horarios],
          isLoading: false,
          errors:[]
        };
      case 'HORARIO_CLEAR':
        return {
          ...state,
          horarios: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }