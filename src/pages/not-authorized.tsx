import { NextPage } from 'next';
import InnerHeading from '../components/inner-heading';
import PageWrapper from '../components/page-wrapper';

const NotAuthorized: NextPage = () => {
    return (
        <PageWrapper>
            <InnerHeading text={`Not authorized`} />
        </PageWrapper>
    );
};

export default NotAuthorized;
