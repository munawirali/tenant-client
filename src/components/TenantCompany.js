import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAllTenantCompanyAPI, uploadToserverAPI, deleteImageServerAPI } from '../actions/tenant_company'

class TenantCompanyList extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.props.fetchAllTenantCompany(e.target.value)
  }
  componentDidMount(){
    this.props.fetchAllTenantCompany()
    // console.log('asdfasdf', this.props.tenantCompanyList);
  }
  render(){
    // console.log(this.props.tenantCompanyList);
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Company Id</th>
              {/* <th>Company name</th>
              <th>Address</th>
              <th>Contact Person</th>
              <th>Email</th> */}
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tenantCompanyList && this.props.tenantCompanyList.map((tenant, index)=>{
              // let logo = tenant.logo_url+'.png'
              return(
                <tr key={index}>
                  <td>{tenant.company_id}</td>
                  <td>
                    <img src={tenant.logo_url} alt="">
                    </img>
                    {/* {tenant.logo_url} */}
                  </td>
                  <td>
                    <button className="button primary" onClick={()=>{this.props.uploadToServer(tenant.company_id)}}>Upload to Server</button>
                    <button className="button primary" onClick={()=>{this.props.deleteImageServer(tenant.company_id)}}>Delete Image</button>
                  </td>
                  {/* <td>{tenant.company_name}</td> */}
                  {/* <td>{tenant.addres}</td>
                  <td>{tenant.contact_person}</td>
                  <td>{tenant.email}</td>
                  <td>{tenant.logo_url}</td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tenantCompanyList: state.tenantCompanyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTenantCompany: () => dispatch(fetchAllTenantCompanyAPI()),
    uploadToServer: (id) => dispatch(uploadToserverAPI(id)),
    deleteImageServer: (id) => dispatch(deleteImageServerAPI(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantCompanyList)
