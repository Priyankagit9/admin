// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'
var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
  iframes[i].parentNode.removeChild(iframes[i]);
}
const LayoutEmpty = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Layout Empty' breadCrumbParent='Layouts' breadCrumbActive='Layout Empty' />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Info: </span>
          <span>
            This layout can be useful for getting started with empty content section. Please check the{' '}
            <a
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/page-layouts'
              target='_blank'
            >
              Layout empty documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
    </Fragment>
  )
}

export default LayoutEmpty
