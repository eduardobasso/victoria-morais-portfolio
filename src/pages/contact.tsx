import { NextPage } from 'next';
import ContactSection from '../components/contact-section';
import PageWrapper from '../components/page-wrapper';

const Contact: NextPage = () => {
    return (
        <PageWrapper>
            <ContactSection />
        </PageWrapper>
    );
};

export default Contact;
