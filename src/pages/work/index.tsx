import type { NextPage } from 'next';
import InnerHeading from '../../components/inner-heading';
import PageWrapper from '../../components/page-wrapper';
import WorkSection from '../../components/work-section';

const Work: NextPage = () => {
    return (
        <PageWrapper>
            <InnerHeading text={`My work`} />
            <WorkSection />
        </PageWrapper>
    );
};

export default Work;
