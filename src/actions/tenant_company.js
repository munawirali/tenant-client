import axios from 'axios'
// import { push } from 'react-router-redux'

export const fetchAllTenantCompany = (tenantCompanyList) => {
  return {
    type: 'FETCH_ALL',
    payload: {
      tenantCompanyList
    }
  }
}

export const fetchAllTenantCompanyAPI = () => {
  return(dispatch, getState) => {
    axios.get('http://localhost:3500/tenant_company')
    .then(({ data }) => {
      // console.log(data.data);
      dispatch(fetchAllTenantCompany(data.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const uploadToserverAPI = (id) => {
  return(dispatch, getState) => {
    axios.put('http://localhost:3500/tenant_company/'+id)
    .then(({ data }) => {
      // console.log('joss', data);
      dispatch(fetchAllTenantCompanyAPI())
    })
  }
}

export const deleteImageServerAPI = (id) => {
  return(dispatch, getState) => {
    axios.delete('http://localhost:3500/tenant_company/'+id)
    .then(({ data }) => {
      // console.log('joss', data);
      dispatch(fetchAllTenantCompanyAPI())
    })
  }
}
