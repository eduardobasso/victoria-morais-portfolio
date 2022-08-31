import type { NextPage } from 'next'
// import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
// import nookies, { setCookie, destroyCookie } from 'nookies'

import PageWrapper from '../../components/page-wrapper'
import InnerHeading from '../../components/inner-heading'
import WorkSection from '../../components/work-section'

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   nookies.set(context, `${process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_KEY}`, `${process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_VALUE}`, {
//     maxAge: 10,
//     path: '/',
//   })
//   return {
//     props: {},
//   }
// }

const Work: NextPage = () => {
  // setCookie(null, `${process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_KEY}`, `${process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_VALUE}`, {
  //   maxAge: 10,
  //   path: '/',
  // })

  return (
    <PageWrapper>
      <InnerHeading text={`My work`} />
      <WorkSection />
    </PageWrapper>
  )
}

export default Work
