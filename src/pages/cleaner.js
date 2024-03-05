import HomeLayout from '@/components/HomeLayout';
import Head from 'next/head';
import "../app/globals.css";
import "../app/fonts.css";
import CleanerApplication from '../components/ApplicationForms/CleanersForm';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Register as a cleaner | Ebenezer Cleaning Services - Toronto</title>
        <meta name="description" content="Your page description goes here." />
        <link rel="icon" href="/logo/icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" />
      </Head>

      <HomeLayout>
        <CleanerApplication />
      </HomeLayout>
    </div>
  );
};

export default Contact;
