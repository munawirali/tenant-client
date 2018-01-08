const tenantCompany = {
  tenantCompanyList:[]
}

const tenantCompanyReducers = (state = tenantCompany, action) => {
  switch(action.type){
    case 'FETCH_ALL':
      return {
        ...state, tenantCompanyList: action.payload.tenantCompanyList
      }
    // case 'UPDATE_LOGO_URL':
    //   return {
    //     ...s
    //   }
    default:
      return state
  }
}

export default tenantCompanyReducers
