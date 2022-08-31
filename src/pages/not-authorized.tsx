import { NextPage } from 'next'

import PageWrapper from '../components/page-wrapper'
import InnerHeading from '../components/inner-heading'

const NotAuthorized: NextPage = () => {
  return (
    <PageWrapper>
      <InnerHeading text={`Not authorized`} />
    </PageWrapper>
  )
}

export default NotAuthorized
