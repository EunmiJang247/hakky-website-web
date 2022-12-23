import useLogic from './use-logic';
import Loading from '../../components/loading';
import Failed from '../../components/failed';
import MenuBarApp from '../../components/menu-bar-app';
import ExhibAdsApp from '../../components/exhib-ads-app';
import FooterApp from '../../components/footer-app';
import ExhibsExplorerFragment from './fragments/exhibs-explorer';
import styles from './index.module.scss';

const MainPage = () => {
  const logic = useLogic();

  if (logic.status === 'LOADING') {
    return <Loading />;
  }

  if (logic.status === 'FAILED') {
    return <Failed logic={logic} />;
  }

  return (
    <>
      <MenuBarApp />
      <ExhibAdsApp />
      <ExhibsExplorerFragment logic={logic} />
      <FooterApp className={styles.footer} />
    </>
  );
};

export default MainPage;
