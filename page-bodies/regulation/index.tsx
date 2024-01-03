import React, { useEffect } from 'react';
import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBar from '../../components/menu-bar';
import Footer from '../../components/footer';

const RegulationDetailPage = () => {
  const logic = useLogic();

  const stripHtmlTags = (htmlString: string) => {
    if (typeof window !== 'undefined' && window.DOMParser) {
      const doc = new DOMParser().parseFromString(htmlString, 'text/html');
      const textContent = doc.body.textContent || '';
      return textContent.trim();
    }
    return htmlString;
  };

  useEffect(() => {
    if (logic.status === 'LOADED') {
      const strippedHtml = stripHtmlTags(logic.regulation);
    }
  }, [logic.status]);

  if (logic.status === 'LOADING') {
    return <Loading />;
  }

  if (logic.status === 'FAILED') {
    return <Failed logic={logic} />;
  }

  return (
    <div className="bg-gradient bg-no-repeat bg-cover min-h-screen flex flex-col overflow-hidden">
      <MenuBar />
      <div className="w-full flex justify-center items-center py-20 md:py-15 sm:py-10">
        <div className="w-full max-w-[1420px] p-5">
          <div className="min-h-96 p-5 text-white bg-black">
            <div dangerouslySetInnerHTML={{ __html: stripHtmlTags(logic.regulation) }} />
          </div>
        </div>
      </div>
      <div className="space100 md:space60" />
      <Footer />
    </div>
  );
};

export default RegulationDetailPage;
