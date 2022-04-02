const defaultEstudiantes = {
    estudiantes: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }

  export const estudiantesReducer = (state = defaultEstudiantes, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'ESTUDIANTES_LOADING':
        return {...state, isLoading: true};
      case 'ESTUDIANTES_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar estudiantes']};
      case 'ESTUDIANTES_SUCCESS':
        return {
          ...state,
          estudiantes:[...payload.estudiantes],
          isLoading: false,
          errors:[]
        };
      case 'ESTUDIANTES_CLEAR':
        return {
          ...state,
          estudiantes: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }
