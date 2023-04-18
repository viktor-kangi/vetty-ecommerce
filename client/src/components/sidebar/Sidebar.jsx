import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Sidebar = () => {
  
  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Admin Panel</span>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className="title">MAIN MENU</p>
            <li>
              <a href="/dashboard">
                <DashboardIcon className='icon' />
                <span>Dashboard</span>
              </a>
            </li>
            <p className="title">LISTS MENU</p>
            <li>
              <a href="/users">
                <GroupIcon className='icon' />
                <span>Users</span>
              </a>
            </li>
            <li>
            <a href="/products">
              <Inventory2Icon className='icon' />
              <span>Products</span>
            </a>
          </li>
            <li>
              <a href="/orders">
                <ProductionQuantityLimitsIcon className='icon' />
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="/delivery">
                <LocalShippingIcon className='icon' />
                <span>Delivery</span>
              </a>
            </li>
           
            <p className="title">ACCOUNT</p>
           
            <li>
              <a href="/logout">
                <ExitToAppIcon className='icon' />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar

