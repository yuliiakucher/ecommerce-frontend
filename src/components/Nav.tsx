import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { useTranslation } from 'react-i18next';

function Nav() {
  const { t } = useTranslation("nav");

  return (

    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <img src="public/img/logo.webp" alt="logo" className='w-52'/>
        </NavigationMenuItem>
        <NavigationMenuItem>{t('menu.discover')}</NavigationMenuItem>
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  );
}

export default Nav;
